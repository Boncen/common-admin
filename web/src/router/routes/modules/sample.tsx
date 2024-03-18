import { AppRouteObject } from "#/router";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Sample1Page = lazy(() => import(`@/pages/samples/s1/index`));
const Sample2Page = lazy(() => import(`@/pages/samples/s2/index`));
const SampleIndexPage = lazy(() => import(`@/pages/samples/index`));

const UserRoute: AppRouteObject = {
  order: 9,
  path: "sample",
  element: (
      <Outlet />
  ),
  meta: {
    label: "sys.menu.user",
    key: "/user",
  },
  children: [
    {
      path: "index",
      element: <SampleIndexPage /> ,
    },
    {
      path: "s1",
      element: (
          <Sample1Page />
      ),
    },
    {
      path: "s2",
      element: (
          <Sample2Page />
      ),
    },
  ],
};

export default UserRoute;
