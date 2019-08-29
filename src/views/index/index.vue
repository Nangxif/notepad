<template>
  <div id="index">
    <head-top :is-back="isBack" page-title="首页"></head-top>
    <header class="header_title">
        <div :class="whichItem[0]?'header_title_item active':'header_title_item'" @click="changeItem(0)">好友手账</div>
        <div :class="whichItem[1]?'header_title_item active':'header_title_item'" @click="changeItem(1)">好友日子</div>
        <div :class="whichItem[2]?'header_title_item active':'header_title_item'" @click="changeItem(2)">好友账单</div>
    </header>
    <fri-note v-if="whichItem[0]"></fri-note>
    <fri-date v-if="whichItem[1]"></fri-date>
    <fri-bill v-if="whichItem[2]"></fri-bill>
    <foot-top></foot-top>
    <!-- <loading></loading> -->
    <!-- <success :openModal="openModal" v-if="isModal" @closeModal="closeModal"></success> -->
    <!-- <error></error> -->
    <!-- <warning></warning> -->
  </div>
</template>

<script>
import mixin from '@/mixins/mixin.js';
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
    mixins:[mixin],
    data(){
    	return{
    		whichItem:[true,false,false]
    	}
    },
    components:{
		headTop,
		footTop,
        loading,
        success,
        error,
        warning,
        friNote,
        friDate,
        friBill
    },
    methods:{
        // closeModal(){
        //     this.openModal = false;
        //     this.timer=setTimeout(()=>{
        //         clearTimeout(this.timer);
        //         this.isModal=false;
        //     },1000);
        // },
        changeItem(index){
            this.whichItem = [false,false,false];
            this.whichItem[index] = true;
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
        border-bottom: 1px solid #eeeeee;
    }
    .header_title_item{
        flex: 1;
        height: 2rem;
        line-height: 2rem;
        font-size: .8rem;
        text-align: center;
        color: #979797;
    }
    .header_title_item.active{
        color: #fed640 !important;
        border-bottom: 1px solid #fed640 !important;
    }
</style>
