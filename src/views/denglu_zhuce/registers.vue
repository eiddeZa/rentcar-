<template>
  <div class="register">
    <lChild>
      <!-- 头像 -->
 <van-uploader slot="img_hend" :max-count="1" v-model="fileList" :after-read="afterRead"> 
  <van-button icon="photo" type="primary"></van-button>
</van-uploader>
      <!-- 输入框 -->
      <p slot="input">
        <input v-model="user" type="text" placeholder="请输入11位手机号" maxlength="11" />
      </p>
      <p slot="input">
        <input v-model="authcode" type="text" placeholder="请输入验证码  " maxlength="4" />
        <span id="yanzheng" @click="verify()">获取验证码</span>
      </p>
      <p slot="input" title="密码必须由6-16个英文字母和数字的字符组成">
        <input v-model="password" type="password" placeholder="请输入6-16位密码" />
      </p>
      <!-- 忘记密码&&服务条款文本 -->
      <div slot="btn_div" @click="ldg"></div>
      <p slot="pass">
        <router-link to="/clause">注册即代表同意「平驾分时租车」服务条款和隐私条款</router-link>
      </p>
      <!-- 登录&&注册按钮 -->
      <div class="qq_weixin magin_l" slot="qq_weixin">
        <router-link to="/landing" class="left"></router-link>
      </div>
    </lChild>
  </div>
</template>

<script>
import lChild from "./l_Child.vue";
import { Dialog } from "vant";
import $ from "jquery";
import qs from "qs";
import { Notify } from 'vant';
// Notify({
//   duration: 3000,
//   background: '#09ff49d4'
// });
export default {
  data() {
    return {
      user: "",//手机号
      authcode: "",//验证码
      password: "",//密码
      fileList: [],
      img_code: "",//头像
      count:"",
      timer:null,
      s_code:""//判断验证码
    };
  },
  methods: {
    verify(){
            let re = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/; //手机号
       (this.user = this.user);
      if(!re.test(this.user) || this.user===""){
        console.log(this.user);
      Dialog.alert({
          message: "请输入正确的手机号"
        }).then(() => {
          // on close
        });
        return false;
    }else{
    const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
          $("#yanzheng").text(this.count+" s").addClass("event");
          } else {
          clearInterval(this.timer);
          this.timer = null;
           $("#yanzheng").text("获取验证码").removeClass("event");
          }
        }, 1000)
        }

    console.log(this.user)
          //返回手机，获取验证码
    this.axios
        .post(
          this.ID+"carRental/randomNumberController/randomNumber",
          qs.stringify({
              userPhone: this.user
          }),
          {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then(
          res => {
            this.s_code=res.data;
            console.log(res);
            setTimeout(()=>{
            Notify({
              message:"你的验证码为："+res.data,
              duration: 5000,
              background: '#2fff09'
            });
            },10000)
            console.log(this.s_code);
          },
          err => {
            console.log(err);
          }
        );



    }

    },
    afterRead(file) {
      this.img_code = file.content;
      console.log(this.img_code);
    },
    ldg() {
      (this.user = this.user),
        (this.authcode = this.authcode),
        (this.password = this.password);
        (this.authcode=this.authcode);
      let re = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/; //手机号
      let res = /^[a-z0-9]{6,16}$/; //密码
      if (re.test(this.user)) {
      } else {
        Dialog.alert({
          message: "请输入正确的手机号"
        }).then(() => {
          // on close
        });
        return false;
      }
      if (res.test(this.password)) {
      } else {
        Dialog.alert({
          message: "请输入正确的密码"
        }).then(() => {
          // on close
        });
        return false;
      }
      if(this.authcode!=this.s_code){
        console.log(this.s_code);
           Dialog.alert({
                  message: "请输入正确的验证码！"
                }).then(() => {
                  // on close
                });
                return false;
      }else{
      //axios
      this.axios
        .post(
          this.ID+"carRental/accountController/registered",
          qs.stringify({
              userPhone: this.user,
              accountPassword: this.password,
              upload: this.img_code,
              phoneNum:this.authcode
          }),
          {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then(
          res => {
            console.log(res);
            if(res.data==false){
               Dialog.alert({
                  message: "该账号已被注册！"
                }).then(() => {
                  // on close
                });
                return false;
            }else{
              Notify({
                message: "欢迎你 "+this.user,
                duration:4000,
                background: '#46ff09'
              });
              this.user="",
              this.password="",
              this.img_code="",
              this.authcode=""
              this.$router.push({ path:'/shouye'});
            }
          },
          err => {
            console.log(err);
          }
        );
    }
     }
  },
  components: {
    lChild
  }
};
</script>

<style scoped>
.register {
  height: 100%;
  background-color: #f9fafc;
}
</style>
