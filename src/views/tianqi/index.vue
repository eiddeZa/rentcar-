<template>
  <div class="tianqi">
    <Header txt='郑州'>
      <router-link slot="left" class="leftImg" to='/mine'><img src="./images/iconleft.png"  /></router-link>
      <img class="rightImg" slot="right" src="./images/圆角矩形 1 拷贝@2x.png"  />
    </Header>
    <p class="tianqi_show">
      <img src="./images/椭圆 1@2x.png" alt="">
      <span>29℃</span>
    </p>
    <div class="kongqi">
      <p><img src="./images/形状 1@2x.png" class="icon_yezi">空气质量 <span class="zhiliang">优</span><span class="zhuangtai">晴</span><img src="./images/形状 2@2x.png" class="shui"><span>降水量  0</span></p>
      <ul>
        <li><img src="./images/feng@2x.png"><span class="two_span">东南风</span><span>3级</span></li>
        <li><img src="./images/humidity@2x.png"><span class="two_span">湿度</span><span>66%</span></li>
        <li><img src="./images/qiya@2x.png"><span class="two_span">气压</span><span>999mb</span></li>
        <li><img src="./images/rentiganying@2x.png"><span class="two_span">体感</span><span>舒适</span></li>
      </ul>
     
    </div>
    <ul class="tian">
      <li><span>今天</span><span>晴</span><span><img src="./images/椭圆 27@2x.png"></span><span>28/22℃</span></li>
      <li><span>明天</span><span>多云</span><span><img src="./images/圆角矩形 3@2x.png"></span><span>26/21℃</span></li>
      <li><span>后天</span><span>小雨</span><span><img src="./images/圆角矩形 4 拷贝@2x.png"></span><span>24/18℃</span></li>
    </ul>
     <div class="weilai"><span>未来15天的预报</span><img src="./images/组 1@2x.png" alt=""></div>
  </div>
</template>

<script>
import Header from "../../components/header/header";
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Header
  }
}
</script>

<style scoped lang="less">
.tianqi{
  background:url("./images/bj.jpg") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  .header{
      background:none;
      color: #ffffff;
  }
  .tianqi_show{
    font-size: 1.42rem;
    color:#ffffff;
    margin:0 auto auto 0;
    text-align: center;
    width: 100%;
    img{
      border-radius: 50%;
      margin: 0 auto;
    }
  }
  .kongqi{
   padding: .3rem .42rem;
    font-size: .3rem;
    color: #ffffff;
    p{
     display: flex;
     height: 1.14rem;
     align-items: center;
     border-bottom: 1px solid #63aee4;
     .icon_yezi{
       margin-right: .15rem;
       margin-left: .3rem;
     }
     .zhiliang{
       font-size: .3rem;
       margin: 0 .48rem 0 .2rem;
     }
     .zhuangtai{
       font-size: .6rem;
       margin-right: .66rem;
     }
     .shui{
       margin-right: .16rem;
     }
    }
    img{
      width: .4rem;
      height: .4rem;
    }
    ul{
  
      display: flex;
      li{
        padding: .1rem 0;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .two_span{
        font-size: .24rem;
        color: #c6e0f4;
        margin: .1rem 0 .2rem 0;
      }
      }
    }
  }
  .tian{
     font-size: 0;
     padding: .1rem .52rem;
    li{
      display: flex;
       font-size: .3rem;
       height: .85rem;
       align-items: center;
       color:#ffffff;
       border-bottom: 1px solid #63aee4;
      span{
        flex: 1;
        display: flex;
        justify-content: center;
        img{
          width: .55rem;
          height: .55rem;
        }
      }
    }
  }
 .weilai{
   color: #e4d323;
    font-size: .28rem;
    padding: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: .55rem;
      height: .55rem;
    }
 }
}
</style>
