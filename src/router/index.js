import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coins',
      name: 'coins',
      component: () => import('../views/Coins.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
  ]
})

export default router
