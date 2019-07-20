<template>
 <div class="landing_box">
     <lChild>
       <img slot="img_hend" :src="url" alt="">
           <!-- 输入框 -->
           <p slot="input"><input @blur="portrait()" type="text" v-model="user" placeholder="请输入账号、手机号、邮箱" maxlength="11"></p>
           <p slot="input"><input type="password" v-model="password" placeholder="请输入正确密码"></p>
            <div slot="btn_div" @click="login_l() "></div>
           <!-- 忘记密码&&服务条款文本 -->
           <p slot="pass"><router-link to="">忘记密码</router-link></p>
            <!-- 登录&&注册按钮 -->
               <div class="qq_weixin"  slot="qq_weixin">
                <p></p>
                <p></p>
                <router-link to="/register"></router-link>  
               </div>
     </lChild>
 </div>
</template>

<script>
import lChild from "./l_Child.vue"
import qs from "qs"
import { Notify } from 'vant';
import { Dialog } from "vant";
export default {
 data() {
 return {
     user:"",
     password:"",
     url:""
 }
 },
 methods: {
portrait(){
  (this.user = this.user)

this.axios
        .post(
         window.ID+"carRental_war_exploded/accountController/findHeadPortraitByPhone",
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
            console.log(res);
            this.url=res.data;
          },
          err => {
            console.log(err);
          }
        );



}
,
    login_l(){
 (this.user = this.user),
  (this.password = this.password);
 this.axios
        .post(
          window.ID+"carRental_war_exploded/accountController/login",
          qs.stringify({
              userPhone: this.user,
              accountPassword: this.password
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
                message: "账号或密码错误！"
                }).then(() => {
                    // on close
                });
                return false;
            }else{
                //登陆成功
                 Dialog.alert({
                message: "登陆成功"
                }).then(() => {
                    // on close
                });
               this.$store.commit("updateid",res.data)
               this.user="";
               this.password="";
               this.url="";
              this.$router.push({ path:'/shouye'});
               return false;
            }
           
          },
          err => {
            console.log(err);
          }
        );


    }
 },
 components: {
lChild
 }
}
</script>

<style scoped>
.landing_box{
   background-color: #f9fafc;
    height: 100%;
}

</style>
