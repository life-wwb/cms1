import { App } from 'vue'

import * as ElIcon from '@element-plus/icons-vue'

export function registerCpn(app: App) {
  for (const name in ElIcon) {
    app.component(name, (ElIcon as any)[name])
  }
}
