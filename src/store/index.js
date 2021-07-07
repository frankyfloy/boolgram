import Vue from 'vue'
import Vuex from 'vuex'

import Stories from './home/stories.js'
import Posts from './home/posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
       stories:Stories,
       posts:Posts,
    }
})
