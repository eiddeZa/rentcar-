<template>
  <div class="hotCity">
     <h2>热门城市</h2>
    <ul class="hotli">
        <li v-for="(item,index) in hotlist" :key="index" @click="chosed_city(index)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
       hotlist:[]
    }
  },
  mounted(){
   axios({
     url:'../../../../static/json/city.json',
     method:'get',
   }).then((res)=>{
     this.hotlist = res.data.hotcity;
   }).catch((err)=>{
     console.log(err)
   })
  },
  methods: {
  chosed_city(index){
   var cityname = this.hotlist[index].name; 
   console.log(cityname);
   if(cityname!='郑州')
      {
       Toast(cityname+'未开括新店');
      }else{
     console.log(item2);
     this.$store.commit('chosed_c',cityname);
    this.$router.push("/rentCar");
      }
    
  }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.hotCity{
     h2{
        font-size: .28rem;
        color:rgb(61,65,63);
        padding: .48rem 0 .27rem 0;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
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
        // li:nth-child(3){
        //     margin-right: 0;
        // }
    }
}
</style>
