import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { SunnyUIPlugin } from '@sunny/ui'
import DemoBlock from './components/DemoBlock.vue'
import ComponentDocPage from './components/docs/ComponentDocPage.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(SunnyUIPlugin)
    app.component('DemoBlock', DemoBlock)
    app.component('ComponentDocPage', ComponentDocPage)
  },
}

export default theme
