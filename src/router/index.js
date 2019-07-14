import Vue from 'vue'
import Router from 'vue-router'
import landing from './denglu_zhuce/index.js'
import register from './denglu_zhuce/index2.js'
// import Landing from '@/views/pingjia/evaluate.vue';
import Landing from '@/views/denglu_zhuce/landing.vue';
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Landing },
    landing,
    register
	
  ]
})
