import { useEffect, useRef } from "react";
import { billboardAdapter } from "../core/adapters/billboardAdapter";
import type { ChartSpec } from "../types";

// Sub-component for individual chart lifecycle
export const BillboardChart = ({
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
        if (!bb || !containerRef.current) {
            if (!bb) console.error("[BillboardChart] 'bb' (Billboard.js) is missing from global window. Please include the script.");
            return;
        }

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
    const isFirstRender = useRef(true);

    useEffect(() => {
        // Skip the first render because bb.generate() inside the mount effect 
        // already handles the initial data.
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        console.log(`[BillboardChart] Updating Data`, { id, data });

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
