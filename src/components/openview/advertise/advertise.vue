<template>
	<div id="advertisement">
		<transition name="swiper">
			<SwiperComponent @isSwiper='isSwiper' v-if="isShowSwiper"></SwiperComponent>
		</transition>
		<transition name="advertisement">
			<div v-if="is_advert">
				<div class="advertisement_bg"></div>
				<div class="times" @click="changeStatus()">{{time}}s</div>
			</div>
		</transition>
		
	</div>
</template>

<script>
import SwiperComponent from './swipe.vue'; 
export default {
    name: 'Advertisement',
    components:{
    	SwiperComponent
    },
    data(){
    	return{
    		is_advert:false,
    		time:5,
    		isShowSwiper:true
    	}
    },
    mounted(){
    	
    },
    methods:{
    	// 判断是否关闭广告页
    	changeStatus(){
    		this.is_advert = false;
    		this.$router.push({path:"/login"})
    	},
    	//倒计时
    	count(){
    		let timeInterval = setInterval(()=>{
    			this.time--;
    			if(this.time==0){
    				clearInterval(timeInterval);
    				this.is_advert = false;
    				this.$router.push({path:"/login"})
    			}
    		},1000)
    	},
    	isSwiper(c){
    		if(!c){
    			this.isShowSwiper = c;
    			this.is_advert = true;
    			this.count();
    		}
    	}
    },

}
</script>

<style>
#advertisement{
	position:relative;
	width: 100%;
	height: 100%;
}
#advertisement .advertisement_bg{
	display: block;
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	background-image: url('./advertise.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	animation:advertisement_bg_move 5s linear;
	animation-fill-mode: forwards;
	-webkit-animation-fill-mode: forwards;
	transform: scale(1);
	transform-origin: center;
	z-index: 2;
}
@keyframes advertisement_bg_move {
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.1);
	}
}

/* 开始过渡阶段,动画出去阶段 */
.advertisement-enter-active,.advertisement-leave-active{
  transition: all .5s ease-out;
}
/* 出去终点 */
.advertisement-leave-active{
  opacity: 0;
}



.swiper-enter-active,.swiper-leave-active{
  transition: all .5s ease-out;
}
/* 出去终点 */
.swiper-leave-active{
  opacity: 0;
}


#advertisement .times{
	position: fixed;
	right: 20px;
	top: 20px;
	width: 50px;
	height: 26px;
	line-height: 26px;
	text-align: center;
	color: white;
	background-color: rgba(255,255,255,0.5);
	border-radius: 5px;
	z-index: 3;
}





</style>