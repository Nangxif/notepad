<template>
  <div class="editBill">
    <head-top :is-back="isBack" page-title="记账单"></head-top>
    <div class="editBill_wrapper">
    	<input type="text" name="day_name" class="day_name" placeholder="账单名称" v-model="billTitle"/>
    	<a @click="selectBill" class="bill_select">{{indelibility}}</a>
    	<textarea class="remark" v-model="billContent"></textarea>
    	<a @click="selectLevel" class="level_select"><span :style="{'background-color': selectColor}">{{level}}</span></a>
    	<a @click="create_Bill" class="editBill_create">创建</a>
        <calendar
		    v-model="calendarShow"
		    :defaultDate="defaultBill"
		    @change="handelChange">
		</calendar>
	

		<!-- 事件等级选择弹框 -->
		<div class="level_select_modal"  @click="selectLevel">
			<div class="level_select_wrapper">
				<a @click.stop="selectLevelColor(index)" v-for="(btn,index) in levelBtn">{{btn.text}}<span :style="{'background-color':btn.color}"><i class="icon iconfont icon-gou" v-if="index==0"></i></span></a>
				<!-- <a @click.stop="selectLevelColor(0)">重要<span style="background-color: #ef7676;"><i class="icon iconfont icon-gou"></i></span></a>
				<a @click.stop="selectLevelColor(1)">比较重要<span style="background-color: #35b8f3;"></span></a>
				<a @click.stop="selectLevelColor(2)">普普通通<span style="background-color: #9cff29;"></span></a>
				<a @click.stop="selectLevelColor(3)">比较不重要<span style="background-color: #fed640;"></span></a>
				<a @click.stop="selectLevelColor(4)">不重要<span style="background-color: #ccb7af;"></span></a> -->
			</div>
		</div>
		<!-- 创建成功弹框 -->
		<div class="create_modal">
			<div class="create_wrapper">
				<div class="create_title">
					{{indelibility}}
				</div>
				<p class="create_desc">{{levelBtn[selectIndex].desc}}</p>
				<a class="create_modal_close" @click="closeCreate">取消</a>
			</div>
		</div>

    </div>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
// import {addBill} from '../../../assets/api.js';
export default {
    data(){
        return{
            "isBack": true,
            billTitle:'账单名称',
            indelibility: new Date().getFullYear()+"年"+(new Date().getMonth()+1)+"月"+new Date().getDate()+"日",
            level: "特别着急",//初始事件等级
            billContent:"借钱原由",
            calendarShow: false,
			defaultBill: new Date(),//初始默认时间
			selectColor: "#ef7676",//事件等级初始颜色
			levelBtn:[{
				text:"特别着急",
				color:"#ef7676"
			},{
				text:"比较着急",
				color:"#35b8f3"
			},{
				text:"普普通通",
				color:"#9cff29"
			},{
				text:"比较不着急",
				color:"#fed640"
			},{
				text:"可以缓缓",
				color:"#ccb7af"
			}],
			selectIndex:0
        }
    },
    components:{
        headTop
    },
    methods:{
    	selectBill(){
    		this.calendarShow = true;
    	},
    	selectLevel(e){
    		e.stopPropagation();
    		if($(".level_select_modal").css("display")=="block"){
    			$(".level_select_modal").fadeOut();
    			$(".level_select_wrapper").css("transform","translateY(100%)");
    		}else{
    			$(".level_select_modal").fadeIn();
    			$(".level_select_wrapper").css("transform","translateY(0%)");
    		}
    		
    	},
    	selectLevelColor(ele){
    		$(".level_select_wrapper a").find("span").children().remove();
    		$(".level_select_wrapper a").eq(ele).find("span").append(`<i class="icon iconfont icon-gou"></i>`);
    		this.level = $(".level_select_wrapper a").eq(ele).text();
    		this.selectColor = $(".level_select_wrapper a").eq(ele).find("span").css("background-color");
    		this.selectIndex = ele;
    	},
    	handelChange(data){
    		this.indelibility = new Date().getFullYear(data)+"年"+(new Date(data).getMonth()+1)+"月"+new Date(data).getDate()+"日";
    		console.log(data);
    	},
    	create_Bill(){
            addBill({
                billTitle:this.billTitle,
                bill:this.indelibility,
                billContent:this.billContent,
                billLevel:this.level,
                billLevelDesc:this.levelBtn[this.selectIndex].desc,
                createTime:new Date()
            }).then((addresult)=>{
                if(addresult.data.code==1){
                    $(".create_modal").fadeIn();
                    $(".create_wrapper").addClass("create_wrapper_bg_"+this.selectIndex);
                }
            })
    	},
    	closeCreate(){
            let that = this;
    		$(".create_modal").fadeOut(function(){
                that.$router.replace({
                    path:'/personal/bill'
                })
            });
    	}
    }
}
</script>

