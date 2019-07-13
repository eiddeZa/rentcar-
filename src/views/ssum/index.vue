<template>
 <ul>
   <li>
     <div class="imgs"><img src="./image/4S53M8ZRB$0Z)@GU28UE40S@2x.png" alt=""></div>
      <div class="mssg">
        <p>雪佛兰科鲁兹</p>
        <p>
          <span>三厢</span>
          <span>1.5自动</span>
          <span>可乘坐5人</span>
        </p>
        <div>
          <p>
            <span>69元</span>
            /时租
          </p>
          <p>
            <span>269元</span>
            /日租
          </p>
        </div>
      </div>
   </li>
   <li>
     <div class="imgs"><img src="./image/4S53M8ZRB$0Z)@GU28UE40S@2x.png" alt=""></div>
      <div class="mssg">
        <p>雪佛兰科鲁兹</p>
        <p>
          <span>三厢</span>
          <span>1.5自动</span>
          <span>可乘坐5人</span>
        </p>
        <div>
          <p>
            <span>69元</span>
            /时租
          </p>
          <p>
            <span>269元</span>
            /日租
          </p>
        </div>
      </div>
   </li>
   <li>
     <div class="imgs"><img src="./image/4S53M8ZRB$0Z)@GU28UE40S@2x.png" alt=""></div>
      <div class="mssg">
        <p>雪佛兰科鲁兹</p>
        <p>
          <span>三厢</span>
          <span>1.5自动</span>
          <span>可乘坐5人</span>
        </p>
        <div>
          <p>
            <span>69元</span>
            /时租
          </p>
          <p>
            <span>269元</span>
            /日租
          </p>
        </div>
      </div>
   </li>
 </ul>
</template>

<script>
import betterscroll from '@/components/betterscroll'
export default {
  data() {
    return {
        
    }
  },
  methods: {
    
  },
  components: {
// betterscroll?
  },
  mounted () {
    // var scroll=new BS(this.$refs.movie_body,{
    //   tap:true,
    //   probeType:1
    // })
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
