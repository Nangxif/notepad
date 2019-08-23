import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//状态管理，定义全局状态
export default new Vuex.Store({
    state:{
        isLogin: false,
        userName:'',
        avatarUrl:'/static/img/avatar.0d5a53f.jpg',
        sex:'',
        address:'',
        tel:''
    },
    getters: {
        tel(state){
            return state.tel;
        }
    },
    mutations:{
        // //清除与用户相关的记录
        // logout(state, v){
        //     Cookies.remove('userID'); 
        //     Cookies.remove('username'); 
        //     Cookies.remove('indexUrl'); 
        //     Cookies.remove('single'); 
        //     state.userID = '';
        //     state.username = '';
        //     state.indexUrl = '';
        //     state.single = '';
        // },
        updateIsLogin(state, v){
            state.isLogin = v;
        },
        updateUserName(state, v){
            state.userName = v;
        },
        updateAvatarUrl(state, v){
            state.avatarUrl = v;
        },
        updateSex(state, v){
            state.sex = v;
        },
        updateAddress(state, v){
            state.address = v;
        },
        updateTel(state, v){
            state.tel = v;
        }
    }
});
