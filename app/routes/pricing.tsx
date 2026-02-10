import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";

export function meta() {
    return [
        { title: "Pricing - $$$" },
        { name: "description", content: "Serious pricing for serious business" },
    ];
}

export default function Pricing() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState("#facc15");

    useEffect(() => {
        const interval = setInterval(() => {
            // Random position within a constrained area to keep it somewhat visible but chaotic
            const x = (Math.random() - 0.5) * 50; // +/- 25px jitter
            const y = (Math.random() - 0.5) * 50;

            // Random vibrant colors
            const colors = ["#facc15", "#ef4444", "#3b82f6", "#a855f7", "#22c55e", "#ec4899"];
            setColor(colors[Math.floor(Math.random() * colors.length)]);

            setPosition({ x, y });
        }, 200); // Jump every 200ms

        return () => clearInterval(interval);
    }, []);

    const styles = {
        container: {
            display: "flex",
            minHeight: "100vh",
            background: "#0f172a",
            color: "#f8fafc",
            overflow: "hidden" // Prevent scrollbars from jumping elements
        },
        main: {
            flex: 1,
            padding: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative" as const,
        },
        wrapper: {
            textAlign: "center" as const,
        },
        jumpingText: {
            fontSize: "3rem",
            fontWeight: "900",
            color: color,
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
            transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: `translate(${position.x}px, ${position.y}px) rotate(${position.x}deg)`,
            cursor: "pointer",
            userSelect: "none" as const
        },
        subtext: {
            marginTop: "2rem",
            fontSize: "1.2rem",
            color: "#94a3b8",
            maxWidth: "600px",
            margin: "2rem auto"
        },
        moneyRain: {
            position: "absolute" as const,
            fontSize: "2rem",
            animation: "fall linear infinite",
            top: "-50px"
        }
    };

    return (
        <div style={styles.container}>
            <Sidebar />
            <style>{`
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
      `}</style>

            <main style={styles.main}>
                <div style={styles.wrapper}>
                    <h1 style={styles.jumpingText}>
                        contact nhac.ly@hotmail.com <br />
                        with 1 BILLION dollars!!! 💸
                    </h1>

                    <p style={styles.subtext}>
                        No refunds. No extensions. Just send the money.
                    </p>

                    <div style={{ fontSize: "5rem", animation: "bounce 0.5s infinite" }}>
                        🤑
                    </div>
                </div>
            </main>
        </div>
    );
}
