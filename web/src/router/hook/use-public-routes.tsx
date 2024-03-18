import { Permission } from "#/entity"
import { PermissionType } from "#/enum"

export function usePublicRoutes(){

    const publics: Permission[] = [
        {
            id: 'error-menu',
            parentId: '',
            label: '错误',
            name: '错误',
            icon: '',
            type: PermissionType.CATALOGUE,
            route: 'error',
            hide: true,
            children: [
              {
                id: 'error-404',
                parentId: 'error-menu',
                label: '页面未找到',
                name: '页面未找到',
                type: PermissionType.MENU,
                route: '404',
                component: '/error/page404.tsx',
              },
              {
                id: 'error-403',
                parentId: 'error-menu',
                label: '无权限访问',
                name: '无权限访问',
                type: PermissionType.MENU,
                route: '403',
                component: '/error/page403.tsx',
              },
              {
                id: 'error-500',
                parentId: 'error-menu',
                label: '服务异常',
                name: '服务异常',
                type: PermissionType.MENU,
                route: '500',
                component: '/error/page500.tsx',
              },
            ],
          }
    ]

    return publics
}