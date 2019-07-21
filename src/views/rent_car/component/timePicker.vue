<template>
  <div>
    <!-- <van-button type="primary" @click="showpopup">按钮</van-button> -->
    <div class="date">
      <span ref="startTime" @click="showDatePicker('startTime')">{{startTime |formatDate}}</span>
      <img src="./../img/line1.jpg" alt />
      <span ref="endTime" @click="showDatePicker('endTime')">{{endTime |formatDate}}</span>
      <p class="deration">
        <span>{{tianshu}}</span>
      </p>
    </div>
    <div class="time">
      <p class="left_">
        <span>{{s_week}}</span>
        <span>{{s_h_m |formatTime }}</span>
      </p>
      <p class="right_">
        <span>{{f_week}}</span>
        <span>{{f_h_m |formatTime}}</span>
      </p>
    </div>
    <van-popup v-model="isPopShow" position="bottom">
      <!-- 开始时间 -->
      <van-datetime-picker
        @cancel="cancelPicker"
        @confirm="confirmPicker"
        v-if="datePicker == 'startTime'"
        v-model="startTime"
        type="datetime"
        :formatter="formatter"
        :min-date="currentTime"
      />
      <!-- 结束时间 -->
      <van-datetime-picker
        @cancel="cancelPicker"
        @confirm="confirmPicker"
        v-if="datePicker == 'endTime'"
        v-model="endTime"
        type="datetime"
        :formatter="formatter"
        :min-date="startTime"
      />
    </van-popup>
  </div>
</template>

<script>
import $ from "jquery";
var padDate = function(val) {
  return val < 10 ? "0" + val : val;
};
export default {
  data() {
    return {
      currentTime: new Date(), // 开始时间不能超过当前时间
      startTime: new Date(), // 开始时间
      date: null,
      endTime: null, // 结束时间
      datePicker: "", // 用于判断哪个选择器的显示与隐藏
      isPopShow: false, // 弹出层隐藏与显示
      tianshu: "0天",
      s_week: null,
      f_week: null,
      s_h_m: null,
      f_h_m: null,
      flag: true
    };
  },
  filters: {
    formatDate: function(val) {
      if (val) {
        var year = val.getFullYear();
        var month = padDate(val.getMonth() + 1);
        var day = padDate(val.getDate());
        var hour = padDate(val.getHours());
        var minutes = padDate(val.getMinutes());
        var second = padDate(val.getSeconds());
        return month + "月" + day + "日";
      }
    },
    formatTime: function(val) {
      if (val) {
        var year = val.getFullYear();
        var month = padDate(val.getMonth() + 1);
        var day = padDate(val.getDate());
        var hour = padDate(val.getHours());
        var minutes = padDate(val.getMinutes());
        var second = padDate(val.getSeconds());
        return hour + ":" + minutes;
      }
    }
  },
  methods: {
    showDatePicker(picker) {
      //弹出层并显示时间选择器
      this.isPopShow = true;
      this.datePicker = picker;
    },
    cancelPicker() {
      // 选择器取消按钮点击事件
      this.isPopShow = false;
      this.datePicker = "";
    },
    confirmPicker(value) {
      //确定按钮，时间格式化并显示在页面上
      //   if(this.flag)
      //  {this.date = value;
      //  this.s_h_m=value;}
      //  this.f_h_m=value;
      //   this.endTime= value;
      this.a = value;
      var date = value;
      var m = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var min = date.getMinutes();
      var s = date.getSeconds();
      if (m >= 1 && m <= 9) {
        m = "0" + m;
      }
      if (d >= 0 && d <= 9) {
        d = "0" + d;
      }
      var timer = m + "月" + d + "日" + h + ":" + min;
      this.$refs[this.datePicker].innerHTML = timer.substr(0, 6);
      // this.date=timer;
      this.isPopShow = false;
      this.datePicker = "";
      this.flag = !this.flag;
      console.log(value);
      let f_date = this.endTime;
      let s_date = this.startTime;
      let f_time = f_date.getTime();
      let s_time = s_date.getTime();
      console.log((f_time-s_time)/1000/60/60/24)
      let day = Math.ceil((f_time - s_time) / 1000 / 60 / 60 / 24);
      this.tianshu = day + "天";
      if(day<0){
        this.tianshu='0天'
      }
      console.log(this.tianshu)
      console.log(s_date);
      console.log(day);
      this.$store.commit("day", this.tianshu);
      this.$store.commit("getTime", this.startTime);
  
    this.s_h_m=this.startTime;
    this.f_h_m=this.endTime;
      console.log(this.startTime);
      console.log(this.endTime);
      console.log(this.startTime.getDay());
      console.log(this.startTime.getHours());
      switch (this.startTime.getDay()) {
        case 0:
          this.s_week = "周日";
          break;
        case 1:
          this.s_week = "周一";
          break;
        case 2:
          this.s_week = "周二";
          break;
        case 3:
          this.s_week = "周三";
          break;
        case 4:
          this.s_week = "周四";
          break;
        case 5:
          this.s_week = "周五";
          break;
        case 6:
          this.s_week = "周六";
          break;
      }
      switch (this.endTime.getDay()) {
        case 0:
          this.f_week = "周日";
          break;
        case 1:
          this.f_week = "周一";
          break;
        case 2:
          this.f_week = "周二";
          break;
        case 3:
          this.f_week = "周三";
          break;
        case 4:
          this.f_week = "周四";
          break;
        case 5:
          this.f_week = "周五";
          break;
        case 6:
          this.f_week = "周六";
          break;
      }
      console.log(this.date.getDay());
    },
    formatter(type, value) {
      // 格式化选择器日期
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    }
  },
  components: {},
  mounted() {
    this.date = new Date();
    this.endTime = new Date();
    if (this.date.getDay() == 0) this.week = "周日";

    if (this.date.getDay() == 1) this.week = "周一";

    if (this.date.getDay() == 2) this.week = "周二";

    if (this.date.getDay() == 3) this.week = "周三";

    if (this.date.getDay() == 4) this.week = "周四";

    if (this.date.getDay() == 5) this.week = "周五";

    if (this.date.getDay() == 6) this.week = "周六";
    this.f_week = this.week;
    this.s_week = this.week;
    // this.s_h_m = new Date().getHours()+':'+new Date().getMinutes();
    this.s_h_m=new Date();
    this.f_h_m = new Date();
  }
};
</script>

<style scoped lang="less">
.date {
  width: 100%;
  background-color: #fff;
  padding: 0.3rem;
  height: 1rem;
  line-height: 1rem;
  overflow: hidden;
  margin-top: 1.5rem;

  .deration {
    span {
      font-size: 0.3rem;
      color: #ffe009;
      margin-left: 1.45rem;
      margin-top: -0.7rem;
    }
  }
  span {
    font-size: 0.3rem;
    float: left;
  }
  img {
    //   height: .2rem;
    display: block;
    width: 2rem;
    height: 0.12rem;
    margin-top: 0.4rem;
    float: left;

    margin-left: 0.8rem;
  }
  span:nth-child(3) {
    float: right;
  }
}
.time {
  height: 0.4rem;
  background-color: #fff;
  font-size: 0.2rem;
  color: #999999;
  box-sizing: border-box;
  padding: 0.08rem 0.3rem;
  overflow: hidden;
  span {
    margin-right: 0.1rem;
  }
  .left_ {
    float: left;
  }
  .right_ {
    float: right;
  }
}
</style>
