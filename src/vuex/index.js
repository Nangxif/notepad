import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

//状态管理，定义全局状态
export default new Vuex.Store({
    state,
    getters,
    mutations
});
