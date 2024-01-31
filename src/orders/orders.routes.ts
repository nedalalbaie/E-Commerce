import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'orders',
    component: () => import('./pages/OrdersList.vue')
  },
  {
    path: 'add',
    name: 'add-order',
    component: () => import('./pages/CreateOrder.vue')
  },
  {
    path: 'edit/:id',
    name: 'edit-order',
    component: () => import('./pages/CreateOrder.vue')
  },
]

export default routes
