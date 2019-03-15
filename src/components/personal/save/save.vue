<template>
  <div class="save">
    <head-top :is-back="isBack" page-title="收藏"></head-top>
    <div class="save_wrapper">
        <div class="save_list">
            <p class="save_list_date">2019年3月14日</p>
            <div class="save_item_wrapper" v-for="(item,index) in save_data">
                <v-touch v-on:swipeleft="moveItemToLeft(item.id)" v-on:swiperight="moveItemToRight(item.id)" :swipe-options="{direction: 'horizontal'}" >
                    <div class="save_item" :ref="item.id">
                        <div class="save_content">
                            <div class="save_item_info">
                                <img src="../avatar.jpg"/>
                                <div class="save_item_info_detail">
                                    <div class="save_item_info_name">薛家子</div>
                                    <div class="save_item_info_date">撰写于{{item.upload_time}}</div>
                                </div>
                            </div>
                            <div class="save_item_title">{{item.title}}</div>
                            <div class="save_item_desc">{{item.desc}}</div>
                            <p class="save_item_time">{{item.save_time}}</p>
                        </div>
                        <div class="save_delete">
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
            save_data:[{
                id:0,
                title:"开启手账的第一天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:1,
                title:"开启手账的第二天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:2,
                title:"开启手账的第三天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:3,
                title:"开启手账的第四天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:4,
                title:"开启手账的第五天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:5,
                title:"开启手账的第六天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:6,
                title:"开启手账的第七天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:7,
                title:"开启手账的第八天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            },{
                id:8,
                title:"开启手账的第九天",
                desc: "那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸",
                upload_time:"2019年3月14日   11:50",
                save_time:"2019年3月14日   11:50"
            }]
        }
    },
    components:{
        headTop
    },
    methods:{
        moveItemToLeft(data){
            $(".save_item").css("left","0%");
            this.$refs[data][0].style.left = "-20%";      
        },
        moveItemToRight(data){
            this.$refs[data][0].style.left = "0%";
        },
        deleteItem(index){
            $(".save_item_wrapper").eq(index).animate({"left":"120%"},500).slideUp();
            // this.save_data.splice(index,1);
        }
    }
}
</script>

<style>
    .save_wrapper{
        position: fixed;
        left: 0px;
        top: 0px;
        padding-top: 3.031rem;
        padding-bottom: 2rem;
        width: 100%;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }
    .save_list{
        width: 100%;
    }
    .save_list_date{
        display: block;
        padding-left: 1.2rem;
        width: 100%;
        height: 1.5rem;
        line-height: 1.6rem;
        background-color: #ebebeb;
        color: #8a8a8a;
        font-size: 0.8rem;
    }
    .save_item_wrapper{
        position: relative;
        margin: 0 auto;
        width: 100%;
    }
    .save_item{
        position: relative;
        left: 0%;
        display: flex;
        width: 120%;
        transition: all .2s ease-out;
    }
    .save_item .save_content{
        flex: 1;
    }
    .save_item .save_delete{
        flex: 0 0 16.6%;
    }
    .save_item .save_delete a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #fed640;
    }
    .save_item .save_delete a i{
        font-size: 1.8rem;
        color: white;
    }
    .save_item .save_item_info{
        height: 4rem;
        margin-top: 0.6rem;
        margin-bottom: 0.2rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 2rem;
        font-size: 1.2rem;
    }
    .save_item .save_item_info img{
        display: inline-block;
        width: 3.3rem;
        height: 3.3rem;
        margin-right: 0.5rem;
        border-radius: 0.5rem;
        vertical-align: top;
    }
    .save_item .save_item_info .save_item_info_detail{
        display: inline-block;
        height: 3.3rem;
    }
    .save_item .save_item_info .save_item_info_detail .save_item_info_name{
        height: 1.8rem;
        line-height: 1.8rem;
        font-size: 1rem;
        font-weight: 600;
    }

    .save_item .save_item_info .save_item_info_detail .save_item_info_date{
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.8rem;
        color: #aba9a9;
    }
    .save_item .save_item_title{
        height: 2rem;
        margin-top: 0.1rem;
        margin-bottom: 0.2rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 2rem;
        font-size: 1.2rem;
    }
    .save_item_desc{
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
    .save_item_time{
        padding-bottom: 0.6rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.8rem;
        color: #aba9a9;
        border-bottom: 1px solid #eeeeee;
    }
    

</style>