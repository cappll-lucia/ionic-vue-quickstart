import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/ComponentsPage.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router