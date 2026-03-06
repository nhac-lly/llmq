import { type ActionFunctionArgs } from "react-router";

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

    if (request.method !== "POST") {
        return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
    }

    const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;

    if (!apiKey) {
        return Response.json({ error: "Server Configuration Error: API Key missing" }, { status: 500, headers: corsHeaders });
    }

    try {
        const body = await request.json();
        const { messages } = body;
        const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

        if (lastMessage.includes("chart") || lastMessage.includes("render")) {
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

    } catch (error) {
        console.error("Proxy Error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500, headers: corsHeaders });
    }
};
