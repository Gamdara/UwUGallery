import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vacation from '../views/Vacation.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  
  {
    path: '/vacation',
    name: 'Vacation',
    component: Vacation
  },
  {
    path: '/anything',
    name: 'Anything',
    component: Vacation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
