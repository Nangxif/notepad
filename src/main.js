// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import $ from 'jquery'
import vcolorpicker from 'vcolorpicker';//颜色拾取
import VuePreview from 'vue-preview';//图片预览
import './assets/swiper.min.css';

// 在此注册颜色插件，在component里面注册的话，则是以组件的方式注册
Vue.use(vcolorpicker)
// 注册图片预览插件
Vue.use(VuePreview)

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
