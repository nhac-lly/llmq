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

    const METADATA_MAP: Record<string, { type: string; title: string }> = {
        template_coverage_map: {
            type: "pie",
            title: "Template Coverage Map"
        },
        rule_complexity_error_rate: {
            type: "bar",
            title: "Rule Complexity vs Error Rate"
        },
        active_template_gauge: {
            type: "gauge",
            title: "Active Templates"
        },
        field_usage_frequency: {
            type: "bar",
            title: "Field Usage Frequency"
        }
    };

    const metadata = metrics && METADATA_MAP[metrics]
        ? METADATA_MAP[metrics]
        : { type: "bar", title: "General Metric" };

    return Response.json({ metadata }, { headers: corsHeaders });
}
