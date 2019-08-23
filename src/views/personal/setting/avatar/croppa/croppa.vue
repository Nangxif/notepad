<template>
  <div class="croppa">
    <div class="croppa_wrapper"> 
        <croppa v-model="myCroppa"
        :width="299"
        :height="299"
        :canvas-color="'#e6e6e6'"
        :placeholder="'请选择更改的图片'"
        :placeholder-font-size="16"
        :placeholder-color="'default'"
        :accept="'image/*'"></croppa>
        <a @click="save" class="croppa_save">更改</a>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            "isBack": true,
            "openModal": false,
            "isModal": false,
            "timer": {},
            "text": "更改成功",
            myCroppa: {}
        }
    },
    components:{
    },
    methods:{
        save(){
            // 此处进行保存操作
            console.log(this.myCroppa.generateDataUrl());
            this.$emit('croppaEmit',{isCroppa:false,avatar_URL:this.myCroppa.generateDataUrl()});
        },
        closeModal(){
            this.openModal = false;
            this.timer=setTimeout(()=>{
                clearTimeout(this.timer);
                this.isModal=false;
            },1000);
        },
    }
}
</script>

<style>
    .croppa{
        margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 3.031rem;
        /*bottom: 3.26rem;*/
        bottom: 0rem;
        background-color: rgba(0,0,0,0.4);
        z-index: 502;
    }
    .croppa_wrapper{
        margin: auto;
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        height: calc(100% - 3.031rem);
        background-color: white;
        z-index: 501;
    }
    .croppa_wrapper .croppa_num{
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
    .croppa_btn_group{
        display: flex;
        margin: 0 auto;
        margin-top: 1rem;
        width: 90%;
        height: 2.5rem;
    }
    .croppa_btn_group input{
        flex: 1;
        padding: 0px 0.5rem;
        height: 2.5rem;
        border: 0px;
        border-bottom: 1px solid #fed640;
        font-size: 1.125rem;
        outline: none;
    }
    .croppa_btn_group a{
        flex: 0 0 6rem;
        text-align: center;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 0.8rem;
        color: white;
        background-color: #fed640;
    }
    .croppa_wrapper .croppa_save{
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