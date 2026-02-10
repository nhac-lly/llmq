import type { Route } from "./+types/home";
import { Link, useLoaderData, useSearchParams, useNavigate, useNavigation } from "react-router";
import { useEffect, useRef } from "react";
import { useUCO } from "../hooks/useUCO";
import { billboardAdapter } from "../lib/uco/adapters/billboardAdapter";
import { UniversalChartOrchestrator, type ChartSpec } from "../lib/uco/sdk";

// Initialize SDK
const uco = new UniversalChartOrchestrator();

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Router v7 - UCO SDK Demo" },
    { name: "description", content: "A demo app using UCO SDK" },
  ];
}

// --- LOADER (Uses SDK) ---
export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const url = new URL(request.url);

  // 1. Parsing Logic (SDK)
  const specs = uco.parse(url.searchParams);

  // 2. Extract Global Filters (e.g. ?region=eu)
  const globalFilters: Record<string, any> = {};
  if (url.searchParams.has("region")) globalFilters.region = url.searchParams.get("region");
  if (url.searchParams.has("date")) globalFilters.date = url.searchParams.get("date");

  // 3. Fetch Data Logic (SDK)
  // this handles merging global filters + independent chart filters
  const resultMap = await uco.fetchAll(specs, globalFilters);

  return { specs, resultMap, globalFilters };
}

// Sub-component for individual chart lifecycle
const BillboardChart = ({
  id,
  spec,
  data,
}: {
  id: string,
  spec: ChartSpec,
  data: any[]
}) => {
  const chartInstance = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lifecycle
  useEffect(() => {
    const bb = (window as any).bb;
    if (!bb || !containerRef.current) return;

    if (chartInstance.current) {
      try { chartInstance.current.destroy(); } catch (e) { }
      chartInstance.current = null;
    }

    const config = billboardAdapter(spec, data);

    chartInstance.current = bb.generate({
      ...config,
      bindto: containerRef.current,
      data: {
        ...config.data,
        columns: config.data?.columns || [],
        type: config.data?.type || 'line'
      }
    });

    return () => {
      if (chartInstance.current) {
        try { chartInstance.current.destroy(); } catch (e) { }
        chartInstance.current = null;
      }
    };
  }, []);

  // Update Data/Spec
  // Update Data/Spec
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render because bb.generate() inside the mount effect 
    // already handles the initial data.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!chartInstance.current) return;

    const config = billboardAdapter(spec, data);

    if (config.data) {
      chartInstance.current.load({
        columns: config.data.columns,
        type: config.data.type,
        groups: config.data.groups,
        unload: true,
      });
    }
  }, [spec, data]);

  return (
    <div style={{ minHeight: "300px", position: "relative" }}>
      <div ref={containerRef} style={{ width: "100%", minHeight: "300px" }} />
    </div>
  );
};



// ... (component start)
export default function Home() {
  const { specs, resultMap, globalFilters } = useLoaderData() as typeof clientLoader;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const navigation = useNavigation();

  // Optimistic UI
  let optimisticRegion = globalFilters.region;
  let optimisticDate = globalFilters.date;

  if (navigation.location) {
    const pendingParams = new URLSearchParams(navigation.location.search);

    // Region
    if (pendingParams.has("region")) optimisticRegion = pendingParams.get("region");
    else if (!pendingParams.has("region")) optimisticRegion = "";

    // Date
    if (pendingParams.has("date")) optimisticDate = pendingParams.get("date");
    else if (!pendingParams.has("date")) optimisticDate = "";
  }

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);

    // Manual decoding (clean URLs)
    const queryString = newParams.toString()
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
      .replace(/%7B/g, '{')
      .replace(/%7D/g, '}')
      .replace(/%22/g, '"')
      .replace(/%2C/g, ',')
      .replace(/%3A/g, ':');

    navigate(`?${queryString}`);
  };

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
    mainControls: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "2rem",
      color: "#ccc",
      gap: "1rem"
    },
    select: {
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
      background: "#eee",
      color: "#333",
      fontWeight: "bold" as const,
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <main style={styles.hero}>
        <h1 style={styles.title}>UCO SDK: URL Driven</h1>

        <div style={styles.mainControls}>
          <div>
            URL Config: <code>?c=[...]</code>
          </div>

          {/* Region Filter */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '0.5rem' }}>Region:</label>
            <select
              style={{
                ...styles.select,
                opacity: navigation.state === "loading" ? 0.7 : 1,
                transition: 'opacity 0.2s'
              }}
              value={optimisticRegion || ""}
              onChange={(e) => updateFilters("region", e.target.value)}
              disabled={navigation.state === "loading"}
            >
              <option value="">All Regions</option>
              <option value="eu">Europe (EU) - 50% Data</option>
              <option value="us">United States (US) - 100% Data</option>
            </select>
          </div>

          {/* Date Filter */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '0.5rem' }}>Date:</label>
            <select
              style={{
                ...styles.select,
                opacity: navigation.state === "loading" ? 0.7 : 1,
                transition: 'opacity 0.2s'
              }}
              value={optimisticDate || "30d"}
              onChange={(e) => updateFilters("date", e.target.value)}
              disabled={navigation.state === "loading"}
            >
              <option value="30d">Last 30 Days</option>
              <option value="7d">Last 7 Days</option>
            </select>
          </div>
        </div>

        <div style={styles.grid}>
          {specs.map((spec, index) => {
            const chartData = uco.getDataForSpec(spec, resultMap, globalFilters);
            return (
              <div key={index} style={styles.card}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>{spec.ti || `Chart ${index}`}</strong>
                  {spec.f && spec.f.region && (
                    <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#666', background: '#ffe4e6', padding: '2px 6px', borderRadius: '4px' }}>
                      Fixed Filter: {spec.f.region}
                    </span>
                  )}
                </div>

                <BillboardChart
                  id={`chart-${index}`}
                  spec={spec}
                  data={chartData}
                />
              </div>
            );
          })}
        </div>

        {specs.length === 0 && (
          <div style={{ textAlign: "center", color: "#94a3b8" }}>
            <p>No charts configuration found.</p>
          </div>
        )}

      </main>
    </div>
  );
}
