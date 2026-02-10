
// Simulating a backend API
// In a real app, this would be `fetch('/api/data?metrics=' + metrics.join(','))`

const DATABASE: Record<string, number[]> = {
    sales: [300, 200, 100, 400, 150, 250],
    users: [50, 20, 10, 40, 15, 25],
    leads: [130, 100, 140, 200, 150, 50],
    revenue: [1000, 2000, 1500, 3000, 2500, 4000],
    cost: [800, 1200, 1000, 1800, 2000, 3000]
};

export async function fetchChartData(metrics: string[], filters?: Record<string, any>): Promise<any[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

    // Simulate Filter Logic
    // 1. Region: 'eu' -> 50% values
    const modifier = filters?.region === 'eu' ? 0.5 : 1;

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
            values: slicedData.map(v => v * modifier)
        };
    });
}
