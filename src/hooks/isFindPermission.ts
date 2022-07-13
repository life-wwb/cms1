import { useStore } from '@/store'

export function isFindPermission(permission: string) {
  const store = useStore()
  const permissions = store.state.loginStore.userPermission

  const isPermission = permissions.find((item) => item === permission)
  return !!isPermission
}
