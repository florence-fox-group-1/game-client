import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue')
  },
  {
    path: '/LandingPage',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
