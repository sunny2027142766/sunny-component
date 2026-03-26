import { createApp } from 'vue'
import { GridEditUIPlugin } from '@grid-edit/ui'
import '@grid-edit/ui/styles.css'
import App from './app/App.vue'
import router from './router'
import './assets/app.css'

createApp(App).use(router).use(GridEditUIPlugin).mount('#app')
