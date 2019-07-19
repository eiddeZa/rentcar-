<template>
  <div class="mine_footer">
     <span class="f_box">
         <keep-alive>
         <router-link to="">
        <img src="../img/icon-9@2x.png" class="icon_f">
         <span class="f_text">设置</span>
         </router-link>
         </keep-alive>
     </span>
      <span class="f_box">
           <keep-alive>
           <router-link to="">
         <img src="../img/wendu.png" class="icon_w">
         <span class="f_text">金水</span>
           </router-link>
           </keep-alive>
     </span>
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
.mine_footer{
    font-size: 0;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left:0;
    background: #ffffff;
    width: 100%;
    height: 1rem;
    .f_box:nth-child(2){
        margin-left: 1.33rem;
    }
    .f_box{
      float: left;
      margin-left: .32rem;
    a{
        font-size: .26rem;
        color:#333333;
        text-align: center;
        height: 1rem;
    .icon_f{
         width: .48rem;
         height: .48rem;
    }
    .icon_w{
        width: .84rem;
        height: .38rem;
        margin: .05rem 0;
    }
    .f_text{
        line-height: .5rem;
    }
    }
    }
}
</style>
