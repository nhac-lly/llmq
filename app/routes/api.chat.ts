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

        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'sonar',
                messages: messages,
                temperature: 0.2,
                top_p: 0.9,
                return_related_questions: false,
                stream: false
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return Response.json({ error: `Perplexity API Error: ${errorText}` }, { status: response.status, headers: corsHeaders });
        }

        const data = await response.json();
        return Response.json(data, { headers: corsHeaders });

    } catch (error) {
        console.error("Proxy Error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500, headers: corsHeaders });
    }
};
