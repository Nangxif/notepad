<template>
  <div class="addfriend">
    <head-top :is-back="isBack" page-title="添加朋友"></head-top>
    <div class="addFriend_wrapper">
        <input type="text" name="findTel" class="addFriend_search"/>
        <p>请输入好友的电话号码进行查询</p>
        <a>查找好友</a>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
	data(){
		return{
			"isBack":true
		}
	},
    components:{
		headTop
    },
    methods:{
        
    }
}
</script>

<style>
	.addFriend_wrapper{
        position: fixed;
        left: 0px;
        top: 0px;
        padding-top: 3.031rem;
        width: 100%;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }

    .addFriend_search{
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0px 0.5rem;
        width: 90%;
        height: 2.5rem;
        border: 0px;
        border-bottom: 1px solid #fed640;
        font-size: 1rem;
        outline: none;
    }
    .addFriend_wrapper p{
        margin: 0 auto;
        width: 90%;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: #d6d6d6;
    }
    .addFriend_wrapper a{
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