<template>
  <div class="money_show">
     <div class="show_jine">
        <p><span>2401</span>￥</p>
        <p>账户余额</p>
     </div>
     <div class="money_btn">
     <keep-alive><router-link to="/chongzhi"><span>充&nbsp;&nbsp;&nbsp;值</span></router-link></keep-alive>
      <span>兑&nbsp;&nbsp;&nbsp;换</span>
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
 .money_show{
    height: 4.2rem;
    width: 100%;
    font-size: .33rem;
    background:#ffe009;
    overflow:hidden;
    .show_jine{
        width: 80%;
        margin: .55rem auto .3rem auto;
        text-align: center;
        p{
            line-height: .7rem;
        }
        span{
            font-size: .44rem;
            font-weight: 800;
        }
    }
    .money_btn{
        width: 5.17rem;
        margin: 0 auto;
        overflow: hidden;
        
         span:nth-child(2){
             margin-left: 1.67rem;
        }
        a{

        color: #666666;}
        span{
            float: left;
            line-height: .74rem;
            text-align: center;
            width: 1.75rem;
            height: .74rem;
            border-radius: .15rem;
            background:#fff6b6;
            // letter-spacing:.3rem;
        }
        
       
    }
 }
 
</style>
