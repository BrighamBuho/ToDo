import { RouteObject } from "react-router-dom";

export type CustomRouteConfig = RouteObject & {
    label: string;
    requiresAuth: boolean;
  };
