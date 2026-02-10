import { Link, useLocation } from "react-router";

export const Sidebar = () => {
    const location = useLocation();

    const styles = {
        sidebar: {
            width: "240px",
            background: "#1e293b",
            display: "flex",
            flexDirection: "column" as const,
            padding: "1.5rem",
            gap: "2rem",
            color: "#e2e8f0",
            borderRight: "1px solid #334155"
        },
        logo: {
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "white",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
        },
        nav: {
            display: "flex",
            flexDirection: "column" as const,
            gap: "0.5rem"
        },
        link: (isActive: boolean) => ({
            display: "flex",
            alignItems: "center",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            background: isActive ? "#3b82f6" : "transparent",
            color: isActive ? "white" : "#94a3b8",
            textDecoration: "none",
            fontWeight: isActive ? "600" : "400",
            transition: "all 0.2s",
            cursor: "pointer"
        }),
        sectionTitle: {
            fontSize: "0.75rem",
            textTransform: "uppercase" as const,
            letterSpacing: "0.05em",
            color: "#64748b",
            fontWeight: "600",
            marginBottom: "0.5rem",
            marginTop: "1rem"
        }
    };

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside style={styles.sidebar}>
            <div style={styles.logo}>
                <div style={{ width: "24px", height: "24px", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", borderRadius: "6px" }} />
                <span>UCO Demo</span>
            </div>

            <nav style={styles.nav}>
                <div style={styles.sectionTitle}>Demos</div>

                <Link to="/" style={styles.link(isActive("/"))}>
                    <span>🚀 With SDK (AI)</span>
                </Link>

                <Link to="/manual" style={styles.link(isActive("/manual"))}>
                    <span>🛠️ Without SDK</span>
                </Link>

                <div style={styles.sectionTitle}>Info</div>

                <Link to="/about" style={styles.link(isActive("/about"))}>
                    <span>ℹ️ How to Use</span>
                </Link>

                <Link to="/pricing" style={styles.link(isActive("/pricing"))}>
                    <span>💰 Pricing</span>
                </Link>
            </nav>

            <div style={{ marginTop: "auto", fontSize: "0.75rem", color: "#64748b" }}>
                v2.0.0 (SDK)
            </div>
        </aside>
    );
};
