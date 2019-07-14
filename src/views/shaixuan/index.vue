<template>
  <div class="shai">
    <div>
      <heade txt="车型筛选">
        <img src="./image/返回按钮.png" slot="left" alt class="leftImg" />
      </heade>
      <div></div>
      <div class="navbar">
        <ul>
          <router-link to="/ssum" tag="li">
            <span>全部</span>
          </router-link>
          <router-link to="/ssum" tag="li">
            <span>经济型</span>
            <span></span>
          </router-link>
          <router-link to="/ssum" tag="li">
            <span>商务型</span>
            <span></span>
         </router-link>
          <router-link to="/ssum" tag="li">
            <span>豪华型</span>
            <span></span>
          </router-link>
          <router-link to="/ssum" tag="li">
            <span>筛选</span>
            <span></span>
          </router-link>
        </ul>
      </div>
      <div class="wenxin">
        <img src="./image/组 2@3x.png" alt />
        <p>
          <span>温馨提示:</span>
          {{msg}}
        </p>
      </div>
    </div>
    <div class="oo">
      <van-loading type="spinner" vertical :color="tcolor" v-if="loading">{{count}}</van-loading>
      <betterscroll :scrollTop="scrollTop" :scrollEnd="scrollEnd">
        <keep-alive>
          <router-view />
        </keep-alive>
      </betterscroll>
    </div>
  </div>
</template>

<script>
import heade from "@/components/header/header.vue";
import betterscroll from "@/components/betterscroll";
export default {
  data() {
    return {
      msg: "2018年1月起郑州实行工作日7时至至8日起平驾租车为你开启新的吕航",
      count: "释放刷新",
      isLoading: false,
      loading: false, //保存下拉是否存在
      error: false,
      tcolor: "transparent"
    };
  },
  methods: {
    scrollTop(obj) {
      //  console.log(obj.y);
      if (obj.y > 50) {
        this.loading = true;
      }
    },
    scrollEnd(obj) {
      if (obj.y > 50) {
        this.tcolor = "#1989fa";
        this.count = "正在刷新请稍后......";
        setTimeout(() => {//在此处写axios请求数据
          this.$toast("刷新成功");
          this.loading = false;
          this.tcolor = "transparent";
          this.count = "释放刷新";
        }, 1000);
      }
    }
  },
  components: {
    heade,
    betterscroll
  },
  mounted() {
    setInterval(() => {
      var str = this.msg.substring(0, 1);
      var end = this.msg.substring(1);
      this.msg = end + str;
    }, 400);
  }
};
</script>

<style scoped lang="less">
.shai {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: auto;
  // overflow: hidden;
  .oo {
    flex: 1;
    overflow: auto;
  }
}
.wenxin {
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.2rem;
  overflow: hidden;
  padding-left: 0.96rem;
  background-color: #fffbf0;
  p {
    float: left;
    width: 4.72rem;
    overflow: hidden;
    height: 100%;
    span {
      margin-right: 0.17rem;
    }
  }
  img {
    float: left;
    margin-right: 0.21rem;
    height: 100%;
  }
}
.navbar ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
  height: 0.84rem;
  border: 0.02rem solid #eee;
  padding: 0 0.49rem 0 0.32rem;
  box-shadow: 0 7px 18px -11px #d8d8d8 inset;
  li {
    font-size: 0.26rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 20%;
    color: #333;
    span:nth-of-type(2) {
      height: 0;
      width: 0;
      border: 0.08rem solid transparent;
      border-top-color: #676767;
    }
  }
}
</style>
