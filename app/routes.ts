import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("login", "routes/login.tsx"),
    route("/restaurant/:restaurantId", "routes/restaurant.tsx")
] satisfies RouteConfig;
