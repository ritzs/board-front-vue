// src/vuex/store.js
import {createStore} from "vuex"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions";    //추가

export default createStore({
    state: {
        user: null,
        isLogin: false,
    },
    mutations,
    getters,
    actions,

})