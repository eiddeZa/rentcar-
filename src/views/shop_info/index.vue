<template>
  <div>
    <div class="shop">
      <Header txt="门店详情">
        <!-- <span >dhdhddd</span> -->
        <img src="./img/back.png" slot="left" @click="ggo" class="leftImg" alt />
        <img src slot="right" class="rightImg" alt />
      </Header>
    </div>
    <div class="content">
      <div class="shop_info">
        <h4>
          郑州金水租车店
          <span>管辖区</span>
        </h4>
        <p>
          09:00-19:00
          <span>恭候您的光临</span>
        </p>
      </div>
      <div class="rate">
        <van-rate v-model="value" :size="20" :count="5" allow-half  readonly/>
        <span>{{value*20}}评分</span>
        <keep-alive>
          <router-link to="">
            <span>136</span>人评价
            <van-icon name="arrow" />
          </router-link>
        </keep-alive>
      </div>
      <div class="images">
          <ul>
              <li><img src="./img/img-1@2x.png" alt=""></li>
              <li><img src="./img/img-2@2x.png" alt=""></li>
              <li><img src="./img/img-3@2x.png" alt=""></li>
          </ul>

      </div>
      <div class="location">
          <img src="./img/icon-position 拷贝@2x.png" alt="">
          <span>金水区未来路交叉口（兰德中心150米路西）</span>

      </div>
      <div class="phone">
          <div class="left">
              <img src="./img/icon-Customer service@2x.png" alt="">
              <span>400-09876564</span>
          </div>
          <div class="right">
              <img src="./img/icon-phone@2x.png" alt="">
              <span>12367545678</span>
          </div>
      </div>
      <div class="comment">
          <div class="top">
              <img src="./img/icon-position1@2x.png" alt="">
              <span>评论</span>
          </div>
          <div class="user_info">
              <span>156********89</span>
              <span>最新</span>
              <span>服务态度</span>
              <van-rate v-model="value" :size="10" :count="5" allow-half readonly/>
              <p>情况不错，租车方便快捷，如果能有租车到家的话就更好了。那样更方便</p>
          </div>
      </div>
     <div class="more">
         <keep-alive><router-link to=""> <span>查看更多评价</span> <van-icon name="arrow" /></router-link></keep-alive>
     </div>
     <div class="rent">
         <keep-alive><router-link to="/ssum"><span>立即选车</span>  </router-link></keep-alive>  
     </div>
      
    </div>
  </div>
</template>

<script>
import Header from "./../../components/header/header.vue";
export default {
  data() {
    return {
      value: 3,
    //    show: false,
    //   index: 0,
    //   images: [
    //     'https://img.yzcdn.cn/1.jpg',
    //     'https://img.yzcdn.cn/2.jpg'
    //   ]
    };
  },
  methods: {
    //    onChange(index) {
    //   this.index = index;
    // }
    ggo(){
      this.$router.go(-1);
    }
  },
  components: {
    Header
  },
  mounted(){
  }
};
</script>

<style scoped lang="less">
.content {
  margin-top: 0.5rem;
  padding: 0 0.32rem;
  .shop_info {
    padding: 0.2rem 0.24rem;
    border-bottom: 1px solid #cccccc;
    h4 {
      font-size: 0.32rem;
      color: rgb(51, 51, 51);
    }
    p {
      font-size: 0.22rem;
      color: rgb(153, 153, 153);
    }
  }
  .rate {
    font-size: 0;
    padding: 0 0.24rem;
    margin-top: 0.15rem;
    /deep/.van-rate {
      height: 0.45rem;
      width: 2.5rem;
      float: left;
      overflow: hidden;
    }
    /deep/.van-icon-star {
font-size: .4rem;
    }
    span {
      line-height: 0.4rem;
      margin-left: 0.3rem;
      margin-top: 0.15rem;
      font-size: 0.3rem;
      color: #ffdf09;
    }
    a {
      font-size: 0.25rem;
      color: #999999;
      overflow: hidden;
      float: right;
      span {
        font-size: 0.25rem;
        color: #999999;
      }
      /deep/.van-icon-arrow {
        vertical-align: middle;
        margin-left: 0.15rem;
      }
    }
  }
  .images{
      padding: .2rem 0 .30rem 0;
      height: 1.8rem;
      box-sizing: border-box;
      border-bottom: 1px solid #cccccc;
      ul{
          li{
              float: left;
              margin-left: .12rem;
              img{
                  width: 2.08rem;
                  height: 1.2rem;
              }
          }
      }
  }
  .location{
      padding: .37rem .3rem;
      border-bottom: 1px solid #cccccc;
      font-size: .26rem;
      color: rgb(153, 153, 153);
      img{
          float: left;
          margin-right: .15rem;
           width: .44rem;
          height: .44rem;
      }
  }
  .phone{
      display: flex;
      flex-direction: row;
       font-size: .26rem;
      color: rgb(153, 153, 153);
    
      img{
          float: left;
          width: .44rem;
          height: .44rem;
      }
      span{
          margin-left: .2rem;
      }
      .left{
           padding: .35rem .2rem;
          flex:1;
          border-right: 1px solid #cccccc;
      }
      .right{
          padding: .35rem .2rem;
          flex: 1;
      }
  }
  .comment{
      padding:.25rem .2rem;
      margin-top: .5rem;
       border-bottom: 1px solid #cccccc;
      .top{
          overflow: hidden;
          img{
              float: left;
              width: .44rem;
              height: .44rem;
          }
          font-size: .3rem;
      } 
      .user_info{
          font-size: 0;
          font-size: .26rem;
          color: #999999;

          span{
              float: left;
          }
          p{
              font-size: .26rem;
              color:rgb(102, 102, 102);
              margin-top:.3rem;
          }
          span:nth-child(2){
              width: .82rem;
              height: .28rem;
              background-color: #ffe009;
              font-size: .22rem;
              color: #ffffff;
              margin-left: .32rem;
              text-align: center;
              margin-top:.05rem; 
          }
          span:nth-child(3){
              margin-left: .8rem;
              margin-right: .20rem;
          }
      }
  }
  .more{
      font-size: 0;
      margin-top: .2rem;
      padding: 0 .2rem;
      a{font-size: .24rem;
          span{
              
              color: #ffdf09;
              
          }
          /deep/.van-icon-arrow {
              float: right;
              color: #999999;
        vertical-align: middle;
        margin-left: 0.15rem;
      }
      }
  }
  .rent{
      font-size: 0;
      margin-top: 1rem;
      margin-bottom: .6rem;
      width: 100%;
      height: 1rem;
      background-color: #ffdf09;
      text-align: center;
      line-height: 1rem;
      a{
          color: #000000;
          font-size: .32rem;
      }
  }
}
</style>
