<template>
  <div class="nickname">
    <head-top :is-back="isBack" page-title="修改性别"></head-top>
    <div class="nickname_wrapper">
        <input type="text" v-model="sex"/>
        <p>你是GG还是MM</p>
        <a @click="save">保存</a>
    </div>
    <success :openModal="openModal" :text="text" v-if="isModal" @closeModal="closeModal"></success>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import success from '@/components/common/modal/success.vue';
import { settingData,updateSex } from '../../../../assets/api.js';
export default {
    data(){
        return{
            "isBack": true,
            "openModal": false,
            "isModal": false,
            "timer": {},
            "text": "保存成功",
            sex:""
        }
    },
    components:{
        headTop,
        success
    },
    mounted(){
        let _this = this; 
        settingData().then((res) => {
            _this.sex = res.data.data.sex;
        });
    },
    actived(){
        console.log("已激活2");
    },
    deactived(){
        console.log("已撤销2");  
    },
    methods:{
        save(){
            // 此处进行保存操作
            let _this = this;
            updateSex(_this.sex==""?"未设置":_this.sex).then((res) => {
                if(res.data.code==1){
                    this.isModal = true;
                    this.openModal = true;
                }
            })
        },
        closeModal(){
            this.openModal = false;
            this.timer = setTimeout(() => {
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
        font-size: 1rem;
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