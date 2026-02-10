import { Sidebar } from "../components/Sidebar";

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
        apiEndpoint: 'https://your-backend.com/api/chat', // Secure Proxy
        // apiKey: '...', // UNSAFE in public widgets, use apiEndpoint instead
        filters: { repository: 'frontend-ui' },
        specs: [
           { t: 'bar', m: ['prs_opened'], ti: 'PRs (Widget)' }
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
