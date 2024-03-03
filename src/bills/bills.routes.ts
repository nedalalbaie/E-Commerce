import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'bills',
    component: () => import('./pages/BillList.vue')
  },
  {
    path: ':id',
    name: 'bill-details',
    component: () => import('./pages/BillsDetailsView.vue')
  },
  {
    path: 'add',
    name: 'add-bill',
    component: () => import('./pages/CreateBill.vue')
  },
  {
    path: 'edit/:id',
    name: 'edit-bill',
    component: () => import('./pages/EditBillDetails.vue')
  },
]

export default routes
