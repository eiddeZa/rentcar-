<template>
  <div class="z_choose">
    <van-radio-group v-model="radio">
  <van-cell-group>
 <van-cell clickable @click="radio = '1'">
          <span class="ch_box"><img src="../img/applyfor.png"><span>支付宝</span></span>
      <van-radio slot="right-icon" name="1"/>
    </van-cell>
    <van-cell clickable @click="radio = '2'">
     <span class="ch_box"><img src="../img/wechat.png"><span>微信支付</span></span>
      <van-radio slot="right-icon" name="2" class="van-radio" />
    </van-cell>
  </van-cell-group>
</van-radio-group>

<P class="ch_xieyi">点击充值即表示你已同意<router-link to="/clause">《平价租车协议》</router-link></P>
  </div>
</template>

<script>
import { RadioGroup, Radio } from 'vant';
import Vue from 'vue';
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
  data() {
    return {
   radio: '1'
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.z_choose{
  .ch_xieyi{
    font-size: .26rem;
    margin-left:.55rem;
    color: #999999;
    a{
      color:#084dc0;
    }
  }
  .van-radio-group{
    .van-cell-group {
      background: #f4f4f4;
      .van-cell{
  background: #f4f4f4;
  font-size: .28rem;
  .ch_box{
    display: flex;
    font-size: .28rem;
    img{
      width: .44rem;
      height: .44rem;
    }
  }
      }
  
    }
  }
}
</style>
