<template>
<div class="cn_box">
 <div class="ch_btn" @click="chong()">去充值
 </div>
 <div class="moni_chongzhi" v-show="moni_show">
   <div>
     <p><span @click="moni_show=false">X</span>确认支付</p>
     <p>{{jine[$store.state.chooseLi].num}}￥</p>
     <p><span>订单信息</span><span>转账</span></p>
    <p><span>付款方式</span><span>余额宝</span></p>
    <p @click="tiao">确认付款</p>
     </div>
 </div>
</div>
</template>

<script>

export default {
  data() {
    return {
    moni_show:false,
    jine:[
      {num:30,boo:false},
      {num:50,boo:false},
      {num:100,boo:false},
      {num:300,boo:false},
      {num:500,boo:false},
      {num:1000,boo:false}
      ]
    }
  },
  methods: {
  tiao(){
    
    this.moni_show=false;
    this.$router.push('/succ');
     this.$store.commit('add_jine',this.jine[this.$store.state.chooseLi].num)
  },
  chong(){
       this.moni_show=!this.moni_show;
  }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.ch_btn{
    width: 7.06rem;
    height: 1.02rem;
    border-radius: .05rem;
    background: #ffe009;
    color: #666666;
    font-size: .29rem;
    margin: .88rem .22rem .5rem .22rem;
    line-height: 1.02rem;
    text-align: center;
  }
  .moni_chongzhi{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    font-size: .3rem;
    background: rgba(0,0,0,.3);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    div{
      padding: .1rem;
      border-radius: 20px;
      width: 80%;
      height: 3rem;
      margin-bottom: .3rem;
      background: #ffffff;
      p:nth-child(2){
      font-size: .5rem;
      }
      p{
       
        font-size: .3rem;
        overflow: hidden;
        line-height: .5rem;
        text-align: center;
        span:nth-child(1){
          float: left;
        }
        span:nth-child(2){
          float: right;
        }
      }
      
    }
  }
</style>
