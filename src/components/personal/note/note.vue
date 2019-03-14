<template>
  <div class="note">
    <head-top :is-back="isBack" page-title="我的手账"></head-top>
    <div class="note_wrapper">
        <div class="note_list">
            <p class="note_list_date">2019年3月14日</p>
            <div class="note_item_wrapper" v-for="(item,index) in note_data">
                <v-touch v-on:swipeleft="moveItemToLeft(item.id)" v-on:swiperight="moveItemToRight(item.id)" :swipe-options="{direction: 'horizontal'}" >
                    <div class="note_item" :ref="item.id">
                        <div class="note_content">
                            <div class="note_item_title">{{item.title}}</div>
                            <div class="note_item_desc">{{item.desc}}</div>
                            <p class="note_item_time">{{item.upload_time}}</p>
                        </div>
                        <div class="note_delete">
                            <a @click="deleteItem(index)"><i class="icon iconfont icon-weibiaoti6"></i></a>
                        </div>
                    </div>
                </v-touch>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
    data(){
        return{
            "isBack": true,
            note_data:[{
                id:0,
                title:"开启手账的第一天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:1,
                title:"开启手账的第二天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:2,
                title:"开启手账的第三天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:3,
                title:"开启手账的第四天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:4,
                title:"开启手账的第五天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:5,
                title:"开启手账的第六天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:6,
                title:"开启手账的第七天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:7,
                title:"开启手账的第八天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            },{
                id:8,
                title:"开启手账的第九天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50"
            }]
        }
    },
    components:{
        headTop
    },
    methods:{
        moveItemToLeft(data){
            $(".note_item").css("left","0%");
            this.$refs[data][0].style.left = "-20%";      
        },
        moveItemToRight(data){
            this.$refs[data][0].style.left = "0%";
        },
        deleteItem(index){
            $(".note_item_wrapper").eq(index).animate({"left":"120%"},500).slideUp();
            // this.note_data.splice(index,1);
        }
    }
}
</script>

<style>
    .note_wrapper{
        position: fixed;
        left: 0px;
        top: 0px;
        padding-top: 3.031rem;
        padding-bottom: 4rem;
        width: 100%;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .note_list{
        width: 100%;
    }
    .note_list_date{
        display: block;
        padding-left: 1.2rem;
        width: 100%;
        height: 1.5rem;
        line-height: 1.6rem;
        background-color: #ebebeb;
        color: #8a8a8a;
        font-size: 0.8rem;
    }
    .note_item_wrapper{
        position: relative;
        margin: 0 auto;
        width: 100%;
    }
    .note_item{
        position: relative;
        left: 0%;
        display: flex;
        width: 120%;
        transition: all .2s ease-out;
    }
    .note_item .note_content{
        flex: 1;
    }
    .note_item .note_delete{
        flex: 0 0 16.6%;
    }
    .note_item .note_delete a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #fed640;
    }
    .note_item .note_delete a i{
        font-size: 1.8rem;
        color: white;
    }
    .note_item .note_item_title{
        height: 2rem;
        margin-top: 0.6rem;
        margin-bottom: 0.2rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 2rem;
        font-size: 1.2rem;
    }
    .note_item_desc{
        margin-bottom: 0.4rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 1.5rem;
        font-size: 1rem;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        color: #aba9a9;
    }
    .note_item_time{
        padding-bottom: 0.6rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.8rem;
        color: #aba9a9;
        border-bottom: 1px solid #eeeeee;
    }
    

</style>