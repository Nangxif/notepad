<template>
  <div class="find">
    <head-top page-title="发现"></head-top>
    <div class="find_wrapper">
        <!-- <p v-demo>{{msg}}</p> -->
        <!-- <a @click="chan">点击</a> -->
    </div>
    <foot-top></foot-top>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import footTop from '@/components/common/foot';
import loading from '@/components/common/modal/loading.vue';
export default {
    data(){
        return{
            showwz:[],
            wznum:'',
            isLoading:false,
            msg:"测试"
        }
    },
    directives:{
        demo:{
            bind(){
                console.log("bind触发");
            },
            inserted(){
                console.log("inserted触发");
            },
            update(){
                console.log("update触发");
            },
            componentUpdated(){
                console.log("componentUpdated触发")
            }
        }
    },
    components:{
        headTop,
        footTop,
        loading
    },
    methods:{
        getwz:function(){
            var that = this;
            this.isLoading = true;
            
        },
        chan(){
            this.msg = "测试2"
        }
    },
    mounted:function(){
        
    }
}
</script>

<style scope>
    .find_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        bottom: 3.26rem;
        width: 100%;
        height: calc(100% - 6.291rem);
        overflow-x: hidden;
        overflow-y: auto;
    }
    [v-cloak]{
        display: none!important;
    }
    *{
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    /*body{
        width: 95%;
        margin: 10px auto;
    }*/
    .pubu{
        margin: 0 auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: calc(100% - 16px);
    }
    .yg img{
        width:100%;
        border-radius: 8px 8px 0 0;
    }
    .yg p{
        width: 100%;
        font-size: 0.75rem;
        padding:5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #999;
    }
    .yg_l , .yg_r{
        width: calc(50% - 5px);
    }
    .yg li{
        background: #fff;
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0 0 5px #999;
    }
    .yg_l{
        float: left;
    }
    .yg_r{
        float: right;
    }
    .u_xinx{
        position: absolute;
        bottom: 4px;
    }
    .u_xinx img{
        margin-left: 5px;
        background: rgba(0,0,0,.2);
        box-shadow: 0 1px 3px rgba(0,0,0,.5);
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: inline-block;
    }
    .u_xinx span{
        position: relative;
        text-shadow: 0 1px 1px #333;
        top: -8px;
        color: #fff;
        font-size: 0.6rem;
    }
</style>