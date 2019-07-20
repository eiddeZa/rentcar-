<template>
 <ul>
   <li class="fist"><loadding/></li>
   <li v-for="(item,index) in list" :key="index" @tap="fnnn">
     <div class="imgs"><img :src="item.car.carPicture" alt=""></div>
   <li @tap="tag">
     <div class="imgs"><img src="./image/4S53M8ZRB$0Z)@GU28UE40S@2x.png" alt=""></div>
      <div class="mssg">
        <p>{{item.car.carName}}</p>
        <p>
          <span>{{item.car.compartment}}厢</span>
          <span>{{item.car.emissions}}{{item.cartype.type}}</span>
          <span>可乘坐{{item.carseats.seat}}人</span>
        </p>
        <div>
          <p>
            <span>{{item.car.carRentH}}元</span>
            /时租
          </p>
          <p>
            <span>{{item.car.carRentD}}元</span>
            /日租
          </p>
        </div>
      </div>
   </li>
 </ul>
</template>

<script>
import betterscroll from '@/components/betterscroll'
import loadding from '@/components/loadding'
export default {
  data() {
    return {
        list:[]
    }
  },
  methods: {
     tag(){
      this.$router.push({path:"/rentCar",query:{title:"lalala"}})
    }
    
  },
  components: {
// betterscroll?
  loadding
  },
  mounted () {
     this.axios.get("http://172.25.1.221:8080/carRental_war_exploded/carController/findCar").then((res)=>{
       if(res.status==200){
         this.list=res.data;
       }
    })
  }
}
</script>

<style scoped lang="less">
ul{
  background-color: #f6f6f6;
  overflow: auto;
  &::before{
    content: "";
    display: table;
  }
  li{
    font-size: 0;
    padding: 0 .32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background-color: #fff;
    margin-top: .22rem;
    .imgs{
      width: 40%;
      overflow: hidden;
      img{
      text-align: center;
      display: block;
      margin: 0 auto;
      width: 2.2rem;
      height: 2.2rem;
      }
    }
    .mssg{
      width: 60%;
      font-size: .24rem;
      display: flex;
      flex-direction: column;
      &::before{
        content: "";
        display: table;
      }
      p{
        font-size: .26rem;
        color: #333;
        &:nth-of-type(2){
          font-size: .21rem;
          color: #656565;
          border-bottom: .02rem solid #eee;
          padding-bottom: .3rem;
        }
      }
      div{
        font-size: 0;
      overflow: hidden;
      margin-top: 10px;
      p{
        float: left;
        font-size: .21rem;
        color: #666;
        span{
          color: #ffe00c;
        }
        &:nth-of-type(2){
          float: right;
          border: 0;
          padding: 0;
        }
      }
      }
    }
  }
}
</style>
