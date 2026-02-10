import type { Route } from "./+types/home";
import { Link, useLoaderData, useSearchParams, useNavigate, useNavigation } from "react-router";
import { useEffect, useState } from "react";
import { fetchChartData } from "../services/api";
import { fetchDashboardMetrics } from "../services/mock_kpi";
import { UniversalChartOrchestrator, BillboardChart, ChatPanel, type ChartSpec } from "../lib/dashboard-sdk";
import { Sidebar } from "../components/Sidebar";

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
  const [{ data: resultMap, errors }, kpiData] = await Promise.all([
    uco.fetchAll(specs, globalFilters),
    fetchDashboardMetrics(globalFilters)
  ]);

  return { specs, resultMap, globalFilters, kpiData };
}

// Explicit type for useLoaderData if inference fails
type LoaderData = Awaited<ReturnType<typeof clientLoader>>;


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
    navigate(`?${cleanURL(newParams)}`);
  };

  const cleanURL = (params: URLSearchParams) => {
    return params.toString()
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
      .replace(/%7B/g, '{')
      .replace(/%7D/g, '}')
      .replace(/%22/g, '"')
      .replace(/%2C/g, ',')
      .replace(/%3A/g, ':');
  };

  const handleDashboardUpdate = (newContext: { specs?: any[], filters?: Record<string, any> }) => {
    const newParams = new URLSearchParams(searchParams);

    // Update Specs (Charts)
    if (newContext.specs) {
      newParams.set('c', JSON.stringify(newContext.specs));
    }

    // Update Filters
    if (newContext.filters) {
      Object.entries(newContext.filters).forEach(([key, value]) => {
        if (value) newParams.set(key, String(value));
        else newParams.delete(key);
      });
    }

    navigate(`?${cleanURL(newParams)}`);
  };

  const [isChatOpen, setIsChatOpen] = useState(true);

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      background: "#f8fafc", // Light dashboard background
      fontFamily: "'Inter', sans-serif",
      color: "#0f172a"
    },
    // Sidebar style removed (handled by component)
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
      <Sidebar />

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
        {/* Top Metrics Row (KPIs moved from SDK to Host) */}
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
        onUpdateDashboard={handleDashboardUpdate}
        apiEndpoint="/api/chat"
      />}
    </div>
  );
}
