import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("manual", "routes/manual.tsx"),
    route("about", "routes/about.tsx"),
    route("pricing", "routes/pricing.tsx"),
    route("api/v1/chat", "routes/api.chat.ts"),
    route("api/dashboard", "routes/api.dashboard.ts"),
    route("api/v1/dashboards", "routes/api.v1.dashboards.ts"),
    route("api/v1/dashboard/dataset", "routes/api.v1.dashboard.dataset.ts"),
    route("api/v1/dashboard/metadata", "routes/api.v1.dashboard.metadata.ts"),
] satisfies RouteConfig;
