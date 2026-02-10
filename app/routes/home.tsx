import type { Route } from "./+types/home";
import { Link, useLoaderData, useSearchParams, useNavigate, useNavigation } from "react-router";
import { useEffect, useRef, useState } from "react";
import { fetchChartData, fetchDashboardMetrics } from "../services/api";
import { billboardAdapter } from "../lib/uco/adapters/billboardAdapter";
import { UniversalChartOrchestrator, type ChartSpec } from "../lib/uco/sdk";

// Initialize SDK
const uco = new UniversalChartOrchestrator();

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Router v7 - UCO SDK Demo" },
    { name: "description", content: "A demo app using UCO SDK" },
  ];
}

// --- LOADER (Uses SDK) ---
export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);

  // 1. Parsing Logic (SDK)
  let specs = uco.parse(url.searchParams);

  // Default to Stitch-like configuration if no specs present
  if (specs.length === 0) {
    specs = [
      { t: 'bar', m: ['prs_opened', 'prs_merged'], ti: 'PR Velocity' },
      { t: 'area', m: ['time_to_merge'], ti: 'Time to Merge (Avg Days)' },
      { t: 'line', m: ['active_contributors'], ti: 'Active Contributors' },
      { t: 'bar', m: ['bugs_reported', 'bugs_fixed'], ti: 'Quality: Bugs' }
    ];
  }

  // 2. Extract Global Filters (e.g. ?repository=backend)
  const globalFilters: Record<string, any> = {};

  // Dynamic extraction based on SDK definitions
  uco.getAvailableFilters().forEach(f => {
    if (url.searchParams.has(f.key)) {
      globalFilters[f.key] = url.searchParams.get(f.key);
    }
  });

  // 3. Fetch Data Logic (SDK)
  // this handles merging global filters + independent chart filters
  const [resultMap, kpiData] = await Promise.all([
    uco.fetchAll(specs, globalFilters),
    fetchDashboardMetrics(globalFilters)
  ]);

  return { specs, resultMap, globalFilters, kpiData };
}

// Explicit type for useLoaderData if inference fails
type LoaderData = Awaited<ReturnType<typeof clientLoader>>;

// Sub-component for individual chart lifecycle
const BillboardChart = ({
  id,
  spec,
  data,
}: {
  id: string,
  spec: ChartSpec,
  data: any[]
}) => {
  const chartInstance = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lifecycle
  useEffect(() => {
    const bb = (window as any).bb;
    if (!bb || !containerRef.current) return;

    if (chartInstance.current) {
      try { chartInstance.current.destroy(); } catch (e) { }
      chartInstance.current = null;
    }

    const config = billboardAdapter(spec, data);

    chartInstance.current = bb.generate({
      ...config,
      bindto: containerRef.current,
      data: {
        ...config.data,
        columns: config.data?.columns || [],
        type: config.data?.type || 'line'
      }
    });

    return () => {
      if (chartInstance.current) {
        try { chartInstance.current.destroy(); } catch (e) { }
        chartInstance.current = null;
      }
    };
  }, []);

  // Update Data/Spec
  // Update Data/Spec
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render because bb.generate() inside the mount effect 
    // already handles the initial data.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!chartInstance.current) return;

    const config = billboardAdapter(spec, data);

    if (config.data) {
      chartInstance.current.load({
        columns: config.data.columns,
        type: config.data.type,
        groups: config.data.groups,
        unload: true,
      });
    }
  }, [spec, data]);

  return (
    <div style={{ minHeight: "300px", position: "relative" }}>
      <div ref={containerRef} style={{ width: "100%", minHeight: "300px" }} />
    </div>
  );
};

// --- CHAT COMPONENTS ---
import { sendChatRequest, type ChatMessage } from "../services/ai";

