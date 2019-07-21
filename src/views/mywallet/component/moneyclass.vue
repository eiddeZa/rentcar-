<template>
  <ul class="fenlei">
    <li><p>评价币</p><p><span>0</span>枚</p></li>
    <li><p>我的积分</p><p><span>{{$store.state.jifen}}</span>积分</p></li>
    <li><p>优惠券</p><p><span>0</span>张</p></li>
    <li><p>信用卡</p><p><span>0</span>张</p></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.fenlei{
 display: flex;
 flex-wrap: wrap;
 li{
     width:3.72rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     font-size: .3rem;
     height: 1.52rem;
     border: 1px solid #f6f6f6;
     background: #ffffff;
     margin: .01rem;
     box-sizing: border-box;
     p{
         line-height: .6rem;
     }
 }
}
</style>
