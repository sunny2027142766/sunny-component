import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { GridEditUIPlugin } from '@grid-edit/ui'
import DemoBlock from '../../components/DemoBlock.vue'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(GridEditUIPlugin)
    app.component('DemoBlock', DemoBlock)
  },
}

export default theme
