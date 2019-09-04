<template>
  <div class="friend">
    <head-top :is-back="isBack" page-title="我的好友"></head-top>
    <div class="friend_wrapper">
        <div class="friend_roll">
            <div class="friend_list">
                <router-link class="friend_item" to="/personal/friend/addFriend">
                    <div class="friend_item_avatar">
                        <div><i class="icon iconfont icon-tianjiahaoyou"></i></div>
                    </div>
                    <div class="friend_item_nickname">添加新朋友</div>
                </router-link>
            </div>

            

            <a class="friend_list_a" name="A">A</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="B">B</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="C">C</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="E">E</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="G">G</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="H">H</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="I">I</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="J">J</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <a class="friend_list_a" name="L">L</a>
            <div class="friend_list">
                <router-link class="friend_item" to="">
                    <div class="friend_item_avatar">
                        <img src="../avatar.jpg"/>
                    </div>
                    <div class="friend_item_nickname">nangxi</div>
                </router-link>
            </div>
            <p class="friend_list_end">无更多好友，快去添加吧！</p>
        </div>
        
    </div>  
    <div class="friend_index">
        <div class="friend_index_wrapper">
            <a v-for="item in index"  @touchstart="navigation(item)" @touchend="isSelectedIndex">{{item}}</a>
        </div>
    </div>
    <div class="friend_index_tip" v-if="isSelected">{{selectedIndex}}</div>

    <router-view></router-view>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
import vPinyin from '@/assets/pinyin/vue-py.js';
export default {
	data(){
		return{
			"isBack":true,
            "index":["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],
            "selectedIndex": "A",
            "isSelected": false,
            friendNameList:[],
            friendNameArr:[],
            friendAvatarList: [],
		}
	},
    components:{
		headTop
    },
    mounted(){
        // this.$api.get(this.$interface.SELFCENTER.get_friends).then(res => {
        //     if(res.data.code == 1){
        //         // res.data.data.
        //         // vPinyin.chineseToPinYin
        //     }
        // })
        this.getFriendList();
        
    },
    methods:{
        async getFriendList(){
            let f = await this.$api.get(this.$interface.SELFCENTER.get_friends);
            let g = await this.$api.get(this.$interface.SELFCENTER.get_friendbyid,{friendList:f.data.data.friendList.replace(/,/,"|")});
            console.log(g);
            let arr = g.data.data;
            for(let i = 0;i< arr.length; i++){
                this.friendNameArr.push(arr[i].userName);
                this.friendNameList.push(vPinyin.chineseToPinYin(arr[i].userName)[0]);
                this.friendAvatarList.push(arr[i].avatarUrl);
            }
            console.log([...new Set(this.friendNameList)]);
        },
        navigation(point){
            this.selectedIndex = point;
            this.isSelected = true;
            if($(".friend_list_a[name='"+point+"']").length>0){    
                $(".friend_wrapper").animate({
                    'scrollTop': $(".friend_list_a[name='"+point+"']").position().top
                }, 200);
            }
        },
        isSelectedIndex(){
            this.isSelected = false;
        }
    }
}
</script>

<style>
	.friend_wrapper{
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
    .friend_roll{
        position: relative;
    }
    .friend_list_a{
        display: block;
        padding-left: 1.2rem;
        width: 100%;
        height: 1.4rem;
        line-height: 1.4rem;
        background-color: #ebebeb;
        color: #8a8a8a;
        font-size: 0.8rem;
    }
    .friend_list_end{
        display: block;
        width: 100%;
        text-align: center;
        height: 2.4rem;
        line-height: 2.4rem;
        color: #8a8a8a;
        font-size: 0.8rem;
        border-top: 1px solid #e0e0e0 !important;
    }
    .friend_wrapper .friend_list{
        margin: 0 auto;
        width: 90%;
    }
    .friend_item{
        display: flex;
        height: 4.2rem;
        border-bottom: 1px solid #e0e0e0;
    }
    .friend_list .friend_item:last-child{
        border-bottom: none;
    }
    .friend_item .friend_item_avatar{
        flex: 0 0 2.2rem;
    }
    .friend_item_avatar div{
        margin-top: 1.1rem;
        width: 2rem;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        border-radius: 0.5rem;
        background-color: #fed640;
    }
    .friend_item_avatar i{
        font-size: 1.2rem;
        font-weight: 600;
        color: white;
    }
    .friend_item .friend_item_avatar img{
        margin-top: 1.1rem;
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
    }
    .friend_item_nickname{
        padding-left: 1.2rem;
        height: 4.2rem;
        line-height: 4.2rem;
        color: #2a2a2a;
        font-size: 0.96rem;
    }
    /*右边字母导航条*/
    .friend_index{
        position: fixed;
        top: 0px;
        right: 0px;
        width: 30px;
        height: 100%;
        z-index: 501;
    }
    .friend_index_wrapper{
        position: fixed;
        right: 0px;
        top: 12%;
        z-index: 2;
    }
    .friend_index a{
        display: block;
        width: 20px;
        line-height: 1.2rem;
        text-align: center;
        color: #585858;
        font-size: 0.6rem;
        user-select: none;
    }

    .friend_index_tip{
        margin: auto;
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        width: 4.2rem;
        text-align: center;
        height: 4.2rem;
        line-height: 4.2rem;
        font-size: 2rem;
        border-radius: 1rem;
        background-color: rgba(0,0,0,0.3);
        color: white;
        z-index: 503;
    }
</style>