import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),

    layout("pages/auth/layout.tsx", [
        route("login", "pages/auth/login.tsx"),
        route("register", "pages/auth/register.tsx"),
    ]),

] satisfies RouteConfig;
