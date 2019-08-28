<template>
  <div class="avatar">
    <head-top :is-back="isBack" page-title="头像"></head-top>
    <div class="avatar_wrapper">
        <!-- 图片预览插件 -->
        <vue-preview :slides="slide" @close="handleClose"></vue-preview>
        <a class="avatar_wrapper_btn" @click="showCroppa">更改图片</a>
        <a class="avatar_wrapper_btn" @click="save">保存</a>
    </div>
    <success :openModal="openModal" :text="text" v-if="isModal" @closeModal="closeModal"></success>
    <croppa v-if="isCroppa" @croppaEmit="croppaEmit"></croppa>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import success from '@/components/common/modal/success.vue';
import croppa from './croppa/croppa';
export default {
    data(){
        return{
            "isBack": true,
            "openModal": false,
            "isModal": false,
            "timer": {},
            "text": "更改成功",
            slide: [
              {
                src: '/static/img/avatar.0d5a53f.jpg',
                msrc: '/static/img/avatar.0d5a53f.jpg',
                alt: '曩昔的头像',
                title: '曩昔的头像',
                w: 600,
                h: 600
              }
            ],
            isCroppa:false,
        }
    },
    components:{
        headTop,
        success,
        croppa
    },
    methods:{
        showCroppa(){
            this.isCroppa = true;
        },
        croppaEmit(e){
            console.log(e);
            this.isCroppa = e.isCroppa;
            this.slide[0].src = e.avatar_URL;
            this.slide[0].msrc = e.avatar_URL;
        },
        save(){
            // 此处进行保存操作
            this.isModal = true;
            this.openModal = true;

        },
        closeModal(){
            this.openModal = false;
            this.timer=setTimeout(()=>{
                clearTimeout(this.timer);
                this.isModal=false;
            },1000);
        },
        handleClose () {
            console.log('close event')
        }
    }
}
</script>

<style>
    .avatar_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
/*        bottom: 3.26rem;*/
        width: 100%;
        height: calc(100% - 3.031rem);
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }
    .avatar_wrapper img{
        margin: 0 auto;
        margin-top: 1rem;
        display: block;
        width: 18.75rem;
        height: 18.75rem;
    }
    .avatar_wrapper .avatar_wrapper_btn{
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
        width: 90%;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 1rem;
        background-color: #fed640;
        border-radius: 1.25rem;
        text-decoration: none;
        color: white;
    }

</style>