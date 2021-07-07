import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    alias: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/Chat.vue')
  },
  {
    path: '/global',
    name: 'Globalpost',
    component: () => import('../views/Global-post.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue')
    }
    ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
