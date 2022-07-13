import type { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/index'

let firstMenuPath: any = null
export function createRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  //1、汇总出所有的routes
  const routesFile = require.context('../router/main', true, /\.ts/)
  routesFile.keys().forEach((key) => {
    const routesContext = require('../router/main' + key.split('.')[1])
    allRoutes.push(routesContext.default)
  })

  //2、根据传入的菜单动态选择应该注册的routes
  const routesGetRouter = (userMenu: any[]) => {
    for (const menu of userMenu) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          if (!firstMenuPath) {
            firstMenuPath = route.path
          }
          routes.push(route)
        }
      } else {
        routesGetRouter(menu.children)
      }
    }
  }

  routesGetRouter(userMenu)

  return routes
}

export function wbBreadcrumbItem(userMenu: any, routePath: string) {
  const BreadcrumbItem: IBreadcrumb[] = []
  findMenuItem(userMenu, routePath, BreadcrumbItem)
  return BreadcrumbItem
}

export function findMenuItem(
  userMenu: any[],
  routePath: string,
  BreadcrumbItem?: IBreadcrumb[]
): any {
  for (const menuItem of userMenu) {
    if (menuItem.type == 1) {
      const menu = findMenuItem(menuItem.children ?? [], routePath)
      if (menu) {
        BreadcrumbItem?.push({
          name: menuItem.name,
          path: menuItem.url
        })
        BreadcrumbItem?.push({
          name: menu.name,
          path: menu.url
        })
        return menu
      }
    } else if (menuItem.type == 2 && menuItem.url == routePath) {
      return menuItem
    }
  }
}

export { firstMenuPath }
