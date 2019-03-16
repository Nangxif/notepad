<template>
  <div class="function">
    <head-top :is-back="isBack" page-title="功能"></head-top>
    <div class="function_wrapper">
        <div class="function_item function_item_1">
            <p class="function_item_title">
                <i class="icon iconfont icon-xie"></i>写手账
            </p>
            <p class="function_item_desc">记录人生最美的瞬间</p>
            <div class="function_item_tip_1">Diary</div>
        </div>
        <router-link class="function_item function_item_2" to="/function/editDate">
            <p class="function_item_title">
                <i class="icon iconfont icon-shijian"></i>记日子
            </p>
            <p class="function_item_desc">生活需要纪念日</p>
            <div class="function_item_tip_2">Memorial<br/>Day</div>
        </router-link>
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
        position: relative;
        display: block;
        margin: 0 auto;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        width: 90%;
        height: 18rem;
        /*line-height: 6rem;*/
        border-radius: .5rem;
        background-color: #fed640;
        color: white;
    }
    .function_item i{
        margin-right: .2rem;
        font-size: 1.9rem;
        color: white;
    }
    .function_item_1{
        background-image: url('./banner1.jpg');
        background-repeat: no-repeat;
        background-size: 100% auto;
    }
    .function_item_2{
        background-image: url('./banner2.jpg');
        background-repeat: no-repeat;
        background-size: 100% auto;
    }

    .function_item_title{
        position: absolute;
        left: 1.5rem;
        top: 1rem;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-bottom: .2rem;
        font-size: 1.9rem;
        border-bottom: 2px solid white;
    }
    .function_item_desc{
        position: absolute;
        left: 1.5rem;
        top: 4.8rem;
        padding-left: .5rem;
        padding-right: .5rem;
        font-size: 1.2rem;
    }
    .function_item_tip_1{
        position: absolute;
        right: 1.5rem;
        top: -2rem;
        padding-left: .5rem;
        padding-right: .5rem;
        text-align: center;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.6rem;
        color: white;
        font-weight: 600;
        background-color: #553520;
    }
    .function_item_tip_2{
        position: absolute;
        right: 1.5rem;
        top: -2rem;
        padding-top: .45rem;
        padding-left: .5rem;
        padding-right: .5rem;
        text-align: center;
        height: 4rem;
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
        background-color: #ddb68d;
    }
</style>