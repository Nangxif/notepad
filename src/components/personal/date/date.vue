<template>
  <div class="date">
    <head-top :is-back="isBack" page-title="记下的日子"></head-top>
    <div class="date_wrapper">
        <div class="date_list">
            <p class="date_list_date">2019年3月14日</p>
            <div class="date_item_wrapper" v-for="(item,index) in date_data">
                <v-touch v-on:swipeleft="moveItemToLeft(item._id)" v-on:swiperight="moveItemToRight(item._id)" :swipe-options="{direction: 'horizontal'}" >
                    <div class="date_item" :ref="item._id">
                        <div class="date_content">
                            <div class="date_item_title">{{item.dateTitle}}</div>
                            <div class="date_item_desc">{{item.dateContent}}</div>
                            <p class="date_item_time">{{new Date(item.createTime).getFullYear()}}年{{new Date(item.createTime).getMonth()+1}}月{{new Date(item.createTime).getDate()}}  {{new Date(item.createTime).getHours()}}:{{new Date(item.createTime).getMinutes()}}:{{new Date(item.createTime).getSeconds()}}</p>
                        </div>
                        <div class="date_delete">
                            <a @click="deleteItem(index,item._id)"><i class="icon iconfont icon-weibiaoti6"></i></a>
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
import { getDates,deleteDates } from '../../../assets/api.js';
export default {
    data(){
        return{
            "isBack": true,
            date_data:[]
        }
    },
    mounted(){
        getDates().then((dates) => {
            console.log(dates);
            if(dates.data.code == 1){
               this.date_data =  dates.data.data;
            }
        })
    },
    components:{
        headTop
    },
    methods:{
        moveItemToLeft(data){
            $(".date_item").css("left","0%");
            this.$refs[data][0].style.left = "-20%";      
        },
        moveItemToRight(data){
            this.$refs[data][0].style.left = "0%";
        },
        deleteItem(index,_id){
            console.log(_id);
            deleteDates(_id).then((del) => {
                if(del.data.code==1){
                    $(".date_item_wrapper").eq(index).animate({"left":"120%"},500).slideUp();
                }
            });
            // this.date_data.splice(index,1);
        }
    }
}
</script>

<style>
    .date_wrapper{
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
    .date_list{
        width: 100%;
    }
    .date_list_date{
        display: block;
        padding-left: 1.2rem;
        width: 100%;
        height: 1.5rem;
        line-height: 1.6rem;
        background-color: #ebebeb;
        color: #8a8a8a;
        font-size: 0.8rem;
    }
    .date_item_wrapper{
        position: relative;
        margin: 0 auto;
        width: 100%;
    }
    .date_item{
        position: relative;
        left: 0%;
        display: flex;
        width: 120%;
        transition: all .2s ease-out;
    }
    .date_item .date_content{
        flex: 1;
    }
    .date_item .date_delete{
        flex: 0 0 16.6%;
    }
    .date_item .date_delete a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #fed640;
    }
    .date_item .date_delete a i{
        font-size: 1.8rem;
        color: white;
    }
    .date_item .date_item_title{
        height: 2rem;
        margin-top: 0.6rem;
        margin-bottom: 0.2rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 2rem;
        font-size: 1.2rem;
    }
    .date_item_desc{
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
    .date_item_time{
        padding-bottom: 0.6rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.8rem;
        color: #aba9a9;
        border-bottom: 1px solid #eeeeee;
    }
    

</style>