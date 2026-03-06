import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const role = url.searchParams.get("Role")?.toLowerCase() || url.searchParams.get("role")?.toLowerCase();

    if (role === "admin") {
        return Response.json({
            dashboards: [
                {
                    dashboard_id: "DASH_ADMIN_001",
                    version: "1.0.0",
                    owner_department: "Admin",
                    visible_charts: [
                        "template_coverage_map",
                        "rule_complexity_error_rate",
                        "active_template_gauge",
                        "field_usage_frequency"
                    ]
                }
            ],
            count: 1
        });
    }

    // Default to requestor explicitly
    if (role === "requestor" || role === "requester") {
        return Response.json({
            dashboards: [
                {
                    dashboard_id: "DASH_REQUESTER_001",
                    version: "1.0.0",
                    owner_department: "Requestor",
                    visible_charts: [
                        "my_cr_status_breakdown",
                        "ftr_rate",
                        "rework_reason_pareto",
                        "average_submission_lead_time",
                        "submission_volume_trend",
                        "pending_workload_alert",
                        "sla_personal_performance"
                    ]
                }
            ],
            count: 1
        });
    }

    return Response.json({ dashboards: [], count: 0 });
}
