import { fetchChartData } from "../../services/api";

export interface ChartSpec {
    t: 'line' | 'bar' | 'area' | 'pie';
    m: string[]; // Metrics
    s?: boolean; // Stacked
    ti?: string; // Title
    f?: Record<string, any>; // Independent Filters (specific to this chart)
}

export interface UCOConfig {
    endpoint?: string; // API Endpoint (optional for now as we use mock)
    defaultFilters?: Record<string, any>; // Global filters applied to all
}

export class UniversalChartOrchestrator {
    private config: UCOConfig;

    constructor(config: UCOConfig = {}) {
        this.config = config;
    }

    /**
     * Parse the URL query string into Chart Specifications
     * @param searchParams URLSearchParams object or query string
     */
    parse(searchParams: URLSearchParams | string): ChartSpec[] {
        const params = new URLSearchParams(searchParams);
        const raw = params.get("c");

        if (!raw) return [];

        try {
            return JSON.parse(raw);
        } catch (e) {
            console.error("UCO SDK: Failed to parse chart spec", e);
            return [];
        }
    }

    /**
     * Fetch data for all charts, handling global and independent filters
     * @param specs Array of Chart Specs
     * @param globalFilters Filters applied to ALL charts (e.g. from URL ?filter=...)
     */
    async fetchAll(specs: ChartSpec[], globalFilters: Record<string, any> = {}): Promise<Record<string, any[]>> {
        const mergedFilters = { ...this.config.defaultFilters, ...globalFilters };

        // In a real scenario, we might batch these differently.
        // For now, we'll simulate fetching based on unique metric+filter combinations 
        // OR just simple independent fetching to support the requirement.

        // To support "Independent Filters", we can't just batch by metric name alone 
        // because "Sales (US)" is different from "Sales (EU)".
        // So we will fetch for EACH chart spec individually and then merge results, 
        // keyed by a unique identifier or just return a map of "ChartIndex -> Data".

        // However, to keep with the previous pattern of "DataMap", let's see.
        // If Chart 1 wants "Sales" with Filter A, and Chart 2 wants "Sales" with Filter B...
        // The DataMap key needs to be unique. 
        // Let's stick to the simplest approach first: 
        // The SDK returns a map where key is the `metric` name. 
        // BUT if independent filters exist, that breaks the simple map.

        // REVISION: The `fetchAll` should probably return array of data objects corresponding to input specs,
        // OR a map where the key is generated.

        // Let's implement a smarter fetcher:
        // 1. Identify all unique requests. A request is (Metric + MergedFilters).

        const results: Record<string, any[]> = {};
        const promises: Promise<void>[] = [];

        for (const spec of specs) {
            // Merge global filters with chart-specific filters
            const finalFilters = { ...mergedFilters, ...(spec.f || {}) };

            // For this specific chart's metrics
            for (const metric of spec.m) {
                // Generate a unique key for the data cache: "metric::JSON(filters)"
                const filterKey = JSON.stringify(finalFilters);
                const cacheKey = `${metric}::${filterKey}`;

                if (!results[cacheKey]) {
                    // Trigger fetch
                    const p = fetchChartData([metric], finalFilters).then(data => {
                        // fetchChartData returns [{ name: 'sales', values: [...] }]
                        if (data && data.length > 0) {
                            results[cacheKey] = data[0].values;
                        } else {
                            results[cacheKey] = [];
                        }
                    });
                    promises.push(p);
                }
            }
        }

        await Promise.all(promises);
        return results;
    }

    /**
     * Helper to reconstruct data for a specific spec from the raw result map
     */
    getDataForSpec(spec: ChartSpec, resultMap: Record<string, any[]>, globalFilters: Record<string, any> = {}): any[] {
        const mergedFilters = { ...this.config.defaultFilters, ...globalFilters };
        const finalFilters = { ...mergedFilters, ...(spec.f || {}) };
        const filterKey = JSON.stringify(finalFilters);

        return spec.m.map(metric => ({
            name: metric,
            values: resultMap[`${metric}::${filterKey}`] || []
        }));
    }

    /**
     * Get available Global Filters for the UI to render
     */
    getAvailableFilters() {
        return [
            {
                key: 'repository',
                label: 'Repository',
                type: 'select',
                options: [
                    { value: '', label: 'All Repositories' },
                    { value: 'frontend-ui', label: 'Frontend UI' },
                    { value: 'backend-api', label: 'Backend API' },
                    { value: 'auth-service', label: 'Auth Service' },
                ]
            },
            {
                key: 'date',
                label: 'Date Range',
                type: 'select',
                options: [
                    { value: '30d', label: 'Last 30 Days' },
                    { value: '7d', label: 'Last 7 Days' },
                ]
            }
        ];
    }
}
