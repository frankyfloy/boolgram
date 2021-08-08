import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [

    {
        path: '/welcome',
        alias: '/',
        name: 'Welcome',
        component: Welcome,
    },
    {
        path: '/home',
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

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next("/home")
            return
        }
        next('/login')
    } else {
        next()
    }
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next("/home");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router
