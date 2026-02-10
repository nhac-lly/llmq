
export interface ChartSpec {
    t: 'line' | 'bar' | 'pie' | 'area'; // Type
    m: string[];                        // Metrics (column IDs)
    s?: boolean;                        // Stacked toggle
    ti?: string;                        // Title
}

export type UCOListener = (state: ChartSpec[]) => void;

export class UniversalChartController {
    private queryKey = 'c';
    private listeners: UCOListener[] = [];

    constructor() {
        // Listen for browser back/forward buttons
        if (typeof window !== 'undefined') {
            window.addEventListener('popstate', () => this.notify());
        }
    }

    // Internal: Get current state from URL
    private getRawState(): ChartSpec[] {
        if (typeof window === 'undefined') return [];

        const params = new URLSearchParams(window.location.search);
        const raw = params.get(this.queryKey);
        try {
            // No need to decodeURIComponent if we rely on standard URLSearchParams decoding
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error("UMCO: Parse Error", e);
            return [];
        }
    }

    // Update URL and notify all charts
    private push(newState: ChartSpec[]) {
        if (typeof window === 'undefined') return;

        const params = new URLSearchParams(window.location.search);
        // User requested no extra encoding. URLSearchParams will handle necessary escaping.
        const raw = JSON.stringify(newState);
        params.set(this.queryKey, raw);

        // Decode specific characters to keep URL clean (User Request)
        const queryString = params.toString()
            .replace(/%5B/g, '[')
            .replace(/%5D/g, ']')
            .replace(/%7B/g, '{')
            .replace(/%7D/g, '}')
            .replace(/%22/g, '"')
            .replace(/%2C/g, ',')
            .replace(/%3A/g, ':');

        const newUrl = `${window.location.pathname}?${queryString}`;
        window.history.pushState({}, '', newUrl);
        this.notify();
    }

    public getState(): ChartSpec[] {
        return this.getRawState();
    }

    public sync() {
        this.notify();
    }

    // API: Add a new chart
    public addChart(config: ChartSpec) {
        const state = this.getRawState();
        state.push(config);
        this.push(state);
    }

    // API: Update a specific chart
    public updateChart(index: number, patch: Partial<ChartSpec>) {
        const state = this.getRawState();
        if (!state[index]) return; // Handle out of bounds safely
        state[index] = { ...state[index], ...patch };
        this.push(state);
    }

    // API: Remove a chart
    public removeChart(index: number) {
        const state = this.getRawState();
        state.splice(index, 1);
        this.push(state);
    }

    // Subscribe to changes
    public subscribe(callback: UCOListener): () => void {
        this.listeners.push(callback);
        // Initial trigger
        callback(this.getRawState());
        return () => {
            this.listeners = this.listeners.filter(l => l !== callback);
        };
    }

    private notify() {
        const state = this.getRawState();
        this.listeners.forEach(callback => callback(state));
    }
}
