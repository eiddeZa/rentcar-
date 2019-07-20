<template>
 <div class="box">
    <Hend txt="评价">
         <router-link class="leftImg" slot="left" to="/orderDetail"><img src="./img/left@2.png" alt=""></router-link>
         <router-link class="rightImg" slot="right" to=""><img src="./img/zu@2.png" alt=""></router-link>
         <img @click="shangtop()" class="leftImg" slot="left" src="./img/left@2.png" alt=""> 
         <router-link class="rightImg" slot="right" to="/clause"><img src="./img/zu@2.png" alt=""></router-link>
    </Hend>  
    <div class="ev_item">
        <div class="white">
        <div class="grade">
            <img src="./img/yonghu@2.png" alt="">
        </div>
        <div class="xing">
            <van-rate @change="onchange(value)" allow-half gutter="10px" size="0.36rem" v-model="value" :count="5" void-color="#ffe009" />
            <p class="ping_jia"><i class="ai_img"></i><span class="p_text">一般</span></p>
        </div>
         <div class="label">
             <p>请选择标签</p>
             <ul>
                 <li @click="color(i)" :key="i" v-for="(item,i) in arr_btn">{{item}}</li>
             </ul>
         </div>
         <div class="text_int">
            <textarea placeholder="您如果有其他的意见或建议，请放心填写"> </textarea>
          </div> 
          <p class="btn_ti"><button @click="sub()">提&nbsp;交</button></p>
        </div> 
    </div>   
   
 </div>
</template>

<script>
var arr_btn=[
    "服务态度好",
    "车型好",
    "设备齐全",
    "办理迅速",
    "服务态度好",
    "有耐心"
];
import $ from 'jquery'
import Hend from "../../components/header/header.vue"
import qs from "qs"
export default {
 data() {
 return {
    value: 4,
    arr_btn,
    star:4,
    arr_btn2:[],
    textbox:"",
    time:""
 }
 },
 methods: {
     color(i){
         $("li").eq(i).toggleClass("border_act");
     },
     onchange(a){
         this.star=a;
         if(a<=1){
             $(".p_text").text("差评");
         }else if(a>=1.5&&a<=4.5){
             $(".p_text").text("一般");
         }else if(a==5){
            $(".p_text").text("好评");
         }
     },
     shangtop(){
          this.$router.go(-1);
     },
     sub(){

        this.arr_btn2=[];
         this.textbox=$("textarea").val();
        console.log(this.star);
        console.log(this.textbox);
        let li=$("li");
        for(let i=0;i<li.length;i++){
            if(li[i].className=="border_act"){
                this.arr_btn2.push($("li").eq(i).text());
            }
        }
        console.log(this.arr_btn2);

this.axios
        .post(
          "http://172.25.1.43:8080/accountController/userEvaluate",
          qs.stringify({
             indentId:2019071913,
             starlevel:this.star,
             lable:this.arr_btn2,
             opinion:this.textbox,
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
          },
          err => {
            console.log(err);
          }
        );

     }
 },
 components: {
    Hend
 },mounted(){
   
 }
}
</script>

<style scoped lang="less">
@r:100rem;
.header{
    border-bottom:.01rem solid #ccc;
}
.box{
    height:100%;
     background:#ededed;
}
.border_act{
 color:#ffe009;
 border:1/@r solid #ffe009 !important;
}
.ev_item{
    padding: 0 30/@r;
     background:#ededed;
     padding-bottom: 50/@r;
    .white{
        background: #fff;
        border-radius: 20/@r;
    .grade{
        height:325/@r;
        background: #fff;
        overflow: hidden;
        img{
            width:70%;
            margin:15/@r auto;
        }
    }
    .xing{
        background: #fff;
         text-align: center;
         font-size: 0;
         .ping_jia{
             font-size: 36/@r;
             margin:25/@r 0;
             line-height: 40/@r;
              color: #ffe009;
             i{
                 display: inline-block;
                 width:40/@r;
                 height: 40/@r;
                 margin-right:20/@r;
                 background: url(./img/yiban.png)no-repeat center center;
                 background-size:40/@r 40/@r; 
             }
         }
    }
    .label{
        p{
            font-size: 28/@r;
            margin-left:30/@r;
            color: #666666;
        }
        ul{
            margin-top: 11/@r;
            overflow: hidden;
            li{
                margin:14/@r 70/@r;
                width: 205/@r;
                float: left;
                border-radius:60/@r; 
                font-size: 28/@r;
                padding: 10/@r 0px;
                text-align: center;
                border: 1/@r solid #cccccc;
            }
        }
        
    }
    .text_int{
        text-align: center;
        margin-top: 40/@r;
        textarea{
            padding:10/@r;
            width:600/@r;
            font-size:22/@r;
            height:188/@r;
            border: 1/@r #666666 solid;
            border-radius: 15/@r;
            resize: none;
        }
         textarea::-webkit-input-placeholder{
             font-size:22/@r;
             color: #6666665c;
         }
    }
    .btn_ti{
        text-align: center;
        margin-top: 14/@r;
        font-size: 0;
        padding-bottom: 28/@r;
        button{
            font-size: 36/@r;
            padding: 20/@r 90/@r;
            color: #ffffff;
            background: #ffe009;
            border-radius:15/@r; 
        } 
    }
   }
}
</style>
