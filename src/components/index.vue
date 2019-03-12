<template>
  <div id="index">
    <head-top :is-back="isBack" page-title="首页"></head-top>
    <foot-top></foot-top>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import footTop from '@/components/common/foot';
export default {
    name: 'Index',
    data(){
    	return{
    		"isBack": false
    	}
    },
    components:{
		headTop,
		footTop
    }
}
</script>

<style>

</style>
