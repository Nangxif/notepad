<template>
  <div id="index">
    <head-top :is-back="isBack" page-title="首页"></head-top>
    <header class="header_title">
        <router-link class="header_title_item" to="/index/friNote">好友手账</router-link>
        <router-link class="header_title_item" to="/index/friDate">好友日子</router-link>
        <router-link class="header_title_item" to="/index/friBill">好友账单</router-link>
    </header>
    <!-- <fri-note v-if="whichItem[0]"></fri-note>
    <fri-date v-if="whichItem[1]"></fri-date>
    <fri-bill v-if="whichItem[2]"></fri-bill> -->
    <router-view v-tmove="['/index/friNote','/index/friDate','/index/friBill']"></router-view>
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



// import friNote from './fri_note/fri_note';
// import friDate from './fri_date/fri_date';
// import friBill from './fri_bill/fri_bill';
export default {
    name: 'Index',
    mixins:[mixin],
    data(){
    	return{
            index: 0
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
    directives:{
        tmove:{
            bind(el,binding,vnode){
                let length = binding.value.length;
                let disX = 0;
                let x = 0;
                el.ontouchstart = (ev)=>{
                    let touch = ev.touches[0];
                    disX = touch.clientX; 
                    document.ontouchmove = (ev)=>{
                        let touch = ev.touches[0];
                        x = touch.clientX;
                    }
                    document.ontouchend = () => {
                        document.ontouchmove = null;
                        document.ontouchend = null;
                        if(disX-x>50){
                            if(vnode.context.index<length-1) ++vnode.context.index;     //debugger;
                            //在自定义的指令中，只有通过vnode.context才能获取到vue对象
                            vnode.context.$router.replace({ path:binding.value[vnode.context.index]})
                            
                        }else if(x - disX >50){
                            if(vnode.context.index>0) --vnode.context.index;// debugger;
                            vnode.context.$router.replace({ path:binding.value[vnode.context.index]})
                        }
                    }
                }
            }
        }
    },
    methods:{
       
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
