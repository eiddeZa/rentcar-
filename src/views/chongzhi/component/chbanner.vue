<template>
 <div class="c_banner">
     <div class="text">
         <h2>新手福利</h2>
         <p>在线充值限时特惠</p>
         <span>查看详情</span>
     </div>
     <div class="img">
         <img src="../img/bj.png" alt="">
     </div>
   </div>
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
.c_banner{
    height: 4.2rem;
    width: 100%;
    background:rgb(58,163,255);
    overflow:hidden;
    .text{
        float: left;
    h2{
        font-size: .73rem;
        color:rgb(255,255,255);
    }
    p{
        font-size: .27rem;
        color:rgb(157,209,255);
    }
    span{
        display: block;
        width: 1.98rem;
        height: .5rem;
        border:.01rem solid rgb(181,181,181);
        background: #ffffff;
        border-radius: .08rem;
        font-size: .2rem;
        line-height: .5rem;
        text-align: center;
    }
    }
    .img{
        float: left;
        img{
            width: 4.27rem;
            height: 4.27rem;
        }
    }
  }
</style>
