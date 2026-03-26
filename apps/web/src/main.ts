import { createApp } from 'vue'
import { SunnyUIPlugin } from '@sunny/ui'
import '@sunny/ui/styles.css'
import App from './app/App.vue'
import router from './router'
import './assets/app.css'

createApp(App).use(router).use(SunnyUIPlugin).mount('#app')
