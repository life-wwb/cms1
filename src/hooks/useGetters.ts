import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMappers } from './useMappers'

export function useGetters(module: any, mapper: any) {
  let gettersFn = mapGetters
  if (module && module.length !== 0) {
    gettersFn = createNamespacedHelpers(module).mapGetters
  } else {
    mapper = module
  }
  return useMappers(mapper, gettersFn)
}
