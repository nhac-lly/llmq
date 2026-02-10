
import type { ChartSpec } from "../../types";
import type { ChartOptions } from "billboard.js";

export const billboardAdapter = (spec: ChartSpec, rawData: any[]): ChartOptions => {
    if (!spec) return { data: { columns: [] } };

    // Transform raw data based on 'm' (metrics) array
    // Assuming rawData is [{name: 'data1', values: [...]}, ...]
    const columns = rawData
        .filter(item => spec.m.includes(item.name))
        .map(item => [item.name, ...item.values]);

    const groups = spec.s ? [spec.m] : [];

    return {
        data: {
            columns: columns,
            type: spec.t === 'area' ? 'area-spline' : spec.t, // Map 'area' to billboard specific type if needed
            groups: groups,
        },
        title: {
            text: spec.ti || "",
        },
        // Default configs
        axis: {
            x: {
                type: "category",
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            },
        },
        grid: {
            y: {
                show: true,
            },
        },
        legend: {
            show: true
        }
    };
};
