<template>
  <div id="fri_date">
    日子
    <div class="fri_note_item">
        <div class="fri_note_top">
            <div>
                <img src="/static/img/avatar.0d5a53f.jpg"/>
            </div>
            <div>
                天赋早报
                <span>屏蔽此条</span>
            </div>
        </div>
        <p class="fri_note_title">开启手账的第一天</p>
        <p class="fri_note_content">那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸<a>全文</a></p>
    </div>
    <div class="fri_note_item">
        <div class="fri_note_top">
            <div>
                <img src="/static/img/avatar.0d5a53f.jpg"/>
            </div>
            <div>
                天赋早报
                <span>屏蔽此条</span>
            </div>
        </div>
        <p class="fri_note_title">开启手账的第一天</p>
        <p class="fri_note_content">那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸<a>全文</a></p>
    </div>
    <div class="fri_note_item">
        <div class="fri_note_top">
            <div>
                <img src="/static/img/avatar.0d5a53f.jpg"/>
            </div>
            <div>
                天赋早报
                <span>屏蔽此条</span>
            </div>
        </div>
        <p class="fri_note_title">开启手账的第一天</p>
        <p class="fri_note_content">那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸。那是一个风和日丽的清晨，我懒洋洋地打开窗户，甜甜的花香轻揉着我的双眸<a>全文</a></p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Fri_date',
    data(){
    	return{
    		
    	}
    },
    components:{
		
    },
    methods:{
        
    }
}
</script>

<style>
    #fri_date{
        width: 100%;
        padding-top: 5.031rem;
        padding-bottom: 3.26rem;
    }
    .fri_note_item{
        background-color: white;
        border-bottom: 1px solid #eeeeee;
        margin-bottom: .4rem;
    }
    .fri_note_top{
        display: flex;
        border-bottom: 1px solid #eeeeee;
    }
    .fri_note_top div:nth-child(1){
        flex: 0 0 4.5rem;
        height: 4rem;
    }
    .fri_note_top div:nth-child(1) img{
        margin-top: .5rem;
        margin-left: .5rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    .fri_note_top div:nth-child(2){
        flex: 1;
        height: 4rem;
        line-height: 4rem;
        padding-right: .5rem;
        overflow: hidden;
    }
    .fri_note_top div:nth-child(2) span{
        float: right;
        margin-top: 1.2rem;
        padding: 0 .5rem;
        background-color: #fed640;
        border-radius: .5rem;
        height: 1.6rem;
        line-height: 1.6rem;
        color: white;
        font-size: .5rem;
    }
    .fri_note_title{
        padding: 0 .5rem;
        line-height: 2rem;
        margin-bottom: .2rem;
    }
    .fri_note_content{
        padding: 0 .5rem;
        line-height: 1.6rem;
        margin-bottom: .2rem;
    }
    .fri_note_content a{
        color: #4f8ef1;
    }
</style>
