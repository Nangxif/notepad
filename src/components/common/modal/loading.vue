<template>
	<div class="loading">
		<div class="loading_gif">
            <img src="./loading.gif"/>
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
	.loading{
        margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        background-color: rgba(0,0,0,0);
        z-index: 998;
    }
    .loading_gif{
        margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 2.8rem;
        height: 2.8rem;
    }
    .loading_gif img{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>