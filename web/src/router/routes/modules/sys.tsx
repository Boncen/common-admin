import { AppRouteObject } from "#/router";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const UserPage = lazy(() => import(`@/pages/sys/user/user`));
const RolePage = lazy(() => import(`@/pages/sys/role/index`));
const SettingPage = lazy(() => import(`@/pages/sys/setting/index`));
const MyPage = lazy(() => import(`@/pages/sys/my`));

const SysRoute: AppRouteObject = {
  order: 9,
  path: "sys",
  element: (
      <Outlet />
  ),
  meta: {
    label: "sys.menu.user",
    key: "/sys",
  },
  children: [
    {
      index: true,
      element: <div>user index element</div>,
    },
    {
      path: "users",
      element: <UserPage />,
    },
    {
      path: "roles",
      element: <RolePage />,
    },
    {
      path: "settings",
      element: <SettingPage />,
    },
    {
      path: "my",
      element: <MyPage />,
    },
  ],
};

export default SysRoute;
