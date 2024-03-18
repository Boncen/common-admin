import { useEffect, useState } from 'react';
import { useMatches, useOutlet } from 'react-router-dom';
import { useFlattenedRoutes } from './use-flattened-routes';
import { RouteMeta } from '#/router';
import { useRouter } from '.';
import PageMapper from '@/utils/page-mapper';

/**
 * 返回当前路由Meta信息
 */
export function useMatchRouteMeta() {
  const [matchRouteMeta, setMatchRouteMeta] = useState<RouteMeta>();
  const {push} = useRouter();
  // 获取路由组件实例
  const children = useOutlet();
  
  // 获取所有匹配的路由
  const matchs = useMatches();

  // 获取拍平后的路由菜单
  const flattenedRoutes = useFlattenedRoutes();

  useEffect(() => {
    console.log('matchs', matchs, flattenedRoutes);
    
    // 获取当前匹配的路由
    const lastRoute = matchs.at(-1);
    const currentRouteMeta = flattenedRoutes.find(
      (item) => item.key === lastRoute?.pathname || `${item.key}/` === lastRoute?.pathname,
      );
      console.log(currentRouteMeta);
      
    if (currentRouteMeta) {
      if (!currentRouteMeta.hideTab) { 
        currentRouteMeta.outlet = children;
        setMatchRouteMeta(currentRouteMeta);
      }
    } else {
      push(PageMapper.Page404);
    }
  }, [matchs]);

  return matchRouteMeta;
}
