<template>
	<div class="error">
		<div class="error_wrapper">
			<i class="icon iconfont icon-error"></i>
		</div>
	</div>
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
	.error{
        margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        z-index: 998;
    }
    .error_wrapper{
		margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
    	width: 8rem;
    	text-align: center;
    	height: 8rem;
    	line-height: 8rem;
    	background-color: rgba(0,0,0,0.1);
    	border-radius: 1rem;
    }
    .error_wrapper i{
    	color: #b00020;
    	font-size: 6rem;
    }

</style>