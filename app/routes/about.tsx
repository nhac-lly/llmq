import { Link } from "react-router";

export default function About() {
    const styles = {
        container: {
            minHeight: "100vh",
            background: "#0f172a",
            color: "#f8fafc",
            padding: "4rem 2rem",
        },
        content: {
            maxWidth: "800px",
            margin: "0 auto",
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "4rem",
        },
        logo: {
            fontSize: "1.5rem",
            fontWeight: "700",
            background: "linear-gradient(to right, #8b5cf6, #d946ef)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        navLink: {
            color: "#94a3b8",
            fontWeight: "500",
            transition: "color 0.2s",
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
            <div style={styles.content}>
                <header style={styles.header}>
                    <div style={styles.logo}>RRv7 Demo</div>
                    <nav>
                        <Link
                            to="/"
                            style={styles.navLink}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#f8fafc"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
                        >
                            Back Home
                        </Link>
                    </nav>
                </header>

                <section>
                    <h2 style={styles.sectionTitle}>Why Inline CSS?</h2>
                    <div style={styles.cardGrid}>
                        {[
                            {
                                title: "Zero Config",
                                text: "No complex build steps, preprocessors, or large CSS bundles to manage. It just works."
                            },
                            {
                                title: "Scoped by Default",
                                text: "Styles are naturally scoped to components, eliminating global namespace collisions."
                            },
                            {
                                title: "Dynamic Values",
                                text: "Easily interpolate JavaScript variables directly into your styles for dynamic theming."
                            }
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                style={styles.card}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.5)";
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <h3 style={styles.cardTitle}>{feature.title}</h3>
                                <p style={styles.cardText}>{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
