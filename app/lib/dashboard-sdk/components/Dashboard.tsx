import { useEffect, useState, useRef } from "react";
import { UniversalChartOrchestrator } from "../core/uco";
import { BillboardChart } from "./BillboardChart";
import { ChatPanel } from "./ChatPanel";
import { fetchDashboardMetrics } from "../../../services/api";
import type { ChartSpec, DataMap } from "../types";

// Types
interface DashboardProps {
    initialSpecs?: ChartSpec[];
    initialFilters?: Record<string, any>;
    apiEndpoint?: string;
    apiKey?: string; // AI API Key
}

export const Dashboard = ({ initialSpecs = [], initialFilters = {}, apiKey, apiEndpoint }: DashboardProps) => {
    const [specs, setSpecs] = useState<ChartSpec[]>(initialSpecs);
    const [filters, setFilters] = useState<Record<string, any>>(initialFilters);
    const [dataMap, setDataMap] = useState<any>({}); // Using 'any' for now to match UCO return
    const [kpiData, setKpiData] = useState<any>({ healthScore: 0, reviewCycles: 0, slaCompliance: 0 });
    const [loading, setLoading] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(true);

    const ucoRef = useRef(new UniversalChartOrchestrator());
    const uco = ucoRef.current;

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

                const [results, kpis] = await Promise.all([
                    uco.fetchAll(activeSpecs, filters),
                    fetchDashboardMetrics(filters)
                ]);

                setDataMap(results);
                setKpiData(kpis);
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
            flexDirection: "column" as const
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
            <div style={styles.metricsGrid}>
                <div style={styles.metricCard}>
                    <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>System Health</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{kpiData.healthScore}%</div>
                </div>
                <div style={styles.metricCard}>
                    <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Review Cycles</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>{kpiData.reviewCycles}</div>
                </div>
                <div style={styles.metricCard}>
                    <h3 style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>SLA Compliance</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>{kpiData.slaCompliance}%</div>
                </div>
            </div>

            {/* Charts */}
            <div style={styles.chartsGrid}>
                {specs.map((spec, index) => {
                    const chartData = uco.getDataForSpec(spec, dataMap, filters);
                    return (
                        <div key={index} style={styles.chartCard}>
                            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>{spec.ti}</h3>
                            <BillboardChart id={`embed-chart-${index}`} spec={spec} data={chartData} />
                        </div>
                    );
                })}
            </div>

            <button onClick={() => setIsChatOpen(true)} style={styles.fab}>💬</button>

            {isChatOpen && (
                <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 9001 }}>
                    <ChatPanel
                        onClose={() => setIsChatOpen(false)}
                        contextData={{ kpiData, specs, globalFilters: filters }}
                        onUpdateDashboard={handleDashboardUpdate}
                        apiKey={apiKey}
                        apiEndpoint={apiEndpoint}
                    />
                </div>
            )}
        </div>
    );
};
