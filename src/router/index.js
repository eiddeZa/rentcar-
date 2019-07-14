import Vue from 'vue'
import Router from 'vue-router'
import shaixuan from '@/views/shaixuan'
import NullOrder from './null_order'  //空订单信息
import OrderDetail from './order_detail' //订单详情
import OrderPay from './order_pay' //支付信息
import RentCar from './rent_car'  //立即租车
import ShopInfo from './shop_info'//门店详情
import landing from './denglu_zhuce/index.js'
import register from './denglu_zhuce/index2.js'
// import Landing from '@/views/pingjia/evaluate.vue';
import Landing from '@/views/denglu_zhuce/landing.vue';
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/shaixuan', component: shaixuan },
   NullOrder,
   OrderDetail,
   OrderPay,
   RentCar,
   ShopInfo,

    { path: '/', component: Landing },
    landing,
    register
	
  ]
})
