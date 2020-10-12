import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inject',
    name: 'Inject',
    meta: {
      title: "Provide/Inject"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/inject/index.vue')
  },
  {
    path: '/vModel',
    name: 'VModel',
    meta: {
      title: "v-model"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/vModel/index.vue')
  },
  {
    path: '/vforvif',
    name: 'Vforvif',
    meta: {
      title: "v-for和v-if"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/vforvif/index.vue')
  },
  {
    path: '/renderfun',
    name: 'Renderfun',
    meta: {
      title: "渲染函数h"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/renderfun/index.vue')
  },
  {
    path: '/globalComponent',
    name: 'GlobalComponent',
    meta: {
      title: "全局组件"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/componentTest/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
