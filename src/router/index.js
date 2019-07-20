import Vue from 'vue'
import Router from 'vue-router'
import mendianxuan from './mendianxuan'
import shaixuan from './shaixuan'

import Tianqi from './tianqi' //天气页面
import Mine from './mine' //我的页面
import Chongzhi from './chongzhi'  //充值页面
import success from './succ' //充值成功
import Citychoose from './citychoose'  //城市选择
import Mywallet from './mywallet' //我的钱包
import NullOrder from './null_order'  //空订单信息
import OrderDetail from './order_detail' //订单详情
import OrderPay from './order_pay' //支付信息
import RentCar from './rent_car'  //立即租车
import ShopInfo from './shop_info'//门店详情
import landing from './denglu_zhuce/index.js'//登陆
import register from './denglu_zhuce/index2.js'//注册
import evaluate from './pingjia/index.js'//评价
import guidepage from './yidaoye/index.js'//引导页
import clause from './fuwutiaokuan/index.js'//服务条款
// import Landing from '@/views/pingjia/evaluate.vue';
import Landing from '@/views/denglu_zhuce/landing.vue';
import shouye from './shouye'//首页
import SuccessPay from './success_pay'
// import Landing from '@/views/denglu_zhuce/landing.vue';
// import Landing from '@/views/denglu_zhuce/registers.vue';
Vue.use(Router)

export default new Router({
  routes: [
    shaixuan,
    mendianxuan,
    Mine,
    Chongzhi,
    Citychoose,
    Mywallet ,
   NullOrder,
   OrderDetail,
   OrderPay,
   RentCar,
   ShopInfo,
   evaluate,
    landing,
    register,
    shouye,
    guidepage,
    clause,
    success,
    SuccessPay ,//支付成功
    Tianqi
	
  ]
})
