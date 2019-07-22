<template>
  <div class="searchList">
     <!-- {{$store.state.choosedcity}}; -->
    <van-index-bar>
       <ul class="lis_box" v-for="(item,index) in citys" :key="index">
      <van-index-anchor :index="item.id" />
      <li v-for="(item2,index) in item.citys" :key="index" @click="chosed_city(item2)">
        {{item2}}
        </li>
      </ul>
      
    </van-index-bar>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import {Toast} from 'vant';
export default {
  data() {
    return {
      citys:[]
    }
  },
  mounted(){
     axios({
     url:'../../../../static/json/city.json',
     method:'get',
   }).then((res)=>{
     this.citys = res.data.city;
    //  console.log(this.citys);
   }).catch((err)=>{
     console.log(err)
   })
  },
  methods: {
    chosed_city(item2){
      console.log(item2);
      if(item2!='郑州'){
      Toast(item2+'还未开扩新店')
      return;
   }else{
    this.$store.commit('chosed_c',item2);
       this.$router.push("/rentCar");
   }
  

      
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.searchList {
  padding: 0.15rem 0.32rem 0.65rem 0.32rem;
  margin: 0.24rem 0.32rem;
  background: #ffffff;
  border-radius: 0.1rem;
  .lis_box{
    display: flex;
     flex-wrap: wrap;
     div{
       width: 100%;
     }
     li{  
            width:28.5%;
            height:.49rem;
            line-height: .49rem;
            text-align: center;
            background: rgb(240,240,240);
            border-radius: .13rem;
            margin-right: .3rem;
            margin-bottom: .2rem;
            box-sizing: border-box;
        }
  }
  /deep/.van-index-anchor {
    font-size: 0.28rem;
    padding: 0.2rem 0 0.26rem 0.14rem;
  }
  /deep/.van-index-bar__sidebar{
     top:60%;
     right: .38rem;
  }
  /deep/.van-index-bar__index{
    font-size: .25rem;
    line-height: .4rem;
    font-family: -webkit-body;
  }
}
</style>
