<template>
  <div class="friend">
    <head-top :is-back="isBack" :page-title="$route.params.nickname"></head-top>
    <div class="friend_wrapper">

    </div>  
  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
	data(){
		return{
			"isBack":true,
            
		}
	},
    components:{
		headTop
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>

<style>
	.friend_wrapper{
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
    
</style>