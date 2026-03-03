import { type LoaderFunctionArgs, type ActionFunctionArgs } from "react-router";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
};

export const action = async ({ request }: ActionFunctionArgs) => {
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders,
        });
    }
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
};

// Mock Database (Moved to Server)
const DATABASE: Record<string, { values: number[], summary: string }> = {
    prs_opened: { values: [12, 15, 18, 14, 22, 25], summary: "Number of Pull Requests opened." },
    prs_merged: { values: [10, 12, 15, 13, 20, 24], summary: "Number of Pull Requests successfully merged." },
    time_to_merge: { values: [2.5, 2.8, 2.2, 2.1, 1.9, 1.8], summary: "Average turnaround time (days) for merging pull requests." },
    active_contributors: { values: [8, 9, 11, 11, 14, 15], summary: "Number of unique contributors committing code in the period." },
    bugs_reported: { values: [5, 3, 6, 8, 4, 2], summary: "Volume of new bugs or issues reported." },
    bugs_fixed: { values: [4, 3, 5, 7, 3, 2], summary: "Volume of reported bugs that have been successfully resolved." },
    health_score: { values: [98, 97, 99, 98, 98.5, 99], summary: "Overall system/service health calculated metric." },
    review_cycles: { values: [1.5, 1.4, 1.3, 1.2, 1.1, 1.2], summary: "Average number of code review iteration cycles per PR." },
    sla_compliance: { values: [92, 93, 91, 94, 95, 94.2], summary: "Percentage of issues tracking against defined SLA timelines." }
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    // 1. Simulate Auth Check
    // In a real app, we checks cookies or headers. 
    // For this demo, let's allow it if it comes from our "trusted" origins or has a token.
    // But to demonstrate "No Data" for the user, let's check for the secret header just like Chat.

    // const sdkToken = request.headers.get("x-llmq-sdk-token");
    // if (sdkToken !== "LLMQ_ACCESS_GRANTED") {
    //    return Response.json({ error: "Unauthorized Data Access" }, { status: 403, headers: corsHeaders });
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
        const fullData = DATABASE[metric]?.values || [];
        const summary = DATABASE[metric]?.summary || "";
        const values = fullData.slice(sliceStart).map((v: number) => Number((v * modifier).toFixed(1)));
        return { name: metric, values, summary };
    });

    return Response.json(data, { headers: corsHeaders });
};
