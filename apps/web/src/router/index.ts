import { createRouter, createWebHistory } from 'vue-router'
import AppShell from '@/layouts/AppShell.vue'
import ComponentsPage from '@/pages/ComponentsPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import WorkflowPage from '@/pages/WorkflowPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppShell,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardPage,
        },
        {
          path: 'components',
          name: 'components',
          component: ComponentsPage,
        },
        {
          path: 'workflow',
          name: 'workflow',
          component: WorkflowPage,
        },
      ],
    },
  ],
})

export default router
