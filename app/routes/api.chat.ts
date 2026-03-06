import { type LoaderFunctionArgs, type ActionFunctionArgs } from "react-router";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
};

const handleChatRequest = (request: Request) => {
    const url = new URL(request.url);
    const prompt = (url.searchParams.get("prompt") || "").toLowerCase();

    if (prompt.includes("chart") || prompt.includes("render")) {
        return Response.json({
            "text": "ai text response",
            "tool": "renderchart",
            "list_chart": [
                {
                    "name": "chart_name",
                    "type": "bar",
                    "summary": ""
                },
                {
                    "name": "chart_name2",
                    "type": "line",
                    "summary": ""
                },
                {
                    "name": "chart_name3",
                    "type": "pie",
                    "summary": ""
                }
            ]
        }, { headers: corsHeaders });
    }

    return Response.json({
        "text": "ai text response"
    }, { headers: corsHeaders });
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders,
        });
    }
    return handleChatRequest(request);
};

export const action = async ({ request }: ActionFunctionArgs) => {
    if (request.method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders,
        });
    }
    return handleChatRequest(request);
};
