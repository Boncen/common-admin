// import { isEmpty } from 'ramda';
import { lazy, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserPermission } from "@/store/userStore";
import { flattenTrees } from "@/utils/tree";
import { Permission } from "#/entity";
import { BasicStatus, PermissionType } from "#/enum";
import { AppRouteObject } from "#/router";
import { isEmpty } from "ramda";
import { usePublicRoutes } from "./use-public-routes";

// 使用 import.meta.glob 获取所有路由组件
const pages = import.meta.glob("/src/pages/**/*.tsx");

// 构建绝对路径的函数
function resolveComponent(path: string) {
  return pages[`/src/pages${path}`];
}

/**
 * return routes about permission
 */
export function usePermissionRoutes() {
  const permissions: Permission[] = useUserPermission();
  // add public routes
  const publicRoutes = usePublicRoutes();
  for (let index = 0; index < publicRoutes.length; index++) {
    const element = publicRoutes[index];
    if (permissions?.find((x) => x.id === element.id)) {
      permissions.push(element);
    }
  }

  return useMemo(() => {
    const flattenedPermissions = flattenTrees(permissions!);
    const permissionRoutes = transformPermissionToMenuRoutes(
      permissions || [],
      flattenedPermissions
    );
    return [...permissionRoutes];
  }, [permissions]);
}

/**
 * transform Permission[] to  AppRouteObject[]
 * @param permissions
 * @param parent
 */
function transformPermissionToMenuRoutes(
  permissions: Permission[],
  flattenedPermissions: Permission[]
) {
  return permissions.map((permission) => {
    const {
      route,
      type,
      label,
      icon,
      order,
      hide,
      status,
      frameSrc,
      component,
      parentId,
      children = [],
    } = permission;

    const appRoute: AppRouteObject = {
      path: route,
      meta: {
        label,
        key: getCompleteRoute(permission, flattenedPermissions),
        hideMenu: !!hide,
        disabled: status === BasicStatus.DISABLE,
      },
    };

    if (order) appRoute.order = order;
    if (icon) appRoute.meta!.icon = icon;
    if (frameSrc) appRoute.meta!.frameSrc = frameSrc;

    if (type === PermissionType.CATALOGUE) {
      appRoute.meta!.hideTab = true;
      if (!parentId) {
        appRoute.element = <Outlet />;
      }
      appRoute.children = transformPermissionToMenuRoutes(
        children,
        flattenedPermissions
      );
      if (!isEmpty(children)) {
        appRoute.children.unshift({
          index: true,
          element: <Navigate to={children[0].route} replace />,
        });
      }
    } else if (type === PermissionType.MENU) {
      const Element = lazy(resolveComponent(component!) as any);
      if (frameSrc) {
        appRoute.element = <Element src={frameSrc} />;
      } else {
        appRoute.element = <Element />;
      }
    }

    return appRoute;
  });
}

/**
 * Splicing from the root permission route to the current permission route
 * @param {Permission} permission - current permission
 * @param {Permission[]} flattenedPermissions - flattened permission array
 * @param {string} route - parent permission route
 * @returns {string} - The complete route after splicing
 */
function getCompleteRoute(
  permission: Permission,
  flattenedPermissions: Permission[],
  route = ""
) {
  const currentRoute = route
    ? `/${permission.route}${route}`
    : `/${permission.route}`;
  if (permission.parentId) {
    const parentPermission = flattenedPermissions.find(
      (p) => p.id === permission.parentId
    )!;
    return getCompleteRoute(
      parentPermission,
      flattenedPermissions,
      currentRoute
    );
  }

  return currentRoute.replace(`//`, "/");
}
