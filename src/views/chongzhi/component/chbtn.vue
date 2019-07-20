<template>
<div class="cn_box">
  <div class="pay">
  <van-action-sheet v-model="moni_show" title="确认充值">
     <p><span>订单信息</span><span>转账</span></p>
   <p><span>支付宝账号：</span><span>{{userPhone}}</span></p>
    <p><span>付款方式</span><span>余额宝></span></p>
     <p><span>需付款：</span><span>{{jine[$store.state.chooseLi].num}}￥</span></p>
    <p @click="tiao">确认付款</p>
    </van-action-sheet>
     </div> 

 <div class="ch_btn" @click="chong()">去充值
 </div>
 <div class="moni_chongzhi" v-show="moni_show">
   
 </div>
</div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
    moni_show:false,
    userPhone:18937625809,
    jinee:0,
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
     this.axios
        .post(
          "http://172.25.1.220:8080/carRental_war_exploded/accountController/updateAccountMoneyByPhone",
          qs.stringify({
              userPhone: this.userPhone,
              accountMoney:this.jine[this.$store.state.chooseLi].num
          }),
          {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then(
          res => {
            console.log(res);
            // this.url=res.data;
            this.jinee=res.data;
            console.log(res.data);
             this.$store.commit('add_jine',this.jinee);
          },
          err => {
            console.log(err);
          }
        );
       

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
  .pay{
    /deep/.van-popup--bottom{
    padding: .1rem .2rem;
    font-size: 0;
p:nth-child(4){
  color: #000000;
  border-bottom: none;
  margin-bottom: .6rem;
}
p:nth-child(5){
  width: 100%;
  text-align: center;
  height: 1rem;
 color: #ffffff;
 border-radius: .1rem;
  background: #3aa3ff;
  line-height: 1rem;
}
    
      p{
        font-size: .3rem;
        overflow: hidden;
        line-height: .6rem;
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
