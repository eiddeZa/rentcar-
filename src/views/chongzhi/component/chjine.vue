<template>
  <div class='chjine'>
  <ul class="ch_money">
    <li v-for="(item,index) in jine" :key="index" @click="choosed(index)" :class='{active:item.boo}'>{{item.num}}元</li>
    <li @click="otherMoney" :class="{active:othershow}">其他金额</li>
  </ul>
  <div class="other_money" v-show="othershow">
    <label for="other"> 请输入其他金额：</label>
   <input type="text" name="other" id="other">
  </div>
  <p class="daozhang"><span class="dao_text">实际到账：<span class="money">{{jine[$store.state.chooseLi].num}}.00元</span></span></p>
</div>

</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      moshow:false,
      othershow:false,
      jine:[
      {num:30,boo:false},
      {num:50,boo:false},
      {num:100,boo:false},
      {num:300,boo:false},
      {num:500,boo:false}
      ]
    }
  },
  methods: {
choosed(index){
  this.othershow=false;
  for(let i in this.jine){
    this.jine[i].boo=false;
  }
 this.jine[index].boo=true;
  this.$store.commit('chosedli',index)
},

  otherMoney(){

    for(let i in this.jine){
    this.jine[i].boo=false;
  }
  $('.money').html='0';
    this.othershow = !this.othershow;
  }
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
    .active{
      background: none;
      color:#ffe008;
      border: .02rem solid #ffe008;
    }
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
.other_money{
  display: flex;
  flex-direction: column;
  font-size: .4rem;
  width: 100%;
  height:1.5rem;
  
  input{
    width: 5rem;
    height: .8rem;
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
