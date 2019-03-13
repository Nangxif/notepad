<template>
  <div class="nickname">
    <head-top :is-back="isBack" page-title="修改昵称"></head-top>
    <div class="nickname_wrapper">
        <input type="text"/>
        <p>好名字可以让你的朋友更容易记住你</p>
        <a @click="save">保存</a>
    </div>
    <success :openModal="openModal" :text="text" v-if="isModal" @closeModal="closeModal"></success>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import success from '@/components/common/modal/success.vue';
export default {
    data(){
        return{
            "isBack": true,
            "openModal": false,
            "isModal": false,
            "timer": {},
            "text": "保存成功"
        }
    },
    components:{
        headTop,
        success
    },
    methods:{
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
                history.back();
            },1000);
        }
    }
}
</script>

<style>
    .nickname_wrapper{
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
    .nickname_wrapper input{
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0px 0.5rem;
        width: 90%;
        height: 2.5rem;
        border: 0px;
        border-bottom: 1px solid #fed640;
        font-size: 1.125rem;
        outline: none;
    }
    .nickname_wrapper p{
        margin: 0 auto;
        width: 90%;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: #d6d6d6;
    }
    .nickname_wrapper a{
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