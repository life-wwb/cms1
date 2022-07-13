export function getUserPermission(userMenu: any[]) {
  const permission: any[] = []

  const _userPermission = (menu: any[]) => {
    for (const item of menu) {
      if (item.type === 1 || item.type === 2) {
        //递归调用时，要想想传入的参数是不是一定有值，如果没有值，要传一个空的数组
        _userPermission(item.children ?? [])
      } else {
        permission.push(item.permission)
      }
    }
  }
  _userPermission(userMenu)

  return permission
}

export function getUserMenuId(userMenu: any) {
  const menuIdList: any[] = []
  const userMenuId = (userMenu: any) => {
    for (const item of userMenu) {
      if (item.children) {
        userMenuId(item.children)
      } else {
        menuIdList.push(item.id)
      }
    }
  }

  userMenuId(userMenu)
  return menuIdList
}
