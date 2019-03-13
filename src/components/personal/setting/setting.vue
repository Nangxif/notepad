<template>
  <div class="setting">
    <head-top :is-back="isBack" page-title="个人信息"></head-top>
    <div class="setting_wrapper">
        <div class="setting_list">
            <div class="setting_item">
                <div class="setting_title">
                    头像
                </div>
                <div class="setting_content">
                    <img src="../avatar.jpg"/>
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </div>
            <router-link class="setting_item" to="/personal/setting/nickname">
                <div class="setting_title">
                    昵称
                </div>
                <div class="setting_content">
                    曩昔
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </router-link>
            <div class="setting_item">
                <div class="setting_title">
                    手机号
                </div>
                <div class="setting_content">
                    15521223592
                    <i class="icon iconfont icon-arrowright"></i>
                </div>
            </div>
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
export default {
    name: 'setting',
    data(){
    	return{
    		"isBack": true
    	}
    },
    components:{
		headTop
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
