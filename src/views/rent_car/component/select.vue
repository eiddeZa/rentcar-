<template>
  <div>
    <div class="select">
      <div class="city">
        <span @click="city" class="ci">{{$store.state.chosedcity}}</span>
        <img src="./../img/icon2.png" alt />
        <span>请选择地址</span>
        <div class="menu">
          <ul>
            <li class="active">
              <span>上门</span>
            </li>
            <li>
              <span>到店</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="shop">
        <span @click="shop">{{messg.tit}}</span>
        <img src="./../img/icon2.png" alt />
        <span>请选择门店</span>
        <div class="menu">
          <ul>
            <li class="active">
              <span>上门</span>
            </li>
            <li>
              <span>到店</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      messg:{tit:null}
    };
  },
  mounted() {
    //.......
    this.messg = JSON.parse(window.localStorage.getItem("mendianinfo")) || {
      tit: "郑州"
    };
    console.log();
    $(function() {
      //自定义tap事件
      $(document).on("touchstart", function(e) {
        var $target = $(e.target);
        if (!$target.hasClass("disable")) $target.data("isMoved", 0);
      });

      $(document).on("touchmove", function(e) {
        var $target = $(e.target);
        if (!$target.hasClass("disable")) $target.data("isMoved", 1);
      });

      $(document).on("touchend", function(e) {
        var $target = $(e.target);
        if (!$target.hasClass("disable") && $target.data("isMoved") == 0)
          $target.trigger("tap");
      });
      console.log(1111);
      $(".menu li").on("tap", function() {
        $(this)
          .siblings("li")
          .removeClass("active"); // 删除其兄弟元素的样式
        $(this).addClass("active"); // 为点击元素添加类名
      });
});
},
  methods: {
    city() {
      console.log(2222);
      this.$router.push("/cityChoose");
    },
    shop() {
      console.log(4444);
      this.$router.push("/mendianxuan");
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.select {
  width: 100%;
  background-color: #fff;
  height: 0.7rem;
  // line-height: 1.5rem;
  // margin-top:.1rem;
  padding: 0.21rem;
  position: relative;
  .city,
  .shop {
    font-size: 0.3rem;
    overflow: hidden;
    margin-bottom: 0.16rem;
    padding: 0.13rem 0;
    span:nth-child(3) {
      font-size: 0.2rem;
      color: #999999;
      margin-top: 0.1rem;
    }
    span {
      float: left;
    }
    img {
      float: left;
      width: 0.6rem;
      height: 0.6rem;
    }
  }

  .menu {
    font-size: 0;
    float: right;
    width: 1.28rem;
    height: 0.3rem;
    margin-top: 0.1rem;
    font-size: 0.2rem;
    background-color: #ededed;
    border-radius: 1rem;
    text-align: center;
    ul {
      display: flex;
      flex-direction: row;
      .active {
        span {
          color: #fff;
          background-color: #ffe009;
        }
      }
      li {
        flex: 1;
        display: flex;
        color: #666666;
        font-size: 0.2rem;
        span {
          border-radius: 1rem;
          flex: 1;
          width: 0.64rem;
          line-height: 0.3rem;
        }
      }
    }
  }
}
</style>
