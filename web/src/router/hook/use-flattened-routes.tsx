import { useCallback, useMemo } from 'react';

import { flattenMenuRoutes, menuFilter } from '../utils';

import { usePermissionRoutes } from './use-permission-routes';

/**
 * 返回拍平后的菜单路由
 */
export function useFlattenedRoutes() {
  const flattenRoutes = useCallback(flattenMenuRoutes, []);
  const permissionRoutes = usePermissionRoutes();
  console.log('permissionRoutes', permissionRoutes);
  
  return useMemo(() => {
    const menuRoutes = menuFilter(permissionRoutes);
    const tmp = flattenRoutes(menuRoutes);
    console.log(tmp,1);
    
    return tmp;
  }, [permissionRoutes]);
}
