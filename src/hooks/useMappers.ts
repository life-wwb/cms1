import { mapState, useStore } from 'vuex'
import { computed } from 'vue'

export function useMappers(mapper: any, mapFn: any) {
  const store = useStore()

  const storeStateFns = mapFn(mapper)
  const storeState: any = {}

  Object.keys(storeStateFns).forEach((key) => {
    const fn = storeStateFns[key].bind({ $store: store })
    storeState[key] = computed(fn)
  })

  return storeState
}
