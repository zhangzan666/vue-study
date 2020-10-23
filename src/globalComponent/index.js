
import globalChild from './index.vue'

export function requireChild(app) {
  app.component('global-child',globalChild)
}