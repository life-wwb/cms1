import { App } from 'vue'
import { registerCpn } from './registerCpn'
import registerAppFilters from './registerAppFilters'

export function registerApp(app: App) {
  app.use(registerCpn)
  app.use(registerAppFilters)
}
