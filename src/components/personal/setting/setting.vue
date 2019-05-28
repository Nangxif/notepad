<template>
  <div class="setting">
    <head-top :is-back="isBack" page-title="个人信息"></head-top>
    <div class="setting_wrapper">
        <div class="setting_list">
            <router-link class="setting_item" to="/personal/setting/avatar">
                <div class="setting_title">
                    头像
                </div>
                <div class="setting_content">
                    <img src="../avatar.jpg"/>
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
            <router-link class="setting_item" to="/personal/setting/nickname">
                <div class="setting_title">
                    昵称
                </div>
                <div class="setting_content">
                    {{userName}}
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
            <router-link class="setting_item" to="/personal/setting/sex">
                <div class="setting_title">
                    性别
                </div>
                <div class="setting_content">
                    {{sex}}
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
            <router-link class="setting_item" to="/personal/setting/tel">
                <div class="setting_title">
                    手机号
                </div>
                <div class="setting_content">
                    {{tel}}
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
            <router-link class="setting_item" to="/personal/setting/address">
                <div class="setting_title">
                    地址
                </div>
                <div class="setting_content">
                    {{address}}
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
            <router-link class="setting_item" to="/personal/setting/code">
                <div class="setting_title">
                    二维码名片
                </div>
                <div class="setting_content">
                    <i class="icon iconfont icon-erweima1688"></i>   <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import {settingData} from '../../../assets/api.js';
export default {
    name: 'setting',
    data(){
    	return{
    		"isBack": true,
            userName:"",
            sex:"",
            tel:"",
            address:""
    	}
    },
    components:{
		headTop
    },
    mounted(){
        let _this = this; 
        settingData().then((res) => {
            console.log(res)
            this.userName = res.data.data.userName;
            if(res.data.data.sex == "未设置"){
                this.sex = res.data.data.sex;  
            }else{
                this.sex = res.data.data.sex == "男"?"♂":"♀";
            }
            this.tel = res.data.data.tel;
            this.address = res.data.data.address;
        });
    }
}
</script>

<style>
    .setting_wrapper{
        position: fixed;
        left: 0px;
        top: 0px;
        padding-top: 3.031rem;
        padding-left: 1.2rem;
        width: 100%;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .setting_item:first-child{
        height:5.2rem;
    }
    .setting_item:first-child .setting_title{
        flex:1;
        height:5.2rem;
        line-height: 5.2rem;
    }
    .setting_item{
        display: flex;
        height:3.6rem;
        border-bottom: 1px solid #eeeeee;
    }
    .setting_title{
        flex:1;
        height:3.6rem;
        line-height: 3.6rem;
        text-align: left;
        padding-left: 0.8rem;
        font-size: 1rem;
        color: black;
    }
    .setting_content{
        flex: 1;
        padding-right: 0.8rem;
        height:3.6rem;
        line-height: 3.6rem;
        text-align: right;
        color: #aba9a9;
    }
    .setting_item:first-child .setting_content{
        height: 5.2rem;
        line-height: 5.2rem;
    }
    .setting_item .setting_content i{
        font-size: 1rem;
        vertical-align: top;
    }
    .setting_content img{
        display: inline-block;
        margin-top: 0.6rem;
        width: 4rem;
        height: 4rem;
        border-radius: 0.5rem;
        vertical-align: top;
    }
</style>
