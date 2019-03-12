<template>
	<header>
		<div class="header_wrapper">
			<a class="header_wrapper_back" v-if="isBack" href="javascript:history.back();"><i class="icon iconfont icon-arrowleft"></i></a>
			<div class="header_wrapper_title">{{pageTitle}}</div>
			<div class="search" v-if="!isBack">
				<a class="icon iconfont icon-search"></a>
			</div>
		</div>
	</header>
</template>

<script>
export default {
    data(){
    	return{
    		
    	}
    },
    props:['isBack','pageTitle'],
    mounted(){
    	
    },
    methods:{
    	
    },

}
</script>

<style>
	@import "../../assets/icon/iconfont.css";
	.header_wrapper{
		position: fixed;
		left: 0px; 
		top: 0px;
		width: 100%;
		height: 3.031rem;
		background-color: #fed640;
		color: white;
		z-index: 999;
	}
	.header_wrapper_back{
		float: left;
		display: inline-block;
		padding-left: 0.8rem;
		line-height: 3.031rem;
		font-size: 1rem;
		color: white;
	}
	.header_wrapper_title{
		float: left;
		padding-left: 0.8rem;
		line-height: 3.031rem;
		font-size: 1rem;
	}
	.header_wrapper .search{
		float: right;
		padding-right: 0.8rem;
		line-height: 3.031rem;
	}
</style>