<template>
  <div class="mine_index" >
    <Header txt='我的'>
      <router-link slot="left" class="leftImg" to='/shouye'><img src="./img/iconleft.png"  /></router-link>
      <img src="./img/icon-mes@2x.png" class="rightImg" slot="right" />
    </Header>
    <div class="user_text">
      <div class="icon_user">
        <van-uploader :max-count="1" v-model="fileList">
          <van-button icon="photo" type="primary"></van-button>
        </van-uploader>
      </div>
      <div class="u_txt">
        <span class="user_num">{{user_num | encode}}</span>
        <span class="un_renzheng">{{rezheng_bool}}</span>
      </div>
      <van-button type="primary" @click="showPopup" class="sign" :disabled="shyi">
        <span v-show="sh" class="qian">签到</span>
        <span v-show="shyi" class="qian">已签</span>
        <img src="./img/icon-enter@2x.png" class="icon_sign" />
      </van-button>
      <van-popup v-model="show">
        <img src="./img/mine1.png" class="qiandao" />
      </van-popup>
    </div>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../components/header/header";
import List from "./component/mList";
import Footer from "./component/mine_footer";
export default {
  filters: {
    // 过滤器  加密 用户账号
    encode: function(val) {
      val = val.toString();
      console.log(val);
      let jiami_num = val.substring(0, 4) + "***" + val.substring(7);
      console.log(jiami_num);
      return jiami_num;
    }
  },
  data() {
    return {
      user_num: 18889093456,
      rezheng_bool: "未认证",
      show: false,
      sh: true,
      shyi: false,
      fileList: []
    };
  },
  methods: {
    showPopup() {
      //  console.log(1);
      this.show = true;
      this.sh = false;
      this.shyi = true;
      //加积分
      this.$store.commit("add_jifen", 200);
    }
  },
  components: {
    Header,
    List,
    Footer
  }
};
</script>

<style scoped lang='less'>
.mine_index {
  /deep/.van-button--normal {
    width: 1.6rem;
    height: 1.6rem;
  }
  /deep/.van-button--primary {
    background: url("./img/img@2x.png") no-repeat center center;
    background-size: 100% 100%;
  }
  /deep/.van-icon::before {
    display: none;
  }
  /deep/.van-uploader__preview-image {
    width: 1.6rem;
    height: 1.6rem;
  }
  .user_text {
    font-size: 0.32rem;
    margin: 0.1rem 0.32rem 0 0.32rem;
    overflow: hidden;
    .icon_user {
      float: left;
      border-radius: 50%;
      width: 1.6rem;
      height: 1.6rem;
      overflow: hidden;
      border: 0.02rem solid #ffec09;
    }
    .u_txt {
      display: flex;
      flex-direction: column;
      margin-left: 0.4rem;
      font-size: 0.26rem;
      float: left;
      span {
        margin: 0.2rem 0;
      }
      .un_renzheng {
        width: 1.2rem;
        height: 0.34rem;
        border-radius: 0.1rem;
        color: #ffffff;
        line-height: 0.34rem;
        text-align: center;
        background: #414148;
      }
    }
    .sign {
      display: flex;
      float: right;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      width: 1.76rem;
      height: 0.6rem;
      margin: 0.5rem 0;
      color: #333333;
      background: #ffe009;
      border-radius: 0.3rem;
          border: none;
      .qiandao {
        width: 7.18rem;
      }
      /deep/.van-button__text {
        display: flex;
        .qian {
          display: block;
          width: 1.2rem;
          height: 0.6rem;
          line-height: 0.6rem;
          font-size: 0.3rem;
        }
      }
      .icon_sign {
        width: 0.4rem;
        height: 0.4rem;
        margin: .1rem 0 0 0;
      }
    }
  }
  /deep/.van-popup {
    background: none;
  }
  /deep/.van-popup--center {
    top: 2.63rem;
    left: 0.5rem;
    transform: none;
  }
  /deep/.van-button--primary {
    color: #fff;
    background-color:none; 
    border:none;
  }
}
</style>
