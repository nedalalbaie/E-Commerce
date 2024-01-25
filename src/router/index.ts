import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/core/components/MainLayout.vue'
import LoginPage from '@/auth/pages/LoginPage.vue'
import authStore from '@/core/stores/auth.store'
import productsRoutes from '@/products/products.routes'
import categoriesRoutes from '@/categories/categories.routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'products',
          children: productsRoutes
        },
        {
          path: 'categories',
          children: categoriesRoutes
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// router.beforeEach((to) => {
//   const auth = authStore.auth

//   if (to.name !== 'login' && !auth) {
//     return { name: 'login' }
//   }

//   if (to.name === 'login' && auth) {
//     return '/'
//   }
// })

export default router
