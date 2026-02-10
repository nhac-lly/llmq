import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("manual", "routes/manual.tsx"),
    route("about", "routes/about.tsx"),
    route("pricing", "routes/pricing.tsx"),
    route("api/chat", "routes/api.chat.ts"),
    route("api/dashboard", "routes/api.dashboard.ts"),
] satisfies RouteConfig;
