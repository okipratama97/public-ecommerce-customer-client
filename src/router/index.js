import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const navigationGuard = (to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Register' && localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Carts' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Add' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Edit' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: navigationGuard
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: navigationGuard
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: navigationGuard
  },
  {
    path: '/carts',
    name: 'Carts',
    component: () => import('../views/Carts.vue'),
    beforeEnter: navigationGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
