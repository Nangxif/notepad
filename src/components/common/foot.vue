<template>
	<footer>
		<div class="footer_wrapper">
			<router-link to="/index" active-class="active">
				<span class="icon iconfont icon-wxbzhuye"></span>
				<p>首页</p>
			</router-link>
			<router-link to="/find" active-class="active">
				<span class="icon iconfont icon-compass"></span>
				<p>发现</p>
			</router-link>
			<router-link to="/create" active-class="active">
				<span class="icon iconfont icon-comments"></span>
				<p>写手账</p>
			</router-link>
			<router-link to="/personal" active-class="active">
				<span class="icon iconfont icon-account"></span>
				<p>个人中心</p>
			</router-link>
		</div>
	</footer>
</template>

<script>
export default {
    data(){
    	return{
    		
    	}
    },
    mounted(){
    	
    },
    methods:{
    	
    },

}
</script>

<style>
	@import "../../assets/icon/iconfont.css";
	.footer_wrapper{
		position: fixed;
		left: 0px; 
		bottom: 0px;
		width: 100%;
		height: 3.26rem;
		background-color: #fcfcfc;
	    border-top: 1px solid #d4d4d4;
	    display: flex;
	    z-index: 500;
	}
	.footer_wrapper .active{
		color: #fed640 !important;
	}
	.footer_wrapper a{
		position: relative;
		flex: 1;
		height: 3.26rem;
		text-align: center;
		cursor: pointer;
		color: #979797;
	}
	.footer_wrapper a span{
		margin: auto;
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0.4rem;
		font-size: 1.4rem !important;
	}
	.footer_wrapper a p{
		position: absolute;
		left: 0px;
		top: 2rem;
		width: 100%;
		text-align: center;
		font-size: 0.2rem;
	}

</style>