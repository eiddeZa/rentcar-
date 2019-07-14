<template>
  <div class="chongzhi">
   <Header txt='在线充值'>
      <img src="./img/iconleft.png"  slot="left" class="leftImg">
   </Header>
   <Banner></Banner>
   <Moneylist></Moneylist>
   <Way></Way>
   <Btn></Btn>
  </div>
</template>

<script>
import Header from '../../components/header/header'  //头部
import Banner from './component/chbanner'    //中间背景
import Moneylist from './component/chjine'    //金额列表
import Way from './component/zhifuchoose'    //付款方式
import Btn from './component/chbtn'    //充值按键
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
   Header,
   Banner,
   Moneylist,
   Way,
   Btn
  }
}
</script>

<style scoped lang='less'>
.chongzhi{
  height: 100%;
  width: 100%;
  background: #f4f4f4;
  // padding-bottom: .5rem;
  
}
</style>
