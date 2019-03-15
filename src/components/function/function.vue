<template>
  <div class="function">
    <head-top :is-back="isBack" page-title="功能"></head-top>
    <div class="function_wrapper">
        <div class="function_item">
            <i class="icon iconfont icon-xie"></i>写手账
        </div>
        <router-link class="function_item" to="/function/editDate">
            <i class="icon iconfont icon-shijian"></i>记日子
        </router-link>
        <div class="function_item">
            待开发……
        </div>
    </div>
    <router-view></router-view>
    <foot-top></foot-top>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import footTop from '@/components/common/foot';
export default {
	data(){
		return{
			"isBack":false
		}
	},
    components:{
		headTop,
		footTop
    }
}
</script>

<style>
	.function_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        width: 100%;
        height: calc(100% - 6.291rem);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .function_item{
        display: block;
        margin: 0 auto;
        margin-top: 0.5rem;
        width: 90%;
        text-align: center;
        height: 6rem;
        line-height: 6rem;
        font-size: 1.9rem;
        border: 1px solid #fed640;
        border-radius: .5rem;
        background-color: #fed640;
        color: white;
    }
    .function_item i{
        margin-right: .2rem;
        font-size: 1.9rem;
        color: white;
    }
</style>