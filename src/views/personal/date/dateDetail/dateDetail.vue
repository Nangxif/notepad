<template>
  <div class="dateDetail">
    <head-top :is-back="isBack" page-title="查看日子"></head-top>
    <div class="dateDetail_wrapper">
        <p class="date">{{date}}</p>
        <p class="title">{{title}}</p>
        <p class="time">创建时间：{{time|timeFilter}}  等级：{{level}}</p>
        <p class="">距离当天{{time|howmuchTime}}</p>
        <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import { getSingleDate } from '../../../../assets/api.js';
export default {
    data(){
        return{
            "isBack": true,
            date:"",
            title:"",
            level:"",
            time:"",
            content:""
        }
    },
    filters:{
        timeFilter(val){
             console.log("2");
            

            return `${new Date(val).getFullYear()}年${new Date(val).getMonth()+1}月${new Date(val).getDate()}日${new Date(val).getHours()}:${new Date(val).getMinutes()}:${new Date(val).getSeconds()}`
        },
        howmuchTime(val){
            let last = new Date() - val;
            // console.log(Math.abs(last));
            let { day, hour, minute, second } = {
                day: Math.floor(Math.abs(last)/(1000*60*60*24)),
                hour: (Math.abs(last) - day*1000*60*60*24)%(1000*60*60*24),
                minute: (Math.abs(last) - hour*60*60*1000)%(1000*60*60),
                second: (Math.abs(last) - minute*60*1000)%(1000*60)
            }
            return last>0?`还有${day}天${hour}时${minute}分${second}秒`:`已过去${day}天${hour}时${minute}分${second}秒`;
        }
    },
    components:{
        headTop
    },
    mounted(){
        getSingleDate(this.$route.query._id).then((res) => {
            if(res.data.code == 1){
                this.date = res.data.data.date;
                this.title = res.data.data.dateTitle;
                this.level = res.data.data.dateLevel;
                this.time = res.data.data.createTime;
                this.content = res.data.data.dateContent;
            }
        })
    }
}
</script>

<style>
    .dateDetail_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        width: 100%;
        height: calc(100% - 3.031rem);
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }
    .dateDetail_wrapper .date{
        display: block;
        padding-left: 1.2rem;
        width: 100%;
        height: 1.5rem;
        line-height: 1.6rem;
        background-color: #ebebeb;
        color: #8a8a8a;
        font-size: 0.8rem;
    }
    .dateDetail_wrapper .title{
        text-align: left;
        margin-top:0.6rem;
        margin-bottom:0.6rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        font-size: 2rem;
        font-weight: 600;
    }
    .dateDetail_wrapper .time{
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        margin-bottom:0.6rem;
        line-height: 1.2rem;
        font-size: 0.8rem;
        color: #aba9a9;
    }
    .dateDetail_wrapper p{
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        font-style: 1rem;
    }


</style>