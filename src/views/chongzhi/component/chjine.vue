<template>
  <div class='chjine'>
  <ul class="ch_money">
    <li v-for="(item,index) in jine" :key="index">{{item}}元</li>
    <li>其他金额</li>
    
  </ul>
  <p class="daozhang"><span class="dao_text">实际到账：<span class="money">{{jine[0]}}.00元</span></span></p>
</div>

</template>

<script>
export default {
  data() {
    return {
      jine:['30','50','100','300','500']
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.chjine{
    font-size: 0;
    margin: .2rem .32rem;
      overflow: hidden;
.ch_money{
    
    overflow: hidden;
    li{
        float: left;
        font-size: .26rem;
        width: 1.97rem;
        height: .97rem;
        border: .02rem solid #e6e6e6;
        background: #ffffff;
        text-align: center;
        line-height: .97rem;
        margin: 0 .15rem  .27rem .15rem;
    }
  
}
  .daozhang{
        font-size: .28rem;
        margin-top: .2rem;
        overflow: hidden;
        .dao_text{
            float:right;
            margin-right: .15rem;
            .money{
                color: rgb(255,224,9);
            }
        }
    }
}
</style>
