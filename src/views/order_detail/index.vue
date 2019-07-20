<template>
  <div>
    <div class="orderDetail">
      <Header txt="订单详情">
        <!-- <span >dhdhddd</span> -->
        <router-link  slot="left" class="leftImg" to="/orderPay"> <img src="./img/back.png"  /></router-link>
        <img src slot="right" class="rightImg" alt />
      </Header>
    </div>
    <div class="content">
      <div class="title">
        <p  >
          订单号：
          <span>{{$store.state.order_num}}</span>
        </p>
        <p>
          下单日期：
          <span>{{$store.state.order_time}}</span>
        </p>
      </div>
      <div class="car_info" >
        <h4>车辆信息</h4>
        <img src="./img/car.png" alt />
        <p>{{list.car_name}}</p>
        <p>
          <span>{{list.car_type}}</span>|
          <span>{{list.car_auto}}</span>|
          <span>{{list.car_size}}</span>
        </p>
      </div>
      <div class="rent_info">
        <ul>
          <li>
            <span>取车城市：</span>
            <span>{{list.get_city}}</span>
          </li>
          <li>
            取车门店：
            <span>{{list.get_shop}}</span>
          </li>
          <li>
            取车时间：
            <span>{{list.get_time}}</span>
          </li>
          <li>
            还车城市：
            <span>{{list.return_city}}</span>
          </li>
          <li>
            还车门店：
            <span>{{list.return_shop}}</span>
          </li>
          <li>
            租车时长：
            <span>{{$store.state.tianshu}}</span>
          </li>
        </ul>
      </div>
      <div class="money_detail">
        <ul>
          <li>
            定金：
            <span>{{list.money}}元</span>
          </li>
          <li>
            预授权金额：
            <span>{{list.shouqu_money}}元</span>
          </li>
          <li>
            使用费：
            <span>{{list.use_money}}元</span>
          </li>
          <li>
            基本保险：
            <span>{{list.baoxian_money}}元</span>
          </li>
          <li>
            手续费：
            <span>{{list.shouxu_time}}元</span>
          </li>
        </ul>
        <ul>
          <li>不计免赔服务费：<span>{{list.service_time}}元</span></li>
          <li>GPS服务费：<span>{{list.GPS_money}}元</span></li>
          <li>异地还车费：<span>{{list.return_money}}元</span></li>
          <li>加油费：<span>{{list.jiayou_money}}元</span></li>
          <li>车辆损伤费：<span>{{list.sunshang_money}}元</span></li>
        </ul>
      </div>
      <div class="button">
        <keep-alive>
          <router-link to="/">
            <span>再来一单</span>
          </router-link >
        </keep-alive>
        <keep-alive>
          <router-link to="/">
            <span>预定评价</span>
          </router-link>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../../components/header/header.vue";
export default {
  data() {
    return {
      list:[]
    };
  },
  mounted(){
this.axios.get('./../../../static/json/detail.json').then((res)=>{
  this.list=res.data.order_info[0];
  console.log(res)
  console.log(this.list)
}).catch((err)=>{
  console.log(err);
})
  },
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="less">
// .orderDetail{
//     border-bottom: 2px solid #d8d8d8;
// }
.content {
  padding: 0 0 0 0.3rem;
  font-size: 0.25rem;
  .title,
  .car_info,
  .rent_info,
  .money_detail,
  .button {
    padding: 0 0.3rem 0 0.25rem;
    border-bottom: 1px solid #ccc;
  }
  .title {
    height: 0.7rem;
    font-size: 0.25rem;
    display: flex;
    flex-direction: row;

    p {
      flex: 1;
      margin-top: 0.15rem;
    }
  }
  .car_info {
    height: 2rem;
    box-sizing: border-box;
    padding-top: 0.2rem;
    img {
      width: 1.5rem;
      height:1.4rem;
      float: left;
      margin-top: 0.05rem;
    }
    p:nth-child(3) {
      margin-top: 0.36rem;
     
    }
    p:nth-child(4) {
      margin-top: 0.12rem;
       span{
          margin-right: .10rem;
      }
    }
  }
  .rent_info {
    padding-top: 0.24rem;
    padding-bottom: 0.24rem;
    ul {
      :nth-child(1) {
        margin-top: 0;
      }
      li {
        margin-top: 0.48rem;
      }
    }
  }
  .money_detail {
    display: flex;
    flex-direction: row;
    border-bottom: none;
    ul:nth-child(2) {
      margin-left: 1rem;
    }
    ul {
      margin-top: 0.24rem;
      flex: 1;
      li {
        margin-bottom: 0.3rem;
      }
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
     margin-top: 0.44rem;
      font-size: 0.25rem;
      margin-bottom: 0.81rem;
      border-bottom: none;
      padding: 0 1.18rem;
     
    a {
      color: #000000;
        cursor: pointer;
      span:nth-child(2) {
        margin-left: 1.3rem;
      }
      span {
        display: block;
        width: 1.6rem;
        text-align: center;
        line-height: 0.6rem;
        height: 0.6rem;
         background-color: #ffe009;
       
      }
    }
  }
}
</style>
