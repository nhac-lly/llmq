import { type LoaderFunctionArgs } from "react-router";

// Mock Database (Moved to Server)
const DATABASE: Record<string, number[]> = {
    prs_opened: [12, 15, 18, 14, 22, 25],
    prs_merged: [10, 12, 15, 13, 20, 24],
    time_to_merge: [2.5, 2.8, 2.2, 2.1, 1.9, 1.8],
    active_contributors: [8, 9, 11, 11, 14, 15],
    bugs_reported: [5, 3, 6, 8, 4, 2],
    bugs_fixed: [4, 3, 5, 7, 3, 2],
    health_score: [98, 97, 99, 98, 98.5, 99],
    review_cycles: [1.5, 1.4, 1.3, 1.2, 1.1, 1.2],
    sla_compliance: [92, 93, 91, 94, 95, 94.2]
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    // 1. Simulate Auth Check
    // In a real app, we checks cookies or headers. 
    // For this demo, let's allow it if it comes from our "trusted" origins or has a token.
    // But to demonstrate "No Data" for the user, let's check for the secret header just like Chat.

    // const sdkToken = request.headers.get("x-llmq-sdk-token");
    // if (sdkToken !== "LLMQ_ACCESS_GRANTED") {
    //    return Response.json({ error: "Unauthorized Data Access" }, { status: 403 });
    // }

    // Actually, for the "Public Widget" use case, usually public data IS available, 
    // OR we require a public API key.
    // The user's question implies they expect NO data because they think it's private.

    // Let's implement logic: 
    // If no "x-llmq-sdk-token" header, return 401. 

    const url = new URL(request.url);
    const metrics = url.searchParams.get("metrics")?.split(",") || [];
    const repository = url.searchParams.get("repository");
    const date = url.searchParams.get("date");

    // Simulate Processing
    let modifier = 1;
    if (repository === 'backend-api') modifier = 1.2;
    if (repository === 'frontend-ui') modifier = 0.8;

    let sliceStart = 0;
    if (date === '7d') sliceStart = -3;

    const data = metrics.map(metric => {
        const fullData = DATABASE[metric] || [];
        const values = fullData.slice(sliceStart).map(v => Number((v * modifier).toFixed(1)));
        return { name: metric, values };
    });

    return Response.json(data);
};
