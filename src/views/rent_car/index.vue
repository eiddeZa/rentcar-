<template>
  <div class="body">
 <div class="rentCar">
      <Header txt="租车">
        <!-- <span >dhdhddd</span> -->
        <router-link  slot="left" class="leftImg" to=""> <img src="./img/back.png"  /></router-link>
        <img src slot="right" class="rightImg" alt />
      </Header>
    </div>
    <div class="content">
    <div >
      <!-- <img src="./img/bgc.png" alt=""> -->
      <Banner class="banner">
            <swiper-slide slot="swiper_sli">
              <img src="./img/bgc.png" alt="">
            </swiper-slide>
            <swiper-slide slot="swiper_sli">
              <img src="./img/bgc.png" alt="">
            </swiper-slide>
            <swiper-slide slot="swiper_sli">
              <img src="./img/bgc.png" alt="">
            </swiper-slide>
          </Banner>
    </div>
    <div class="toast">
 <img src="./img/组 2@3x.png" alt />
        <p>
          <span>温馨提示:</span>
          {{msg}}
        </p>
    </div>
    <div class="rent">
     <div class="rent_">
<Select></Select>
<TimerPicker></TimerPicker>
<!-- <Test></Test> -->
<!-- <div class="car_info">
        <h4>车辆信息</h4>
        <img src="./img/car.png" alt />
        <p>丰田汉兰达</p>
        <p>
          <span>SUV</span>|
          <span>2.7自动</span>|
          <span>乘坐5人</span>
        </p>
      </div> -->
<div class="select_car">
         <keep-alive><router-link to="/orderPay"><span>提交订单</span>  </router-link></keep-alive>  
     </div>
</div>
<div class="foot">
  <p>服务声明</p>
  <p>Lorem Ipsum</p>
  <!-- <Test></Test> -->
</div>
    </div>
    </div>
  </div>
</template>

<script>
import Header from './../../components/header/header.vue'
import Select from './component/select.vue'
import TimerPicker from './component/timePicker.vue'
// import Test from './component/test.vue'
import Banner from './component/banner.vue'
// import  Test from './component/test'
export default {
  data() {
    return {
msg:"选择上门送/还车需要提前4个工作日小时下单"
    }
  },
  methods: {

  },
  components: {
Header,
Select,
TimerPicker,
// Test,
Banner
  },
  mounted() {
    setInterval(() => {
      var str = this.msg.substring(0, 1);
      var end = this.msg.substring(1);
      this.msg = end + str;
    }, 200);
  }
}
</script>

<style scoped lang='less'>
.body{
  background: #ededed;
}
.content{
  font-size: 0;
  height: calc(~ '100%-98px');
  .banner{
    img{
      width: 100%;
      height: 100%;
    }
  }
  .toast {
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.2rem;
  overflow: hidden;
  padding-left: 0.26rem;
  // margin-bottom:.1rem;
  background-color: #ffffff;
  p {
    float: left;
    width: 4.72rem;
    overflow: hidden;
    height: 100%;
    span {
      margin-right: 0.17rem;
    }
  }
  img {
    float: left;
    margin-right: 0.21rem;
    height: 100%;
  }
}
.rent{
  width: 100%;
  height: 100%;
  background-color: #ededed;
  padding: 0 .34rem;
  padding-bottom: 1.05rem;
  position: relative;
  .foot{
    width: 100%;
    padding: 0 .2rem;
    margin-left: -.2rem;
    position: absolute;
    bottom: 0.08rem;
    p{text-align: center;}
    
    p:nth-child(1){
      font-size: .2rem;
    }
    p:nth-child(2){
      font-size: .08rem;
    }
  }
  .rent_{
    background-color: #fff;
    padding-bottom: .6rem;
    .select_car{
      font-size: 0;
      // width: 100%;
      border-radius: .1rem;
      margin: 1.4rem .2rem .6rem .2rem;
      height: 1rem;
      background-color: #ffdf09;
      text-align: center;
      line-height: 1rem;
      a{
          color: #000000;
          font-size: .32rem;
      }
  }
  }
}
}
</style>
