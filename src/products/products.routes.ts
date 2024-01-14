import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'products',
        component: () => import("./pages/productsList.vue")
      }
]

export default routes