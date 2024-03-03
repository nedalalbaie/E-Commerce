import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'categories',
    component: () => import('./pages/CategoriesList.vue')
  },
  {
    path: 'add',
    name: 'add-category',
    component: () => import('./pages/CreateCategory.vue')
  },
  {
    path: 'edit',
    name: 'edit-category',
    component: () => import('./pages/CreateCategory.vue')
  },
]

export default routes
