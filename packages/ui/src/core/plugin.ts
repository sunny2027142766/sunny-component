import type { App, Plugin } from 'vue'
import { sunnyComponents } from './components'

export const SunnyUIPlugin: Plugin = {
  install(app: App) {
    sunnyComponents.forEach((component) => {
      app.component(component.name ?? 'AnonymousComponent', component)
    })
  },
}

export default SunnyUIPlugin
