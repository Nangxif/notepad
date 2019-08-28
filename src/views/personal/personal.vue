<template>
  <div class="personal">
    <head-top :is-back="isBack" page-title="个人中心"></head-top>
    <div class="personal_wrapper">
        <div class="personal_top">
            <div class="personal_avatar">
                <img src="./avatar.jpg"/>
            </div>
            <router-link class="personal_name" to="/personal/setting">
                <p class="personal_name_wrapper">{{userName}}</p>
                <a class="personal_tel">手机号:{{tel}}<span class="personal_tel_icon"><i class="icon iconfont icon-erweima1688"></i>   <i class="icon iconfont icon-arrowright"></i></span></a>
            </router-link>

            
        </div>
        <div class="personal_list">
            <div class="personal_item">
                <div class="personal_item_icon">
                    <i class="icon iconfont icon-tongxunlu"></i>
                </div>
                <router-link class="personal_item_tip" to="/personal/friend">我的好友<i class="icon iconfont icon-arrowright"></i></router-link>
            </div>
            <div class="personal_item">
                <div class="personal_item_icon">
                    <i class="icon iconfont icon-text"></i>
                </div>
                <router-link class="personal_item_tip" to="/personal/note">我的手账<i class="icon iconfont icon-arrowright"></i></router-link>
            </div>
            <div class="personal_item">
                <div class="personal_item_icon">
                    <i class="icon iconfont icon-riqi"></i>
                </div>
                <router-link class="personal_item_tip" to="/personal/date">记下的日子<i class="icon iconfont icon-arrowright"></i></router-link>
            </div>
            <div class="personal_item">
                <div class="personal_item_icon">
                    <i class="icon iconfont icon-favorite"></i>
                </div>  
                <router-link class="personal_item_tip" to="/personal/save">收藏<i class="icon iconfont icon-arrowright"></i></router-link>
            </div>
            <div class="personal_item">
                <div class="personal_item_icon">
                    <i class="icon iconfont icon-set"></i>
                </div>  
                <router-link class="personal_item_tip" to="/personal/system">设置<i class="icon iconfont icon-arrowright"></i></router-link>
            </div>
        </div>
    </div>
    <foot-top></foot-top>

    
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive> -->
    <router-view></router-view>


  </div>
</template>

<script>
import headTop from '@/components/common/head';
import footTop from '@/components/common/foot';
import { mapState } from 'vuex';
export default {
    components:{
        headTop,
        footTop
    },
    data(){
        return{
            "isBack": false,
            // userName:""
        }
    },
    computed:{
        ...mapState(["userName","tel"])
    },
    mounted(){
        let _this = this; 
        this.$api.get(this.$interface.SELFCENTER.get_settingdata).then(res => {
            // this.userName = res.data.data.userName;
            // this.tel = res.data.data.tel;
            this.$store.commit('updateUserName', res.data.data.userName);
            this.$store.commit('updateTel', res.data.data.tel);
        })
    }

}
</script>

<style>
    .personal_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        width: 100%;
        height: calc(100% - 6.291rem);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .personal_top{
        display: flex;
        height: 6.6rem;
        background-color: white;
        border-bottom: 1px solid #eeeeee;
    }
    .personal_avatar{
        flex: 0 0 3rem;
        height: 6.6rem; 
    }
    .personal_avatar img{
        margin-top: 1.2rem;
        margin-left: 1.2rem;
        width: 4.2rem;
        height: 4.2rem;
        border-radius: 0.6rem;
        border: none;
    }
    .personal_name{
        flex: 1;
        margin-top: 1.2rem;
        margin-left: 1rem;
        height: 4.2rem;
        color: black;
    }
    .personal_name .personal_name_wrapper{
        height: 3rem;
        line-height: 2rem;
        font-size: 1.4rem;
        font-weight: 700;
    }
    .personal_name .personal_tel{
        height: 1.2rem;
        font-size: 0.8rem;
        color: #aba9a9;
        vertical-align: top;
    }
    .personal_name .personal_tel .personal_tel_icon{
        float: right;
        margin-right: 1.2rem;
    }
    .personal_name .personal_tel .personal_tel_icon i{
        font-size: 0.8rem !important;
    }
    .personal_list{
        margin-top: 1rem; 
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }
    .personal_item{
        display: flex;
        height: 3.2rem;        
        line-height: 3.2rem;
        font-size: 1rem;
        background-color: white;
        color: #aba9a9;
    }
    .personal_item .personal_item_icon{
        flex: 0 0 2rem;
        padding-left: 1rem;
        height: 3.2rem;
        line-height: 3.2rem;
    }
    .personal_item .personal_item_icon i{
        font-size: 1.2rem;
    }
    .personal_item .personal_item_tip{
        flex: 1;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        border-bottom: 1px solid #eeeeee;
        color: #aba9a9;
    }
    .personal_item:last-child .personal_item_tip{
        border-bottom:none;
    }
    .personal_item .personal_item_tip i{
        float: right;
    }





</style>