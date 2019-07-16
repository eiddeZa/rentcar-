<template>
  <div>
    <div class="nullOrder">
      <Header txt="订单信息">
        <!-- <span >dhdhddd</span> -->
        <router-link  slot="left" class="leftImg" to=""> <img src="./img/back.png" /></router-link>
        <img src="" slot="right" class="rightImg" alt />
      </Header>
    </div>
    <div class="content">
      <img src="./img/pic.png" alt="">
      <p class="one">暂无消息</p>
      <p class="two">觉得无聊快来车型选购看看吧</p>
      </div>
  </div>
</template>

<script>
import Header from "./../../components/header/header.vue";
export default {
  data() {
    return {

    };
  },
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="less">
.nullOrder{
    // background: #f3f3f3;
    border-bottom: 2px solid #000000;
    font-size: .17rem;
    line-height: .43rem;
    position: relative;
  }
  .content{
    text-align: center;
    img{
    display: block;
    margin-top: 2.2rem;
    transform: translate(-50%);
    margin-left: 50%;
    // height: 3.5rem;
    }
      color: rgb(80, 201, 255);
      .one{
        top: 7.5rem;
      font-size: .36rem;
      margin-top: -.6rem;
      }
      .two{
        margin-top: .25rem;
        font-size: .32rem;
      }
    }
</style>
