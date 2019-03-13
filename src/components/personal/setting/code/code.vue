<template>
  <div class="code">
    <head-top :is-back="isBack" page-title="二维码名片"></head-top>
    <div class="code_wrapper">
        <QRCode :logoSrc="logo" :text="link" :logoScale="70" :size="300" :margin="0" :callback="callback" :colorDark="color"></QRCode>
        <!-- 二维码插件logoSrc:中间图片地址，text:二维码内容，margin：二维码外边距 -->
        <!-- 将颜色识别器按钮跟我们之前设置的按钮重叠 -->
        <a>
            选择二维码颜色         
            <colorPicker v-model="color"/>
        </a>
        <a @click="save">下载</a>
    </div>
    <success :openModal="openModal" :text="text" v-if="isModal" @closeModal="closeModal"></success>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import QRCode from 'vue-qr';
import success from '@/components/common/modal/success.vue';
export default {
    data(){
        return{
            "isBack": true,
            // codes:'',
            "openModal": false,
            "isModal": false,
            "timer": {},
            "text": "下载成功",
            link: "15521223592",
            logo: "http://192.168.24.146:8080/static/img/avatar.0d5a53f.jpg",
            dataUrl:"",
            color:"#fed640"
        }
    },
    components:{
        headTop,
        QRCode,
        success
    },
    methods:{
        // 图片下载函数
        downloadIamge(imgsrc, name) {//下载图片地址和图片名
            let a = document.createElement("a"); // 生成一个a元素
            let event = new MouseEvent("click"); // 创建一个单击事件
            a.download = name || "photo"; // 设置图片名称
            a.href = imgsrc; // 将生成的URL设置为a.href属性
            a.dispatchEvent(event); // 触发a的单击事件
        },
        // 保存图片按钮操作
        save(){
            // 此处进行保存操作
            this.isModal = true;
            this.openModal = true;
            this.downloadIamge(this.dataUrl,"code");
        },
        closeModal(){
            this.openModal = false;
            this.timer=setTimeout(()=>{
                clearTimeout(this.timer);
                this.isModal=false;
            },1000);
        },
        callback(dataUrl,id){
            this.dataUrl = dataUrl;
        }

    },
    mounted(){
      
    }
}
</script>

<style>
    .code_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        width: 100%;
        height: calc(100% - 6.291rem);
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .code_wrapper div img{
        margin:0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: block;
    }
    .code_wrapper a{
        position: relative;
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