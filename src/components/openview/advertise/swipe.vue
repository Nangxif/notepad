<template>
	<div class="swiper">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">
					<div class="swiper_center">
						<img src="../../../../static/logo_white.png"/><span>Bespoke notepad</span>
					</div>
		        </div>
		        <div class="swiper-slide">
					<div class="swiper_center">
						<img src="../../../../static/logo_white.png"/><span>Remember good dates</span>
					</div>
		        </div>
		        <div class="swiper-slide">
		        	<div class="swiper_center">
						<img src="../../../../static/logo_white.png"/><span>开始</span>
					</div>
					<a class="start" @click="changeSwiper()">开启手账</a>
		        </div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default {
	name: 'swiper',
	data () {
		return {
		}
	},
	mounted(){
		new Swiper ('.swiper-container', {
			loop: false,
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			}
		})  
	},
	methods:{
		changeSwiper(){
			this.$emit("isSwiper", false)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper{
	margin: auto;
	position: fixed;
	left: 0px;
	right: 0px;
	top: 0px;
	bottom: 0px;
	z-index: 2;
}
.swiper-container{
	width: 100%;
	height: 100%;
}
.swiper-slide{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}
.swiper_center{
	text-align: center;
}
.swiper-slide img{
	margin: 0 auto;
	display: block;
	width: 12rem;
	height: auto;
}
.swiper-slide span{
	font-size: 30px;
	font-weight: 600;
	color: white;
}
.swiper-slide{
	background: -webkit-linear-gradient(left, #feda44 , #fed640); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(right, #feda44, #fed640); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(right, #feda44, #fed640); /* Firefox 3.6 - 15 */
	background: linear-gradient(to right, #feda44 , #fed640); /* 标准的语法 */
}
.swiper-slide a{
	display: inline-block;
	margin: auto;
	position: absolute;
	left: 0px;
	right: 0px;
	bottom: 50px;
	width: 100px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	background-color: white;
	color: #fed640;
	border-radius: 15px;
}
</style>
