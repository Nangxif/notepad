<template>
  <div id="index">
    <head-top :is-back="isBack" page-title="首页"></head-top>
    <header class="header_title">
        <div class="header_title_item">好友手账</div>
        <div class="header_title_item">好友日子</div>
        <div class="header_title_item">好友账单</div>
    </header>
    <fri-note></fri-note>
    <foot-top></foot-top>
    <!-- <loading></loading> -->
    <!-- <success :openModal="openModal" v-if="isModal" @closeModal="closeModal"></success> -->
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



import friNote from './fri_note/fri_note';
import friDate from './fri_date/fri_date';
import friBill from './fri_bill/fri_bill';
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
        warning,
        "friNote":friNote
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
    .header_title{
        display: flex;
        position: fixed;
        left: 0px;
        top: 3.031rem;
        width:100%;
        height: 2rem;
        background-color: white;
        border-bottom: 1px solid #d4d4d4;
    }
    .header_title_item{
        flex: 1;
        height: 2rem;
        line-height: 2rem;
        font-size: .8rem;
        text-align: center;
        color: #979797;
    }
</style>
