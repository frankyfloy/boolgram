// API
import {
    storiesRequest,
} from '@/services/api';

// Export
export default {
    namespaced: true,

    state: {
        stories: null,
    },

    getters: {
        storiesList: (state) => state.stories || [],
    },

    actions: {
        storiesRequest({ commit }) {
            return new Promise((resolve, reject) => {
                storiesRequest()
                .then((res) => {
                    commit('setStories', res.data);
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
            });
        },
    },

    mutations: {
        setStories(state, payload) {
            state.stories = payload;
        },
    },
};
