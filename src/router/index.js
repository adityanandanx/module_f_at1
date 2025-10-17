import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      name: 'home',
      component: HomeView,
    },
    {
      path: '/09_module_f',
      name: 'home2',
      component: HomeView,
    },
  ],
})

export default router
