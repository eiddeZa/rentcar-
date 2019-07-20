<template>
  <div>
<div class="successPay">
      <Header txt="付款结果">
        <!-- <span >dhdhddd</span> -->
        <router-link  slot="left" class="leftImg" to="/orderDetail"><img src="./img/back.png" alt=""> </router-link>
        <!-- <img src slot="right" class="rightImg" alt /> -->
        
      </Header>
    </div>
    <div class="ssss">
    <img src="./img/success.png" alt="">
    <p>付款成功</p>
    
    </div>
    <div class="see">
        <router-link to="/orderDetail"><span>查看订单</span></router-link>
    </div>
  </div>
</template>

<script>
import Header from './../../components/header/header'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Header
  }
}
</script>

<style scoped lang="less">
.right{
    width: .5rem;
    height: .5rem;
}
.see{
    a{
        display: block;
    margin: .4rem .2rem;
    padding: .2rem 0;
    background: #3aa3ff;
    color: #ffffff;
    font-size: .4rem;
    text-align: center;
    margin-top:.3rem;
    border-radius: .1rem;
}
}
.ssss{
    text-align: center;
    position: relative;
    overflow: hidden; 
    img{
        width: 2rem;
        height: 2rem;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%)
    }
    p{
        margin-top: 3rem;
        font-size: .5rem;
    }
}
</style>
