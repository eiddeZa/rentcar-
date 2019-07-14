<template>
 <div class="register">
     <lChild>
          <!-- 输入框 -->
           <p slot="input"><input v-model="user" type="text" placeholder="请输入11位手机号" maxlength="11"></p>
           <p slot="input"><input v-model="authcode" type="text" placeholder="请输入验证码  " maxlength="4"><span id="yanzheng">获取验证码</span></p>
           <p slot="input" title="密码必须由6-16个英文字母和数字的字符组成"><input v-model="password" type="password" placeholder="请输入6-16位密码"></p>
           <!-- 忘记密码&&服务条款文本 -->
           <div slot="btn_div" @click="ldg"></div>
           <p slot="pass"><router-link to="">注册即代表同意「平驾分时租车」服务条款和隐私条款</router-link></p>
            <!-- 登录&&注册按钮 -->
              <div class="qq_weixin magin_l" slot="qq_weixin">
                <router-link to="/landing" class="left"></router-link> 
              </div>
     </lChild>
 </div>
</template>

<script>
import lChild from "./l_Child.vue";
import { Dialog } from 'vant';
import $ from 'jquery';
export default {
 data() {
 return {
   user:"",
   authcode:"",
   password:""
 }
 },
 methods: {
  ldg(){
    this.user=this.user,
   this.authcode=this.authcode,
   this.password=this.password;
   let re=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;//手机号
   let res=/^[a-z0-9]{6,16}$/;//密码
   if(re.test(this.user)){
       
    }else{
       Dialog.alert({
        message: '请输入正确的手机号'
      }).then(() => {
      // on close
    });
    return false;
    }
 if(res.test(this.password)){
       
    }else{
       Dialog.alert({
        message: '请输入正确的密码'
      }).then(() => {
      // on close
    });
     return false;
    }

  }
 },
 components: {
   lChild
 }
}
</script>

<style scoped>
.register{
    height: 100%;
    background-color: #f9fafc;
}
</style>
