<template>
 <div class="landing_box">
     <lChild>
           <!-- 输入框 -->
           <p slot="input"><input type="text" placeholder="请输入账号、手机号、邮箱"></p>
           <p slot="input"><input type="password" placeholder="请输入正确密码"></p>
            <div slot="btn_div"></div>
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
export default {
 data() {
 return {

 }
 },
 methods: {

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
