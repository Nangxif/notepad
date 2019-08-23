<template>
  <div class="tel">
    <head-top :is-back="isBack" page-title="修改手机号"></head-top>
    <div class="tel_wrapper">
        <input type="text" placeholder="更改手机号" class="tel_num" v-model="tel"/>
        <div class="tel_btn_group">
            <input type="text" placeholder="验证码" />
            <a class="get_num">获取验证码</a>
        </div>
        
        <a @click="save" class="tel_save">更改</a>
    </div>
    <success :openModal="openModal" :text="text" v-if="isModal" @closeModal="closeModal"></success>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import success from '@/components/common/modal/success.vue';
import { settingData,updateTel } from '../../../../assets/api.js';
export default {
    data(){
        return{
            "isBack": true,
            "openModal": false,
            "isModal": false,
            "timer": {},
            "text": "更改成功",
            tel:""
        }
    },
    components:{
        headTop,
        success
    },
    mounted(){
        let _this = this; 
        settingData().then((res) => {
            _this.tel = res.data.data.tel;
        });
    },
    methods:{
        save(){
            // 此处进行保存操作
            let _this = this;
            updateTel(_this.tel==""?"未设置":_this.tel).then((res) => {
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
    .tel_wrapper{
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
    .tel_wrapper .tel_num{
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
    .tel_btn_group{
        display: flex;
        margin: 0 auto;
        margin-top: 1rem;
        width: 90%;
        height: 2.5rem;    
    }
    .tel_btn_group input{
        flex: 1;
        padding: 0px 0.5rem;
        height: 2.5rem;
        border: 0px;
        border-bottom: 1px solid #fed640;
        font-size: 1rem;
        outline: none;
    }
    .tel_btn_group a{
        flex: 0 0 5.5rem;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 0.8rem;
        color: white;
        background-color: #fed640;
    }
    .tel_wrapper .tel_save{
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