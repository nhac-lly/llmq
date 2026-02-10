import { Sidebar } from "../components/Sidebar";
import { useEffect } from "react";

export default function About() {
    const styles = {
        container: {
            display: "flex",
            minHeight: "100vh",
            background: "#0f172a",
            color: "#f8fafc",
        },
        main: {
            flex: 1,
            padding: "4rem 2rem",
        },
        content: {
            maxWidth: "800px",
            margin: "0 auto",
        },
        // ... (keep other styles)
        header: {
            // ...
        },
        logo: {
            // ...
        },
        navLink: {
            // ...
        },
        sectionTitle: {
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "2rem",
            color: "#f1f5f9",
        },
        cardGrid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "2rem"
        },
        card: {
            background: "rgba(30, 41, 59, 0.5)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
            padding: "2rem",
            borderRadius: "1rem",
            transition: "border-color 0.2s, transform 0.2s",
        },
        cardTitle: {
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "#e2e8f0",
        },
        cardText: {
            color: "#94a3b8",
            lineHeight: "1.6",
        },
    };

    return (
        <div style={styles.container}>
            <Sidebar />
            <main style={styles.main}>
                <div style={styles.content}>
                    <header style={{ marginBottom: "4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>About & Documentation</h1>
                    </header>

                    <section>
                        <h2 style={styles.sectionTitle}>Two Modes of Operation</h2>
                        <div style={styles.cardGrid}>
                            <div style={styles.card}>
                                <h3 style={styles.cardTitle}>1. Without SDK (Manual)</h3>
                                <p style={styles.cardText}>
                                    The <strong>Manual Dashboard</strong> demonstrates a traditional, hardcoded approach.
                                    Charts are manually configured in the code, data is static, and there is no
                                    central orchestration or AI integration. This represents the "Before" state.
                                </p>
                            </div>
                            <div style={styles.card}>
                                <h3 style={styles.cardTitle}>2. With SDK (Dynamic)</h3>
                                <p style={styles.cardText}>
                                    The <strong>Dynamic Dashboard</strong> uses the new <code>dashboard-sdk</code>.
                                    It features the <strong>Universal Chart Orchestrator (UCO)</strong> which handles
                                    URL-driven state, dynamic data fetching, and integration with the AI Assistant
                                    for natural language control.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginTop: "4rem" }}>
                        <h2 style={styles.sectionTitle}>Live Demo</h2>
                        <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
                            Below is the actua <strong>SDK Widget</strong> running inside this React page.
                            It is isolated from the main app logic and fetches its own data via the secure proxy.
                        </p>

                        {/* Widget Container */}
                        <div id="demo-dashboard" style={{
                            background: "#f1f5f9",
                            padding: "2rem",
                            borderRadius: "12px",
                            minHeight: "500px"
                        }}></div>

                        {/* Init Script */}
                        <DemoInitializer />
                    </section>

                    <section style={{ marginTop: "4rem" }}>
                        <h2 style={styles.sectionTitle}>Embed as Widget</h2>
                        <div style={styles.card}>
                            <h3 style={styles.cardTitle}>Drop-in Script</h3>
                            <p style={{ ...styles.cardText, marginBottom: "1rem" }}>
                                You can embed the full dashboard into any HTML page using our standalone widget script.
                            </p>
                            <div style={{ background: "#0f172a", padding: "1rem", borderRadius: "8px", overflowX: "auto" }}>
                                <pre style={{ color: "#e2e8f0", fontFamily: "monospace", fontSize: "0.875rem" }}>
                                    {`<!-- 1. Include the Styles & Script -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/billboard.js@3/dist/billboard.min.css">
<script type="module" src="/sdk/dashboard-widget.es.js"></script>

<!-- 2. Create a Container -->
<div id="my-dashboard" style="height: 800px; width: 100%;"></div>

<!-- 3. Initialize -->
<script>
  window.onload = () => {
    if (window.renderDashboard) {
        window.renderDashboard('my-dashboard', {
            apiEndpoint: '/api/chat', // Use Secure Proxy
            specs: [
                { t: 'bar', m: ['prs_opened', 'prs_merged'], ti: 'PR Velocity' },
                { t: 'area', m: ['time_to_merge'], ti: 'Time to Merge' }
            ]
        });
    }
  };
</script>`}
                                </pre>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

// Helper component to initialize the widget
function DemoInitializer() {
    useEffect(() => {
        const initWidget = () => {
            if ((window as any).renderDashboard) {
                (window as any).renderDashboard('demo-dashboard', {
                    apiEndpoint: '/api/chat',
                    specs: [
                        { t: 'bar', m: ['prs_opened', 'prs_merged'], ti: 'Pull Request Velocity' },
                        { t: 'line', m: ['active_contributors'], ti: 'Active Contributors' }
                    ]
                });
            } else {
                // Retry if script not yet loaded
                setTimeout(initWidget, 500);
            }
        };

        // Load Script Dynamically
        const script = document.createElement('script');
        script.src = "/sdk/dashboard-widget.es.js";
        script.type = "module";
        script.onload = initWidget;
        document.body.appendChild(script);

        // Load Styles
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/billboard.js@3/dist/billboard.min.css";
        document.head.appendChild(link);

        return () => {
            document.body.removeChild(script);
            // document.head.removeChild(link); // Keep styles needed for cleanup?
        }
    }, []);

    return null;
}
