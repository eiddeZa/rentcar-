import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jifen:0,  //积分
    chooseLi:0,
    tianshu:'2天',//租车时长
    get_time:new Date(),//取车时间
    order_num:null,//订单号
    order_time:null,//订单时间
    tianshu:'2天',
    get_time:new Date(),
    chosedcity:"郑州",
    jine:0,
    obj:null,//储存选中车辆信息
    Phone:"",
    top_img:""
  },
  mutations: {
    //签到加积分200
    add_jifen(state,v){
      state.jifen+=v; 
    },
    //所选择的li的index
    chosedli(state,v){
      state.chooseLi = v;
    },
    //租车天数
    day(state,v){
      state.tianshu=v
    },
    //取车时间
    getTime(state,v){
      state.get_time=v},
      //订单号
      orderNum(state,v){
        state.order_num=v
      },
      //订单时间
      orderTime(state,v){
        state.order_time=v
      },

    //所选择的城市名字
    chosed_c(state,v){
      state.chosedcity = v;
    
    },
    add_jine(state,v){
      state.jine = v;
    },
    //提交选择车型
    setchexing(state,obj){
      state.obj=obj;
    },
  updateid(state,da){
    state.Phone=da[0],
    state.top_img=da[1]
    console.log(state.Phone);
  }
  },
  actions: {

  }
})
