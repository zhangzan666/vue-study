import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/mixins',
    name: 'Mixins',
    meta: {
      title: 'Mixins'
    },
    component: () => import(/* webpackChunkName: "mixins" */ '../views/Mixins.vue')
  },
  {
    path: '/directive',
    name: 'Directive',
    meta: {
      title: '自定义指令'
    },
    component: () => import(/* webpackChunkName: "directive" */ '../views/Directive.vue')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    meta: {
      title: '传送/teleport'
    },
    component: () => import(/* webpackChunkName: "teleport" */ '../views/Teleport.vue')
  },
  {
    path: '/renderFunction',
    name: 'RenderFunction',
    meta: {
      title: 'RenderFunction'
    },
    component: () => import(/* webpackChunkName: "renderFunction" */ '../views/RenderFunction.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
