// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import betterScroll from 'better-scroll'
window.BS=betterScroll
import VueAMap from 'vue-amap';//引入高德地图
Vue.use(VueAMap);//注册高德地图
window.VueAMap=VueAMap;
Vue.use(Vant);
import axios from 'axios';
Vue.prototype.axios=axios;
//
import VueBetterScroll from 'vue2-better-scroll';
Vue.use(VueBetterScroll);
Vue.config.productionTip = false;
//Swipe
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
