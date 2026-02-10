
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import { useUCO } from "../hooks/useUCO";
import { billboardAdapter } from "../lib/uco/adapters/billboardAdapter";
import type { ChartSpec } from "../lib/uco/UniversalChartController";
// @ts-ignore
import sampleData from "../../sample.json";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Router v7 - UMCO V2" },
    { name: "description", content: "A demo app using UMCO V2 for Multi-Chart Management" },
  ];
}

// Sub-component for individual chart lifecycle
const BillboardChart = ({
  id,
  spec,
  data
}: {
  id: string,
  spec: ChartSpec,
  data: any[]
}) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const bb = (window as any).bb;
    if (!bb) return;

    // Initial generation
    // specific 'bindto'
    const config = billboardAdapter(spec, data);

    // Merge adapter config with bindto
    const finalConfig = {
      ...config,
      bindto: `#${id}`,
      data: {
        ...config.data,
        columns: config.data?.columns || [],
        type: config.data?.type || 'line'
      }
    };

    chartRef.current = bb.generate(finalConfig);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []); // Run once on mount to generate

  // React to spec changes
  useEffect(() => {
    if (!chartRef.current) return;

    const config = billboardAdapter(spec, data);

    if (config.data) {
      console.log(`Loading data for ${id}`, spec);
      chartRef.current.load({
        columns: config.data.columns,
        type: config.data.type,
        groups: config.data.groups,
        unload: true, // Crucial for switching full datasets/types
      });
    }
  }, [spec, data, id]);

  return <div id={id} style={{ minHeight: "300px" }}></div>;
};

export default function Home() {
  const [charts, { addChart, updateChart, removeChart }] = useUCO();

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      background: "radial-gradient(circle at top right, #3b0764, #0f172a)",
      padding: "2rem",
      color: "white"
    },
    hero: {
      maxWidth: "1000px",
      width: "100%",
      animation: "fadeIn 1s ease-out",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "800",
      textAlign: "center" as const,
      background: "linear-gradient(to right, #c084fc, #e879f9)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "2rem",
      marginBottom: "2rem"
    },
    card: {
      background: "rgba(255, 255, 255, 0.9)",
      borderRadius: "12px",
      padding: "1rem",
      color: "#000",
      position: "relative" as const
    },
    controls: {
      marginTop: "1rem",
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap" as const
    },
    button: {
      padding: "0.25rem 0.75rem",
      fontSize: "0.875rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      cursor: "pointer",
      background: "#eee"
    },
    activeBtn: {
      background: "#8b5cf6",
      color: "white",
      border: "1px solid #7c3aed"
    },
    mainControls: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2rem",
      color: "#ccc"
    }
  };

  return (
    <div style={styles.container}>
      <main style={styles.hero}>
        <h1 style={styles.title}>UMCO V2: URL Driven</h1>

        <div style={styles.mainControls}>
          <p>Configure charts via URL query parameter <code>?c=[...]</code></p>
        </div>

        <div style={styles.grid}>
          {charts.map((spec, index) => <div key={index} style={styles.card}>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>{spec.ti || `Chart ${index}`}</strong>
            </div>

            <BillboardChart
              id={`chart-${index}`}
              spec={spec}
              data={sampleData}
            />
          </div>
          )}
        </div>

        {charts.length === 0 && (
          <div style={{ textAlign: "center", color: "#94a3b8" }}>
            <p>No charts. Click "Add New Chart" to start.</p>
          </div>
        )}

      </main>
    </div>
  );
}
