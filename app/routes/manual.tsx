import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { BillboardChart, type ChartSpec } from "../lib/dashboard-sdk";
import { Sidebar } from "../components/Sidebar";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Manual Dashboard (No SDK)" },
        { name: "description", content: "Hardcoded dashboard without UCO SDK" },
    ];
}

// Hardcoded Data (Simulating "No SDK" data management)
const STATIC_DATA = {
    prs_opened: [12, 15, 18, 14, 22, 25],
    prs_merged: [10, 12, 15, 13, 20, 24],
    time_to_merge: [2.5, 2.8, 2.2, 2.1, 1.9, 1.8],
    active_contributors: [8, 9, 11, 11, 14, 15]
};

export default function ManualDashboard() {
    // Hardcoded Specs (Simulating "No SDK" configuration)
    const specs: ChartSpec[] = [
        { t: 'bar', m: ['prs_opened', 'prs_merged'], ti: 'PR Velocity (Static)' },
        { t: 'line', m: ['active_contributors'], ti: 'Contributors (Static)' }
    ];

    const styles = {
        container: {
            display: "flex",
            minHeight: "100vh",
            background: "#f8fafc",
            fontFamily: "'Inter', sans-serif",
            color: "#0f172a"
        },
        main: {
            flex: 1,
            padding: "2rem",
            overflowY: "auto" as const
        },
        header: {
            marginBottom: "2rem"
        },
        title: {
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#0f172a"
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
        warningBox: {
            background: "#fff7ed",
            border: "1px solid #fdba74",
            color: "#9a3412",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "2rem",
            fontSize: "0.9rem"
        }
    };

    return (
        <div style={styles.container}>
            <Sidebar />

            <main style={styles.main}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Manual Dashboard</h1>
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Implementation without UCO SDK or AI</p>
                </header>

                <div style={styles.warningBox}>
                    <strong>⚠️ No AI or State Management</strong><br />
                    This view is hardcoded. It does not respond to URL changes, does not support AI chat, and filters are not connected to a central orchestrator.
                </div>

                <div style={styles.chartsGrid}>
                    {specs.map((spec, index) => {
                        // Transform static data to match SDK expectation: [{ name: 'metric', values: [...] }]
                        const chartData = spec.m.map(metric => ({
                            name: metric,
                            values: (STATIC_DATA as any)[metric] || []
                        }));

                        return (
                            <div key={index} style={styles.chartCard}>
                                <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '1rem' }}>{spec.ti}</h3>
                                <BillboardChart
                                    id={`manual-chart-${index}`}
                                    spec={spec}
                                    data={chartData}
                                />
                            </div>
                        );
                    })}
                </div>

            </main>
        </div>
    );
}
