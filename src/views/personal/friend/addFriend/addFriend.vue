<template>
  <div class="addfriend">
    <head-top :is-back="isBack" page-title="添加朋友"></head-top>
    <div class="addFriend_wrapper">
        <input type="text" name="findTel" class="addFriend_search" v-model="tel"/>
        <p class="title">请输入好友的电话号码进行查询</p>
        <a @click="find" class="find">查找好友</a>
        <div class="result" v-if="hasReault">
            <div>
                <img :src="friendObj.avatarUrl"/>
            </div>
            <div>
                <p>{{friendObj.nickName}}      {{friendObj.sex}}</p>
                <p style="font-size: .5rem;">{{friendObj.address}}</p>
            </div>
            <div class="add">
                <a @click="addFriend" :class="isAdd?'added':'noadd'">{{addText}}</a>
            </div>
        </div>
        <div v-else class="no_result">
            未查询到好友
        </div>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
	data(){
		return{
			"isBack":true,
            tel:"",
            avatarUrl:"",
            nickName:"",
            address:"",
            sex:"",
            friendObj:{},
            friendList:[],
            hasReault: false,
            isAdd:false,
            addText:""
		}
	},
    components:{
		headTop
    },
    methods:{
        find(){
            let _this = this;
            let clickNum = 1;
            if(this.tel&&clickNum){
                clickNum = 0;
                Promise.all([
                    this.$api.get(this.$interface.SELFCENTER.get_friend,{
                        tel: this.tel
                    }),
                    this.$api.get(this.$interface.SELFCENTER.get_friends)
                ]).then(res => {
                    if(res[0].data.code==1&&res[0].data.data){
                        _this.hasReault = true;
                        _this.friendObj.avatarUrl = res[0].data.data.avatarUrl;
                        _this.friendObj.nickName = res[0].data.data.userName;
                        _this.friendObj.address = res[0].data.data.address;
                        _this.friendObj.sex = res[0].data.data.sex; 
                        _this.friendObj.id = res[0].data.data._id;
                    }else{
                        _this.hasReault = false;
                    }
                    if(_this.tel != _this.$store.state.tel){
                        if(res[1].data.code == 1){
                            // 赋值好友列表
                            _this.friendList = res[1].data.data.friendList.split(",");
                            let a = _this.friendList.findIndex(function(val,index){
                                return val === _this.friendObj.id;
                            })
                            if(a != -1){
                                _this.isAdd = true;
                                _this.addText = "已添加";
                            }else{
                                _this.isAdd = false;
                                _this.addText = "添加好友";
                            }

                        }else{
                            _this.isAdd = false;
                            _this.addText = "添加好友";
                        }
                    }else{
                        _this.isAdd = true;
                        _this.addText = "本人";
                    }
                    
                    clickNum = 1;
                })

            }
        },
        addFriend(){
            let _this = this;
            if(!this.isAdd){
                _this.friendList.push(_this.friendObj.id);
                this.$api.get(this.$interface.SELFCENTER.add_friend,{
                    friendList: _this.friendList.join(",")
                },"POST").then(res => {
                    console.log(res);
                    if(res.data.code == 1){
                        _this.isModal = true;
                        _this.isAdd = true;
                    }
                })
            }
        }
    }
}
</script>

<style>
	.addFriend_wrapper{
        position: fixed;
        left: 0px;
        top: 0px;
        padding-top: 3.031rem;
        width: 100%;
        height: 100%;
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }

    .addFriend_search{
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
    .addFriend_wrapper .title{
        margin: 0 auto;
        width: 90%;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: #d6d6d6;
    }
    .addFriend_wrapper .find{
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

    .addFriend_wrapper .result{
        width: 90%;
        margin: 0 auto;
        margin-top: 1rem;
        display: flex;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }
    .addFriend_wrapper .result div:nth-child(1){
        flex: 0 0 4.5rem;
        height: 4rem;
    }
    .addFriend_wrapper .result div:nth-child(1) img{
        margin-top: .5rem;
        margin-left: .5rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    .addFriend_wrapper .result div:nth-child(2){
        flex: 1;
        height: 4rem;
        padding-right: .5rem;
        overflow: hidden;
    }
    .addFriend_wrapper .result div:nth-child(2) p:first-of-type{
        margin-top: .5rem;
    }
    .addFriend_wrapper .result div:nth-child(2) p{
        line-height: 1.5rem;
    }
    .addFriend_wrapper .result .add{
        flex: 0 0 4rem;
    }
    .addFriend_wrapper .result .add a{
        float: right;
        margin-top: 1.2rem;
        padding: 0 .5rem;
        border-radius: .5rem;
        height: 1.6rem;
        line-height: 1.6rem;
        color: white;
        font-size: .5rem;
    }
    .addFriend_wrapper .result .add .noadd{
        background-color: #fed640;
    }
    .addFriend_wrapper .result .add .added{
        background-color: #aba9a9;
    }
    .addFriend_wrapper .no_result{
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        color: #d6d6d6;
    }
</style>