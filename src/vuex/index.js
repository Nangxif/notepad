import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

//状态管理，定义全局状态
export default new Vuex.Store({
    state,
    mutations
});
