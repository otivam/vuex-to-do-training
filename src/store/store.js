import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],
        icons_value: '',
        comments: [],
        is_OE_clicked: '',
        OE_time: '',
        icons_time: '',
        time_spend_page1: '',
        OE_clicked: 'no'
    },
    mutations: {
        add_item: (state,payload) => {
            state.items.push(payload);
        },
        remove_item: (state,payload) => {
            state.items.splice(payload,1);
        },
        add_icons_value: (state,payload) => {
            state.icons_value = payload[0];
            state.icons_time = payload[1];
        },
        add_comment: (state,payload) => {
            state.comments.push(payload);
        },
        save_overall_time: (state,payload) => {
            state.time_spend_page1 = payload;
        },
        save_OE_time: (state,payload) => {
            state.OE_time = payload[1];
            state.OE_clicked = payload[0];
        }
    },
    actions: {
        add_item: (context,payload) => {
            context.commit('add_item',payload)
        },
        remove_item: (context,payload) => {
            context.commit('remove_item',payload)
        },
        add_icons_value: (context,payload) => {
            context.commit('add_icons_value',payload)
        },
        add_comment: (context,payload) => {
            context.commit('add_comment',payload)
        },
        save_overall_time: (context,payload) => {
            context.commit('save_overall_time',payload)
        },
        save_OE_time: (context,payload) => {
            context.commit('save_OE_time',payload)
        }
    }
})