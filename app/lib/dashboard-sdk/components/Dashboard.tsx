import { useEffect, useState, useRef } from "react";
import { UniversalChartOrchestrator } from "../core/uco";
import { BillboardChart } from "./BillboardChart";
import { ChatPanel } from "./ChatPanel";
// import { fetchDashboardMetrics } from "../../../services/api"; // Removed
import type { ChartSpec, DataMap } from "../types";

// Types
interface DashboardProps {
    initialSpecs?: ChartSpec[];
    initialFilters?: Record<string, any>;
    apiEndpoint?: string;
    apiKey?: string; // AI API Key
    contextData?: Record<string, any>; // Optional context for Chat (e.g. KPIs)
}

export const Dashboard = ({ initialSpecs = [], initialFilters = {}, apiKey, apiEndpoint, contextData = {} }: DashboardProps) => {
    const [specs, setSpecs] = useState<ChartSpec[]>(initialSpecs);
    const [filters, setFilters] = useState<Record<string, any>>(initialFilters);
    const [dataMap, setDataMap] = useState<any>({});
    const [errorMap, setErrorMap] = useState<Record<string, string>>({});

    const [loading, setLoading] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(true);

    const ucoRef = useRef(new UniversalChartOrchestrator({ endpoint: apiEndpoint }));
    const uco = ucoRef.current;

    // Update UCO config if endpoint changes
    useEffect(() => {
        uco.setConfig({ endpoint: apiEndpoint });
    }, [apiEndpoint]);

    // Initial Data Fetch & Updates
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                // Default specs if empty
                let activeSpecs = specs;
                if (activeSpecs.length === 0) {
                    activeSpecs = [
                        { t: 'bar', m: ['prs_opened', 'prs_merged'], ti: 'PR Velocity' },
                        { t: 'area', m: ['time_to_merge'], ti: 'Time to Merge (Avg Days)' },
                        { t: 'line', m: ['active_contributors'], ti: 'Active Contributors' },
                        { t: 'bar', m: ['bugs_reported', 'bugs_fixed'], ti: 'Quality: Bugs' }
                    ];
                    setSpecs(activeSpecs);
                }

                const { data, errors } = await uco.fetchAll(activeSpecs, filters);
                setDataMap(data);
                setErrorMap(errors);


                // Note: We no longer fetch KPIs here. 
                // Host app must pass them if they want them shown.
            } catch (err) {
                console.error("Dashboard failed to load:", err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [specs, filters]); // Re-fetch when specs or filters change

    const handleDashboardUpdate = (newContext: { specs?: any[], filters?: Record<string, any> }) => {
        if (newContext.specs) setSpecs(newContext.specs);
        if (newContext.filters) setFilters(prev => ({ ...prev, ...newContext.filters }));
    };

    const updateFilter = (key: string, value: string) => {
        setFilters(prev => {
            const next = { ...prev };
            if (value) next[key] = value;
            else delete next[key];
            return next;
        });
    };

    const styles = {
        // ... Copying mostly from Home.tsx but scoping to the dashboard container
        container: {
            fontFamily: "'Inter', sans-serif",
            color: "#0f172a",
            background: "#f8fafc",
            minHeight: "100%",
            display: "flex",
            flexDirection: "column" as const,
            padding: "1.5rem",
            boxSizing: "border-box" as const
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
            zIndex: 9000 // High z-index for widget
        }
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <div>
                    <h2 style={styles.title}>Git Metrics Dashboard</h2>
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Powered by Dashboard SDK</p>
                </div>

                <div style={styles.controls}>
                    {loading && <span style={{ fontSize: '0.8rem', color: '#3b82f6' }}>Loading...</span>}

                    {uco.getAvailableFilters().map((filterConfig) => (
                        <select
                            key={filterConfig.key}
                            style={styles.select}
                            value={filters[filterConfig.key] || ""}
                            onChange={(e) => updateFilter(filterConfig.key, e.target.value)}
                        >
                            {filterConfig.options.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    ))}
                </div>
            </header>

            {/* KPIs */}


            {/* Charts */}
            <div style={styles.chartsGrid}>
                {specs.map((spec, index) => {
                    const chartData = uco.getDataForSpec(spec, dataMap, filters);
                    const error = uco.getErrorForSpec(spec, errorMap, filters);

                    console.log(`[Dashboard] Rendering Chart ${index} (${spec.ti})`, { chartData, error });

                    return (
                        <div key={index} style={styles.chartCard}>
                            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>{spec.ti}</h3>
                            {error ? (
                                <div style={{
                                    height: '300px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ef4444',
                                    background: '#fef2f2',
                                    borderRadius: '8px',
                                    flexDirection: 'column',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                                    <span>Failed to load data</span>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Check API Endpoint</span>
                                </div>
                            ) : (
                                <BillboardChart id={`embed-chart-${index}`} spec={spec} data={chartData} />
                            )}
                        </div>
                    );
                })}
            </div>

            <button onClick={() => setIsChatOpen(true)} style={styles.fab}>💬</button>

            {isChatOpen && (
                <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 9001 }}>
                    <ChatPanel
                        onClose={() => setIsChatOpen(false)}
                        contextData={{ ...contextData, specs, globalFilters: filters }}
                        onUpdateDashboard={handleDashboardUpdate}
                        apiKey={apiKey}
                    />
                </div>
            )}
        </div>
    );
};
