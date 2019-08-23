<template>
  <div id="index">
    <head-top :is-back="isBack" page-title="首页"></head-top>
    <foot-top></foot-top>
    <!-- <loading></loading> -->
    <success :openModal="openModal" v-if="isModal" @closeModal="closeModal"></success>
    <!-- <error></error> -->
    <!-- <warning></warning> -->
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import footTop from '@/components/common/foot';
import loading from '@/components/common/modal/loading.vue';
import success from '@/components/common/modal/success.vue';
import error from '@/components/common/modal/error.vue';
import warning from '@/components/common/modal/warning.vue';
export default {
    name: 'Index',
    data(){
    	return{
    		"isBack": false,
            "openModal": true,
            "isModal": true,
            "timer": {}
    	}
    },
    components:{
		headTop,
		footTop,
        loading,
        success,
        error,
        warning
    },
    methods:{
        closeModal(){
            this.openModal = false;
            this.timer=setTimeout(()=>{
                clearTimeout(this.timer);
                this.isModal=false;
            },1000);
        }
    }
}
</script>

<style>

</style>
