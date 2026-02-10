import type { Chart as BillboardChart, ChartOptions } from "billboard.js";
import "billboard.js/dist/billboard.css";

let chartInstance: BillboardChart | null = null;

export async function renderChart(elementId: string, data: any[], type: "line" | "bar" | "spline") {
    // Dynamically import billboard.js to avoid SSR issues
    const bb = (await import("billboard.js")).default;

    // Transform data: [name, ...values]
    const columns = data.map((item) => [item.name, ...item.values]);

    const options: ChartOptions = {
        data: {
            columns: columns,
            type: type,
            colors: {
                data1: "#8b5cf6",
                data2: "#d946ef",
            },
        },
        bindto: elementId,
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

    if (!chartInstance) {
        chartInstance = bb.generate(options);
    } else {
        // If elementId changed, we might need to regenerate, but for this app it's static #chart
        // Just load new data and transform
        chartInstance.load({
            columns: columns,
            unload: true,
        });
        chartInstance.transform(type);
    }
}

export function destroyChart() {
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
}
