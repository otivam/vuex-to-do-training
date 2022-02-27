import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        add_item: (state,payload) => {
            state.items.push(payload);
        },
        remove_item: (state,payload) => {
            state.items.splice(payload,1);
        }
    },
    actions: {
        add_item: (context,payload) => {
            context.commit('add_item',payload)
        },
        remove_item: (context,payload) => {
            context.commit('remove_item',payload)
        }
    }
})