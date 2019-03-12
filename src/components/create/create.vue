<template>
  <div class="create">
    <head-top :is-back="isBack" page-title="写手账"></head-top>
    <div class="create_wrapper">

    </div>
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
	.create_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        width: 100%;
        height: calc(100% - 6.291rem);
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>