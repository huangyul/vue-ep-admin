import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pagea',
    name: 'pagea',
    component: () => import('@/components/pageA.vue')
  },
  {
    path: '/pageb',
    name: 'pageb',
    component: () => import('@/components/pageB.vue')
  }
]

export default routes