<style>
    .editBill_wrapper{
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
    .day_name{
    	display: block;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0px 0.5rem;
        width: 90%;
        height: 2.5rem;
        line-height: 2.5rem;
        border: 0px;
        border-bottom: 1px solid #fed640;
        font-size: 1rem;
        color: #979797;
        outline: none;
    }

    .bill_select,.level_select{
    	display: block;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0.2rem;
        width: 90%;
        height: 2.5rem;
        border: 0px;
        border: 1px solid #fed640;
        font-size: 1rem;
        color: #979797;
        outline: none;
        border-radius: .2rem;
    }
    .level_select{
    	padding: 0px 0.4rem;
        line-height: 2.5rem;   	
    }
    .level_select span{
    	display: inline-block;
        padding: 0px 0.4rem;
        line-height: 2rem;
    	width: 100%;
    	text-align: center;
    	height: 100%;
    	color: white;
    }
    .remark{
    	display: block;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0px 0.5rem;
        width: 90%;
        line-height: 2.5rem;
        min-height: 10rem;
        border: 0px;
        border: 1px solid #fed640;
        font-size: 1rem;
        color: #979797;
        outline: none;
        border-radius: .2rem;
    }
    .editBill_create{
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

	/*事件等级弹框*/
    .level_select_modal{
    	display: none;
    	position: absolute;
    	left: 0px;
    	top: 0px;
    	width: 100%;
    	height: 100%;
    	background: rgba(0,0,0,.4);
	    z-index: 9999;
    }
    .level_select_wrapper{
    	position: absolute;
    	left: 0px;
    	bottom: 0px;
    	width: 100%;
    	background-color: white;
		transform: translateY(100%);
		transition: all .3s ease-out;
    }
    .level_select_wrapper a{
    	display: block;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		font-size: 1rem;
        color: #979797;
        border-top: 1px solid #eeeeee;
    }
    .level_select_wrapper a span{
    	float: right;
    	position: relative;
    	display: inline-block;
    	margin-top: 1rem;
    	width: 1rem;
    	text-align: center;
    	height: 1rem;
    	line-height: 1rem;
    }
	.level_select_wrapper a span i{
		font-size: 1rem;
		color: white;
	}

	/*创建成功弹框*/
	.create_modal{
    	display: none;
    	position: absolute;
    	left: 0px;
    	top: 0px;
    	width: 100%;
    	height: 100%;
    	background: rgba(0,0,0,.4);
	    z-index: 9999;
    }
    .create_wrapper{
    	margin: auto;
    	position: absolute;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;
		width: 20rem;
		height: 17.6rem;
		background-repeat: no-repeat;
		background-size: 100% auto;
    }
    /*.create_wrapper_bg_0{
		background-image: url('./date2.jpg');
    }
    .create_wrapper_bg_1{
		background-image: url('./date2.jpg');
    }
    .create_wrapper_bg_2{
		background-image: url('./date3.jpg');
    }
    .create_wrapper_bg_3{
		background-image: url('./date4.jpg');
    }
    .create_wrapper_bg_4{
		background-image: url('./date5.jpg');
    }
    .create_wrapper_bg_5{
		background-image: url('./date6.jpg');
    }*/

    .create_title{
    	position: absolute;
        left: 1.5rem;
        top: 1rem;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-bottom: .2rem;
        font-size: 1.6rem;
        color: #c7adad;
        border-bottom: 2px solid #c7adad;
    }
    .create_desc{
    	position: absolute;
        left: 1.5rem;
        top: 4.8rem;
        padding-right: 1.5rem;
        font-size: 1.2rem;
        color: #c7adad;
    }
	.create_modal_close{
		margin: auto;
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 1rem;
        display: block;
        width: 50%;
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