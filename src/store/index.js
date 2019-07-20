import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jifen:0,  //积分
    chooseLi:0,
    tianshu:'2天',
    get_time:new Date(),
    chosedcity:"郑州",
    jine:0
  },
  mutations: {
    //签到加积分200
    add_jifen(state,v){
      state.jifen=v; 
  },
  //所选择的li的index
  chosedli(state,v){
    state.chooseLi = v;
  },
  day(state,v){
    state.tianshu=v
  },
  getTime(state,v){
    state.get_time=v},
  //所选择的城市名字
  chosed_c(state,v){
    state.chosedcity = v;
   
  },
  add_jine(state,v){
    state.jine = v;
  }
  },
  actions: {

  }
})
