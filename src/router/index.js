import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Birre from '../views/Birre.vue'

Vue.use(VueRouter) // Usa il plugin VueRouter

// Dichiarazione delle mie rotte
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/birre',
    name: 'Birre',
    component: Birre
  }
]

// Creo il Router
const router = new VueRouter({
  routes
})

export default router
