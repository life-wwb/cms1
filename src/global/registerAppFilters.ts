import { App } from 'vue'
import { formatTimeUtil } from '@/utils/fromatTimeUtils'

export default function (app: App) {
  app.config.globalProperties.$filters = {
    formatTime(utcTime: string) {
      return formatTimeUtil(utcTime)
    }
  }
}
