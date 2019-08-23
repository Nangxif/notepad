<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
	</transition>
	<transition name="router-fade" mode="out-in">
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</transition>
  </div>
</template>

<script>
export default {
    name: 'App',
    actived(){
        console.log("已激活0");
    },
    deactived(){
        console.log("已注销0");
    }
}
</script>

<style>
	@import "./assets/common.css";
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
