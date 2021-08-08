// API
import {
    postsRequest,
} from '@/services/api';

// Export
export default {
    namespaced: true,
    state: {
        posts: null,
    },
    getters: {
        postsList: (state) => state.posts || [],
    },
    actions: {
        postsRequest({ commit }) {
            return new Promise((resolve, reject) => {
                postsRequest()
                .then((res) => {
                    commit('setPosts',res.data.posts);
                    console.log(res.data.posts)
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
            });
        },
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
    },
};
