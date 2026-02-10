const API_BASE = '/api/dashboard';

export async function fetchChartData(metrics: string[], filters?: Record<string, any>, apiEndpoint?: string): Promise<any[]> {
    const params = new URLSearchParams();
    if (metrics.length) params.set('metrics', metrics.join(','));
    if (filters?.repository) params.set('repository', filters.repository);
    if (filters?.date) params.set('date', filters.date);

    // Logic:
    // 1. If apiEndpoint is undefined, fallback to API_BASE (internal app).
    // 2. If apiEndpoint is provided (string), use it.
    // 3. If apiEndpoint is empty string "", it means "No Endpoint" -> Invalid.

    let baseUrl = API_BASE;

    if (apiEndpoint !== undefined) {
        if (!apiEndpoint) {
            // Empty string provided -> Explicit "No Endpoint"
            return [];
        }
        baseUrl = apiEndpoint.replace('/chat', '/dashboard');
    }

    try {
        const response = await fetch(`${baseUrl}?${params.toString()}`, {
            headers: {
                'x-llmq-sdk-token': 'LLMQ_ACCESS_GRANTED'
            }
        });

        if (!response.ok) {
            throw new Error(`Data Fetch Failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (e) {
        console.error("Data Fetch Error:", e);
        throw e; // Re-throw to allow UCO to handle it
    }
}


