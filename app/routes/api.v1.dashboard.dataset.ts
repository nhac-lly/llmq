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

export async function loader({ request }: LoaderFunctionArgs) {
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders,
        });
    }

    const url = new URL(request.url);
    const metrics = url.searchParams.get("metrics");
    const role = url.searchParams.get("role")?.toLowerCase();

    // Default or fallback
    return Response.json({
        dataset: {
            columns: [
                ["Approved", 50],
                ["Rejected", 10],
                ["Pending", 20],
                ["Rework", 15]
            ]
        }
    }, { headers: corsHeaders });
}
