export async function fetchDashboardMetrics(filters?: Record<string, any>) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));

    // Modifiers
    const isBackend = filters?.repository === 'backend-api';
    const isFrontend = filters?.repository === 'frontend-ui';
    const isShortTerm = filters?.date === '7d';

    // Base Values
    let healthScore = 98.5;
    let reviewCycles = 1.2;
    let slaCompliance = 94.2;

    // Apply Dynamic Logic
    if (isBackend) { healthScore = 95.5; reviewCycles = 1.8; slaCompliance = 91.0; }
    else if (isFrontend) { healthScore = 99.5; reviewCycles = 0.8; slaCompliance = 98.0; }

    if (isShortTerm) { reviewCycles -= 0.1; slaCompliance += 1.0; }

    return { healthScore, reviewCycles, slaCompliance };
}
