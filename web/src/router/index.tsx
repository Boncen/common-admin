import { lazy } from "react";
import { AppRouteObject } from "#/router";
import { RouterProvider, Navigate,RouteObject, createBrowserRouter } from "react-router-dom";
import { MenuRoutes } from "./routes/menu-routes";
import PageMapper from "@/utils/page-mapper";

const LoginRoute: AppRouteObject = {
  path: "/login",
  Component: lazy(() => import("@/pages/sys/login/login")),
};
const PAGE_NOT_FOUND_ROUTE: AppRouteObject = {
  path: "*",
  element: <Navigate to={PageMapper.Page404} replace />,
};

export default function Router() {
  const routes = [LoginRoute,MenuRoutes, PAGE_NOT_FOUND_ROUTE];
  const router = createBrowserRouter(routes as unknown as RouteObject[]);
  return <RouterProvider router={router} />;
}
