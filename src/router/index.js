import Vue from 'vue'
import Router from 'vue-router'
import shaixuan from '@/views/shaixuan'

import Mine from './mine' //我的页面
import Chongzhi from './chongzhi'  //充值页面
import Citychoose from './citychoose'  //城市选择
import Mywallet from './mywallet' //我的钱包
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/shaixuan', component: shaixuan },
    Mine,
    Chongzhi,
    Citychoose,
    Mywallet 
	
  ]
})
