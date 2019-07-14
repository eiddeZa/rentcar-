import Vue from 'vue'
import Router from 'vue-router'
import shaixuan from './shaixuan'
import mendianxuan from './mendianxuan'
Vue.use(Router)

export default new Router({
  routes: [
    shaixuan,
    mendianxuan
  ]
})
