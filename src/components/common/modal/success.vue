<template>
	<div class="success"  @click="closeModal">
		<div :class="openModal?'success_wrapper alertshow':'success_wrapper alerthide'">
			<i class="icon iconfont icon-success"></i>
			<p>{{text}}</p>
			<a>{{btnText}}</a>
		</div>
	</div>
</template>

<script>
export default {
    data(){
    	return{
    		
    	}
    },
    props:{
    	"openModal":{},
    	"text":{
    		default:"成功"
    	},
    	"btnText":{
    		default:"确认"
    	}
    },
    mounted(){
    	
    },
    methods:{
    	closeModal(){
          this.$emit('closeModal',false)
        }
    },

}
</script>

<style>
	.success{
        margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        background-color: rgba(0,0,0,0.4);
        z-index: 998;
    }
    .success_wrapper{
		margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
    	padding-top: 1rem;
    	width: 14rem;
    	text-align: center;
    	height: 14rem;
    	background-color: white;
    	border-radius: 1rem;
    }
    .success_wrapper i{
    	color: #01d10c;
    	font-size: 6rem;
    }
    .success_wrapper p{
    	margin-top: .2rem;
		font-size: 1rem;
		color: #979797;
    }
    .success_wrapper a{
    	margin: 0 auto;
    	margin-top: .5rem;
    	display: block;
    	width: 10rem;
    	height: 2.5rem;
	    line-height: 2.5rem;
	    font-size: 1rem;
	    background-color: #fed640;
	    border-radius: 1.25rem;
	    color: white;
    }

</style>