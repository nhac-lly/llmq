import { fetchChartData } from "../../../services/api";
import type { ChartSpec, DataMap } from "../types";


export interface UCOConfig {
    endpoint?: string; // API Endpoint (optional for now as we use mock)
    defaultFilters?: Record<string, any>; // Global filters applied to all
}

export class UniversalChartOrchestrator {
    private config: UCOConfig;

    constructor(config: UCOConfig = {}) {
        this.config = config;
    }

    setConfig(config: Partial<UCOConfig>) {
        this.config = { ...this.config, ...config };
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
    async fetchAll(specs: ChartSpec[], globalFilters: Record<string, any> = {}): Promise<{ data: Record<string, any[]>, errors: Record<string, string> }> {
        const mergedFilters = { ...this.config.defaultFilters, ...globalFilters };
        const results: Record<string, any[]> = {};
        const errors: Record<string, string> = {};
        const promises: Promise<void>[] = [];

        for (const spec of specs) {
            const finalFilters = { ...mergedFilters, ...(spec.f || {}) };

            for (const metric of spec.m) {
                const filterKey = JSON.stringify(finalFilters);
                const cacheKey = `${metric}::${filterKey}`;

                if (!results[cacheKey] && !errors[cacheKey]) {
                    const p = fetchChartData([metric], finalFilters, this.config.endpoint)
                        .then(data => {
                            if (data && data.length > 0) {
                                results[cacheKey] = data[0].values;
                            } else {
                                results[cacheKey] = [];
                            }
                        })
                        .catch(err => {
                            console.error(`Failed to fetch ${metric}:`, err);
                            errors[cacheKey] = "Failed to load data";
                            results[cacheKey] = []; // fallback to empty
                        });
                    promises.push(p);
                }
            }
        }

        await Promise.all(promises);
        return { data: results, errors };
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
     * Helper to check if a specific spec has errors
     */
    getErrorForSpec(spec: ChartSpec, errorMap: Record<string, string>, globalFilters: Record<string, any> = {}): string | null {
        const mergedFilters = { ...this.config.defaultFilters, ...globalFilters };
        const finalFilters = { ...mergedFilters, ...(spec.f || {}) };
        const filterKey = JSON.stringify(finalFilters);

        for (const metric of spec.m) {
            const key = `${metric}::${filterKey}`;
            if (errorMap[key]) return errorMap[key];
        }
        return null;
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
