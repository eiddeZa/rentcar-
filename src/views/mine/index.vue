<template>
  <div class="mine_index">
    <Header txt=''>
      <img src="./img/iconleft.png" alt class="leftImg" slot="left" />
      <img src="./img/icon-mes@2x.png" alt class="rightImg" slot="right" />
    </Header>
    <div class="user_text">
      <img src="./img/img@2x.png" class="icon_user" />
      <div class="u_txt">
        <span class="user_num">{{user_num}}</span>
        <span class="un_renzheng">{{rezheng_bool}}</span>
      </div>
      <span class="sign">
        签到
        <img src="./img/icon-enter@2x.png" class="icon_sign"/>
      </span>
    </div>
     <List></List>
     <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/header/header";
import List from './component/mList'
import Footer from './component/mine_footer'
export default {
    filters: {
      // 过滤器  加密 用户账号
      encode(val){
          // console.log(val , typeof val.toString());
          val = val.toString;
          // let jiami_num = val.substr(0,4);
          let jiami_num = val;
          // console.log(jiami_num);
          return val;
    }},
    data() {
    return {
      user_num:18889093456,
      rezheng_bool:'未认证'
    };
  },
  methods: {},
  components: {
    Header,
    List,
    Footer
  }
};
</script>

<style scoped lang='less'>
.mine_index {
  .user_text{
    font-size: .32rem;
    margin: .1rem .32rem 0 .32rem;
    overflow: hidden;
    .icon_user{
      float: left;
    }
    .u_txt{
     display: flex;
     flex-direction: column;
     margin-left: .4rem;
            font-size: .26rem;
            float: left;
     span{
       margin: .2rem 0;
     }
     .un_renzheng{
       width: 1.2rem;
       height: .34rem;
       border-radius:.1rem;
       color:#ffffff;
       line-height: .34rem;
       text-align: center;
       background: #414148;
     }
    }
    .icon_user{
      width: 1.6rem;
      height: 1.6rem;
    }
    .sign{
      display: flex;
      float:right;
      justify-content: center;
      align-items: center;
      font-size: .3rem;
      width: 1.76rem;
      height: .6rem;
      margin: .5rem 0;
      background: #ffe009;
      border-radius: .3rem;
    .icon_sign{
        width: .44rem;
        height: .44rem;
        margin-left: .15rem;
      }
    }
  }
}
</style>
