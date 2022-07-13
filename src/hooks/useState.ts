import { mapState, createNamespacedHelpers } from 'vuex'
import { useMappers } from './useMappers'
export function useState(module: any, mapper: any) {
  let stateFn = mapState
  if (module && module.length > 0) {
    stateFn = createNamespacedHelpers(module).mapState
  } else {
    mapper = module
  }
  return useMappers(mapper, stateFn)
}
