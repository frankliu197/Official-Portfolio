import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Piano from '../views/Piano.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/Official-Portfolio/',
    alias: '/Official-Portfolio/home',
    name: 'Home',
    component: Home,
    meta: {
      defaultHeader: false,
    }
  },
  {
    path: '/Official-Portfolio/piano',
    name: 'Piano',
    component: Piano,
    meta: {
      defaultHeader: true,
    }
  },
  {
    path: '/Official-Portfolio/*',
    component: NotFound,
    meta: {
      defaultHeader: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