const ChatPanel = ({ onClose, contextData }: { onClose: () => void, contextData: any }) => {
  const [input, setInput] = useState("");
  // Use Env Var as source of truth, fallback to local storage if needed (or empty)
  const envKey = import.meta.env.VITE_PERPLEXITY_API_KEY || "";
  const [apiKey, setApiKey] = useState(() => envKey || localStorage.getItem("pplx_api_key") || "");
  const [isConfiguring, setIsConfiguring] = useState(!apiKey);
  const [isLoading, setIsLoading] = useState(false);

  // Initial message
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hello! I have access to the dashboard metrics. Ask me about the PR velocity, SLA status, or contributors." }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSaveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem("pplx_api_key", key);
    setIsConfiguring(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput("");
    setIsLoading(true);

    const newHistory: ChatMessage[] = [...messages, { role: 'user', content: userText }];
    setMessages(newHistory);

    try {
      // Construct System Prompt with Context
      const systemPrompt = `
You are an expert Data Analyst Assistant for a Git Role-Based Management Dashboard.
Current Configuration & Data:
- KPIs: ${JSON.stringify(contextData.kpiData)}
- Global Filters: ${JSON.stringify(contextData.globalFilters)}
- Active Charts: ${contextData.specs.map((s: any) => s.ti || s.m.join(', ')).join('; ')}

Current Data Access:
I have simulated access to the underlying Git metrics database.
If asked about specific numbers not in the summary, assume logical extrapolations based on the summary provided.

Rules:
- Be concise and professional.
- Refer to the specific metrics provided above.
- If the user asks for actionable insights, provide them based on the SLA comliance and Review Cycles.
            `.trim();

      // Filter out the initial greeting if it's the first message and from assistant
      const validHistory = newHistory.filter((msg, index) => {
        if (index === 0 && msg.role === 'assistant') return false;
        return true;
      });

      const apiMessages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        ...validHistory.map(m => ({ role: m.role, content: m.content }))
      ];

      const responseText = await sendChatRequest(apiKey, apiMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error connecting to Perplexity. Please check your API Key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isConfiguring) {
    return (
      <div style={{
        position: 'fixed', bottom: '2rem', right: '2rem', width: '350px', height: '200px',
        background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
        display: 'flex', flexDirection: 'column', padding: '1.5rem', border: '1px solid #e2e8f0', zIndex: 100
      }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Setup AI Chat</h3>
        <input
          type="password"
          placeholder="Enter Perplexity API Key"
          onChange={(e) => setApiKey(e.target.value)}
          value={apiKey}
          style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '1rem' }}
        />
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ padding: '0.5rem 1rem', background: 'transparent', border: 'none', cursor: 'pointer' }}>Cancel</button>
          <button onClick={() => handleSaveKey(apiKey)} style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Start Chat</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      width: '350px',
      height: '500px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      border: '1px solid #e2e8f0',
      zIndex: 100
    }}>
      {/* Header */}
      <div style={{ padding: '1rem', background: '#eff6ff', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontWeight: '600', color: '#1e293b' }}>Analytics Assistant</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => setIsConfiguring(true)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '0.8rem', color: '#64748b' }}>⚙️</button>
          <button onClick={onClose} style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '1.25rem', color: '#64748b' }}>×</button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%',
            padding: '0.75rem 1rem',
            borderRadius: '12px',
            fontSize: '0.875rem',
            lineHeight: '1.4',
            background: msg.role === 'user' ? '#3b82f6' : '#f1f5f9',
            color: msg.role === 'user' ? 'white' : '#334155',
            borderBottomRightRadius: msg.role === 'user' ? '2px' : '12px',
            borderBottomLeftRadius: msg.role === 'assistant' ? '2px' : '12px',
            whiteSpace: 'pre-wrap'
          }}>
            {msg.content}
          </div>
        ))}
        {isLoading && <div style={{ alignSelf: 'flex-start', color: '#94a3b8', fontSize: '0.8rem', marginLeft: '1rem' }}>Thinking...</div>}
      </div>

      {/* Input */}
      <div style={{ padding: '1rem', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your metrics..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '0.5rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              outline: 'none',
              fontSize: '0.875rem'
            }}
          />
          <button onClick={handleSend} disabled={isLoading} style={{
            background: isLoading ? '#94a3b8' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '0 1rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};



// ... (component start)
export default function Home() {
  const { specs, resultMap, globalFilters, kpiData } = useLoaderData() as LoaderData;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const navigation = useNavigation();

  // Optimistic UI handled inside the render map loop now.

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);

    // Manual decoding (clean URLs)
    const queryString = newParams.toString()
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
      .replace(/%7B/g, '{')
      .replace(/%7D/g, '}')
      .replace(/%22/g, '"')
      .replace(/%2C/g, ',')
      .replace(/%3A/g, ':');

    navigate(`?${queryString}`);
  };

  const [isChatOpen, setIsChatOpen] = useState(true);

  // ... inside Home component ...

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      background: "#f8fafc", // Light dashboard background
      fontFamily: "'Inter', sans-serif",
      color: "#0f172a"
    },
    sidebar: {
      width: "64px",
      background: "#1e293b",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      padding: "1rem 0",
      gap: "1.5rem"
    },
    main: {
      flex: 1,
      padding: "2rem",
      overflowY: "auto" as const
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem"
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#0f172a"
    },
    controls: {
      display: "flex",
      gap: "1rem",
      alignItems: "center"
    },
    metricsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      marginBottom: "2rem"
    },
    metricCard: {
      background: "white",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #e2e8f0"
    },
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.5rem",
      marginBottom: "2rem"
    },
    chartCard: {
      background: "white",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #e2e8f0",
      minHeight: "400px"
    },
    select: {
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      border: "1px solid #cbd5e1",
      background: "white",
      color: "#334155",
      fontSize: "0.875rem",
      cursor: "pointer",
      outline: "none"
    },
    icon: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)"
    },
    fab: {
      position: 'fixed' as const,
      bottom: '2rem',
      right: '2rem',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: '#3b82f6',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      cursor: 'pointer',
      border: 'none',
      zIndex: 90
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={{ ...styles.icon, background: '#3b82f6' }} />
        <div style={styles.icon} />
        <div style={styles.icon} />
        <div style={styles.icon} />
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        {/* ... Header & Metrics ... */}
        <header style={styles.header}>
          {/* ... title ... */}
          <div>
            <h1 style={styles.title}>Git Role-Based Management Analytics</h1>
            <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Overview of system health and repository activity</p>
          </div>

          {/* ... controls ... */}
          <div style={styles.controls}>
            {/* Pending state indicator */}
            {navigation.state === "loading" && (
              <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>Updating...</span>
            )}

            {uco.getAvailableFilters().map((filterConfig) => {
              // Determine current value
              let currentValue = globalFilters[filterConfig.key] || "";

              // Optimistic Override
              if (navigation.location) {
                const pendingParams = new URLSearchParams(navigation.location.search);
                if (pendingParams.has(filterConfig.key)) {
                  currentValue = pendingParams.get(filterConfig.key) || "";
                }
              }

              // Default fallbacks if empty
              if (!currentValue && filterConfig.key === 'date') currentValue = '30d';

              return (
                <select
                  key={filterConfig.key}
                  style={{
                    ...styles.select,
                    opacity: navigation.state === "loading" ? 0.7 : 1,
                  }}
                  value={currentValue}
                  onChange={(e) => updateFilters(filterConfig.key, e.target.value)}
                  disabled={navigation.state === "loading"}
                  aria-label={filterConfig.label}
                >
                  {filterConfig.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              );
            })}
          </div>
        </header>

        {/* Top Metrics Row (Placeholder for Stitch Design 'System Health', etc.) */}
        <div style={styles.metricsGrid}>
          <div style={styles.metricCard}>
            <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>System Health Score</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{kpiData.healthScore}%</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Operational status normal</div>
          </div>
          <div style={styles.metricCard}>
            <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Avg Review Cycles</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>{kpiData.reviewCycles}</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>-0.3 from last month</div>
          </div>
          <div style={styles.metricCard}>
            <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>SLA Compliance</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>{kpiData.slaCompliance}%</div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Requires attention</div>
          </div>
        </div>

        {/* Charts Grid (UCO Driven) */}
        <div style={styles.chartsGrid}>
          {specs.map((spec, index) => {
            const chartData = uco.getDataForSpec(spec, resultMap, globalFilters);
            return (
              <div key={index} style={styles.chartCard}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>{spec.ti || `Analytics Chart ${index + 1}`}</h3>
                    {spec.f && spec.f.region && (
                      <span style={{ fontSize: '0.75rem', color: '#3b82f6', background: '#eff6ff', padding: '2px 8px', borderRadius: '12px' }}>
                        {spec.f.region.toUpperCase()} Only
                      </span>
                    )}
                  </div>
                  <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#cbd5e1' }}>•••</button>
                </div>

                <BillboardChart
                  id={`chart-${index}`}
                  spec={spec}
                  data={chartData}
                />
              </div>
            );
          })}
        </div>

        {specs.length === 0 && (
          <div style={{ textAlign: "center", color: "#94a3b8", padding: "4rem" }}>
            <p>No charts configuration found via URL.</p>
          </div>
        )}

      </main>

      {/* Fab to toggle chat */}
      {!isChatOpen && (
        <button onClick={() => setIsChatOpen(true)} style={styles.fab}>
          💬
        </button>
      )}

      {/* Chat Panel */}
      {isChatOpen && <ChatPanel
        onClose={() => setIsChatOpen(false)}
        contextData={{ kpiData, specs, globalFilters }}
      />}
    </div>
  );
}
