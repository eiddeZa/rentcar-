<template>
  <div>
    <div class="orderPay">
      <Header txt="订单信息">
        <!-- <span >dhdhddd</span> -->
        <img src="./img/back.png" slot="left" class="leftImg" alt />
        <img src slot="right" class="rightImg" alt />
      </Header>
    </div>
    <div class="content">
      <div class="car_info">
        <h4>车辆信息</h4>
        <img src="./img/car.png" alt />
        <p>丰田汉兰达</p>
        <p>
          <span>SUV</span>|
          <span>2.7自动</span>|
          <span>乘坐5人</span>
        </p>
      </div>
      <div class="rent_info">
        <ul>
          <li>
            取车城市：
            <span>郑州</span>
          </li>
          <li>
            取车门店：
            <span>金水路店</span>
          </li>
          <li>
            取车时间：
            <span>2019-07-23</span>
          </li>
        </ul>
        <ul>
          <li>
            还车城市：
            <span>洛阳</span>
          </li>
          <li>
            还车门店：
            <span>皇城公园店</span>
          </li>
          <li>
            租车时长：
            <span>2天</span>
          </li>
        </ul>
      </div>
      <div class="price">
        <p>
          天数：
          <span>3</span>天
        </p>
        <p>
          定金：
          <span>300</span>元
        </p>
      </div>
      <div class="payment">
        <h4>支付方式</h4>
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell clickable @click="radio = '1'">
              <img src="./img/alipy.png" alt />
              <span>支付宝</span>
              <van-radio slot="right-icon" name="1" icon-size=".25rem" />
            </van-cell>
            <van-cell clickable @click="radio = '2'" icon-size=".25rem">
              <img src="./img/weixin.png" alt />
              <span>微信支付</span>
              <van-radio slot="right-icon" name="2" icon-size=".25rem" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" style="font-size:.25rem"/>
         <img class="down" src="./img/down.png" alt="">
        </van-dropdown-menu>
      </div>
      <div class="agree">
  <van-checkbox v-model="checked">选中即表示您已同意<span>《平价租车协议》</span></van-checkbox>
      </div>
      <div class="submit">
        <keep-live><router-link to=""><span>提交/支付</span>  </router-link></keep-live>  
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header/header.vue";
export default {
  data() {
    return {
      checked:true,
      radio: "1",
      value1: 0,
      option1: [
        { text: "其他支付方式", value: 0 },
        { text: "我的钱包", value: 1 },
        { text: "添加银行卡", value: 2 }
      ]
    };
  },
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="less">
.content {
  padding: 0 0.48rem;
  overflow: hidden;
  .car_info,
  .rent_info {
    padding: 0 0.18rem;
    border-bottom: 1px solid #cccccc;
    font-size: 0.25rem;
  }
  .car_info {
    padding-top: 0.36rem;
    padding-bottom: 0.18rem;
    h4 {
      font-size: 0.3rem;
    }
    img {
      width: 1.15rem;
      height: 0.78rem;
      margin-left: 0.9rem;
      float: left;
      margin-right: 0.9rem;
    }
    p:nth-child(4) {
      margin-top: 0.1rem;
      span {
        font-size: 0.22rem;
        margin-right: 0.1rem;
        color: #000000;
      }
    }
  }
  .rent_info {
    padding-top: 0.22rem;
    padding-bottom: 0.22rem;
    font-size: 0.25rem;
    display: flex;
    flex-direction: row;
    ul {
      flex: 1;
      li:last-child {
        margin-bottom: 0;
      }
      li {
        margin-bottom: 0.12rem;
      }
    }
  }
  .price {
    font-size: 0.25rem;
    padding: 0.2rem 0.2rem 0.28rem 0.2rem;
    p:nth-child(1) {
      margin-bottom: 0.12rem;
    }
  }
  .payment {
    border-bottom: none;
    //  box-sizing: border-box;
    padding-top: 0.23rem;
    font-size: 0.25rem;
    h4 {
      font-size: 0.3rem;
      padding-left: 0.15rem;
      margin-bottom: 0.27rem;
    }
    .van-cell {
      font-size: 0.25rem;
      padding: 0.25rem 0.05rem;
      border-bottom: none;
      img {
        margin-right: 0.3rem;
        float: left;
        vertical-align: top;
      }
      span {
        display: block;
        margin-top: .1rem;
        
      }
    }
    /deep/.van-dropdown-menu{
        margin-top: .4rem;
    }
    /deep/.van-dropdown-menu__item{
    
  border: none;
    }
      /deep/.van-dropdown-menu__title {
    font-size: 0.26rem;
    text-align: center;
    color: #999999
    }
    .down{
     
      margin-right: 1rem;
      float: left;
      position: absolute;
      right: .9rem;
      top:.05rem;
    }
    /deep/.van-dropdown-menu__title::after{
      border: none;
    }
    /deep/.van-radio__icon .van-icon{
      border: 2px solid #cccccc;
    }
    .van-radio__icon van-radio__icon--round van-radio__icon--checked{
      border-color: #2b5dc4
    }
    .van-radio__icon--checked .van-icon{
       border-color: #2b5dc4
    }
    }
  }
  .agree{
   
    // float: right;
    margin-top: .78rem;
  
    /deep/.van-checkbox__label{
 
font-size: .20rem;
  color: #999999;
  line-height: .25rem;
    }
    /deep/.van-checkbox__icon .van-icon{
      width: .25rem;
      height: .25rem;
      font-size: .24rem;
      margin-top: -.02rem;
      margin-right: .34rem;
       margin-left: 2rem;
    }
    /deep/.van-icon-success:before{
      line-height: .25rem;
      
    }

    span{
      color: #2b5dc4;
    }
  }
  .submit{
    margin-top: 1.45rem;
    margin-bottom: .48rem;
    width: 100%;
    height: 1rem;
    font-size: .3rem;
    
    a{
      color: #ffffff;
      span{
      width: 100%;
      height: 100%;
      display: block;
      background-color: #3aa3ff;
      border-radius: .08rem;
      text-align: center;
      line-height: 1rem;
      }
    }
  }
</style>
