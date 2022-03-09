import { def } from "@vue/shared";
import { createStore } from "vuex";


const store = createStore({

    state: {
        user: {
            data: {name: 'Jehdai Test vueX'},
            token: null,
        },

    },
    mutations: {},
    modules: {},
    getters: {},
    actions: {}

});

export default store;
