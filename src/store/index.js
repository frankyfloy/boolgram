import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Stories from './home/stories.js'
import Posts from './home/posts.js'
import Auth from './welcome/authentication.js'

export default new Vuex.Store({
    modules: {
       stories:Stories,
       posts:Posts,
       authentication:Auth,
    },
    namespaced: true,
    state: {

    },
    getters: {

    },
    actions: {

    },
    mutations: {

    },
})
