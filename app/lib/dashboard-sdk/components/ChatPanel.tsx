import { useState, useEffect, useRef } from "react";
import { sendChatRequest } from "../core/ai";
import type { ChatMessage } from "../types";

export const ChatPanel = ({ onClose, contextData, onUpdateDashboard, apiKey: initialApiKey, apiEndpoint }: { onClose: () => void, contextData: any, onUpdateDashboard?: (data: any) => void, apiKey?: string, apiEndpoint?: string }) => {
    const [input, setInput] = useState("");

    // Secure Default: Use provided endpoint OR default to /api/chat
    // We treat empty string as "Use Default" here to ensure Chat works without config
    const effectiveEndpoint = apiEndpoint || '/api/chat';

    // Note: We ignore client-side API keys to enforce secure proxy usage
    const apiKey = "";

    const [isConfiguring, setIsConfiguring] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Initial message
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'assistant', content: "Hello! I have access to the dashboard metrics. Ask me about the PR velocity, SLA status, or contributors." }
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages]);

    // Removed handleSaveKey explicitly as we don't want client-side keys

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

Capabilities:
- You can CONTROL the dashboard view. If the user asks to see specific charts, focus on a metric, or filter by a repository/date, you must output a JSON command block.
- Format:
:::VIEW_UPDATE
{
  "specs": [ ...array of chart specs... ],
  "filters": { "repository": "backend-api", "date": "7d" }
}
:::
- Use 'specs' to change the displayed charts. A spec has { t: 'bar'|'line', m: ['metric_name'], ti: 'Title' }.
  - Available metrics: prs_opened, prs_merged, time_to_merge, active_contributors, bugs_reported, bugs_fixed, health_score, review_cycles, sla_compliance, code_coverage, api_latency_ms.
- Use 'filters' to set global filters.
  - repository options: 'frontend-ui', 'backend-api', 'auth-service', '' (for all).
  - date options: '7d', '30d'.
- ONLY output the JSON block if the user explicitly asks to change the view or if your insight requires visualizing specific data.
- IMPORTANT: When updating the view, ALWAYS include a small sample of the relevant data values in your text response (e.g., "Review cycles have dropped from 1.5 to 0.85..."). Can be a small markdown table or bullet points.
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

            const responseText = await sendChatRequest({ apiKey, endpoint: effectiveEndpoint }, apiMessages);

            // Check for View Update Command
            const viewUpdateMatch = responseText.match(/:::VIEW_UPDATE\s*(\{.*?\})\s*:::/s);
            let cleanResponse = responseText;

            if (viewUpdateMatch) {
                try {
                    const updateData = JSON.parse(viewUpdateMatch[1]);
                    console.log("AI Requested View Update:", updateData);
                    if (onUpdateDashboard) onUpdateDashboard(updateData);

                    // Remove the command from the displayed message
                    cleanResponse = responseText.replace(viewUpdateMatch[0], '').trim();
                } catch (e) {
                    console.error("Failed to parse AI View Update:", e);
                }
            }

            setMessages(prev => [...prev, { role: 'assistant', content: cleanResponse }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please check your configuration." }]);
        } finally {
            setIsLoading(false);
        }
    };

    // Configuration UI Removed for Security
    // If we ever need it back, we can re-enable it.
    // For now, prevent rendering it.
    if (isConfiguring) {
        setIsConfiguring(false); // Auto-close if it somehow gets open
        return null;
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
