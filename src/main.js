// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import $ from 'jquery'
 import VueTouch from 'vue-touch'//手指触摸事件
import vcolorpicker from 'vcolorpicker';//颜色拾取
import VuePreview from 'vue-preview';//图片预览
import Croppa from 'vue-croppa';//图片裁剪
import Calendar from 'vue-mobile-calendar'//日期插件
import 'vue-croppa/dist/vue-croppa.css';
import './assets/swiper.min.css';
import $cookies from 'vue-cookies';//cookie插件




// 手指触摸事件注册
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {

     threshold: 66 //手指左右滑动距离

}
// 在此注册颜色插件，在component里面注册的话，则是以组件的方式注册
Vue.use(vcolorpicker)
// 注册图片预览插件
Vue.use(VuePreview)
// 注册裁剪插件
Vue.use(Croppa);
// 注册日期插件
Vue.use(Calendar)
// 注册日期插件
Vue.use($cookies)

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
