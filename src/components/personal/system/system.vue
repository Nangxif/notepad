<template>
  <div class="system">
    <head-top :is-back="isBack" page-title="设置"></head-top>
    <div class="system_wrapper">
        <div class="system_list">
            <div class="system_item">
                <div class="system_item_tip">关于notepad<i class="icon iconfont icon-arrowright"></i></div>
            </div>
            <div class="system_item">
                <div class="system_item_tip">更换广告<i class="icon iconfont icon-arrowright"></i></div>
            </div>
            <div class="system_item">
                <div class="system_item_tip">清除缓存</div>
            </div>
        </div>
        <a @click="exit" class="exit">退出</a>
    </div>
    <router-view></router-view>


  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
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
    .system_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        width: 100%;
        height: calc(100% - 3.031rem);
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }
    
    .system_list{
        border-bottom: 1px solid #eeeeee;
    }
    .system_item{
        display: flex;
        height: 3.2rem;        
        line-height: 3.2rem;
        font-size: 1rem;
        background-color: white;
        color: #aba9a9;
    }
    .system_item .system_item_icon{
        flex: 0 0 2rem;
        padding-left: 1rem;
        height: 3.2rem;
        line-height: 3.2rem;
    }
    .system_item .system_item_icon i{
        font-size: 1.2rem;
    }
    .system_item .system_item_tip{
        flex: 1;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        border-bottom: 1px solid #eeeeee;
        color: #aba9a9;
    }
    .system_item:last-child .system_item_tip{
        border-bottom:none;
    }
    .system_item .system_item_tip i{
        float: right;
    }



    .exit{
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
        width: 90%;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 1rem;
        background-color: #fed640;
        border-radius: 1.25rem;
        text-decoration: none;
        color: white;
    }



</style>