// API
import {authRequest} from '@/services/api';

// Mutations
import { SET_IS_AUTHENTICATED,  SET_USER, LOG_OUT } from '../mutation-types'

// GLOBAL_DATA
import { IS_AUTHENTICATED,  USER } from '../global-data'
import router from "@/router";

// Export
export default {
    namespaced: true,
    state: {
        [IS_AUTHENTICATED]:false,
        [USER]:null,
    },
    getters: {
        isAuthenticated:(state) => state.IS_AUTHENTICATED || false,
        get_User: (state) => state.USER
    },
    actions: {
        logged({ commit }, user) {
            return new Promise((resolve, reject) => {
                authRequest(user)
                .then((res) => {
                    commit('SET_USER', res.data.user);
                    commit('SET_IS_AUTHENTICATED', true);
                    router.push('Home');
                    resolve(res);
                })
                .catch((err) => {
                    commit('SET_IS_AUTHENTICATED', false);
                    reject(err);
                });
            });
        },
        disconnect({ commit }){
            commit('LOG_OUT');
        }
    },
    mutations: {
        [SET_USER](state, payload) {
            state.USER= payload;
        },
        [SET_IS_AUTHENTICATED](state, payload) {
            state.IS_AUTHENTICATED= payload;
        },
        [LOG_OUT](state) {
            state.IS_AUTHENTICATED= null;
            state.USER=null;
        }
    }
};
