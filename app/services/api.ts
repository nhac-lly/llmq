
// Simulating a backend API
// In a real app, this would be `fetch('/api/data?metrics=' + metrics.join(','))`

const DATABASE: Record<string, number[]> = {
    // PR Velocity: Opened vs Merged
    prs_opened: [12, 15, 18, 14, 22, 25],
    prs_merged: [10, 12, 15, 13, 20, 24],

    // Time to Merge (Days)
    time_to_merge: [2.5, 2.8, 2.2, 2.1, 1.9, 1.8],

    // Active Contributors
    active_contributors: [8, 9, 11, 11, 14, 15],

    // Bugs Reported vs Fixed
    bugs_reported: [5, 3, 6, 8, 4, 2],
    bugs_fixed: [4, 3, 5, 7, 3, 2]
};

export async function fetchChartData(metrics: string[], filters?: Record<string, any>): Promise<any[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // Simulate Filter Logic
    // 1. Repository Logic (Simulated)
    let modifier = 1;
    if (filters?.repository === 'backend-api') modifier = 1.2; // Backend has more activity/cost
    if (filters?.repository === 'frontend-ui') modifier = 0.8; // Frontend is lighter

    // 2. Date: '7d' -> slice last 3 points, otherwise all
    // This simulates different time ranges returning different data shapes
    let sliceStart = 0;
    if (filters?.date === '7d') {
        sliceStart = -3;
    }

    return metrics.map(metric => {
        const fullData = DATABASE[metric] || [];
        const slicedData = fullData.slice(sliceStart);
        return {
            name: metric,
            values: slicedData.map(v => Number((v * modifier).toFixed(1))) // Fix decimals
        };
    });
}

export async function fetchDashboardMetrics(filters?: Record<string, any>) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));

    // Modifiers
    const isBackend = filters?.repository === 'backend-api';
    const isFrontend = filters?.repository === 'frontend-ui';
    const isShortTerm = filters?.date === '7d';

    // Base Values (from Stitch Design)
    let healthScore = 98.5;
    let reviewCycles = 1.2;
    let slaCompliance = 94.2;

    // Apply Dynamic Logic
    if (isBackend) {
        healthScore = 95.5; // Backend slightly lower health
        reviewCycles = 1.8; // Backend takes longer
        slaCompliance = 91.0;
    } else if (isFrontend) {
        healthScore = 99.5;
        reviewCycles = 0.8;
        slaCompliance = 98.0;
    }

    if (isShortTerm) {
        reviewCycles -= 0.1; // Short term looks faster
        slaCompliance += 1.0;
    }

    return {
        healthScore,
        reviewCycles,
        slaCompliance
    };
}
