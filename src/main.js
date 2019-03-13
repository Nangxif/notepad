// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import $ from 'jquery'
import vcolorpicker from 'vcolorpicker'
import './assets/swiper.min.css';

// 在此注册颜色插件，在component里面注册的话，则是以组件的方式注册
Vue.use(vcolorpicker)


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
