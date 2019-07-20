<template>
 <div>
      <Hend>
         <router-link class="leftImg" slot="left" to="/shouye"><img src="./img/icon-come back@2x.png" alt=""></router-link>
         <router-link class="rightImg" slot="right" to="/clause"><img src="./img/icon-help@2x.png" alt=""></router-link>
     </Hend>
     <div class="form_box">
         <div class="img_box">
             <!-- 头像 -->
             <slot name="img_hend"></slot>
         </div>
        <div class="input-box">
            <slot name="input"></slot>
            <!-- 输入框 -->
        </div>
        <div class="btn_box">
           <slot name="btn_div"></slot>
        </div>
        <div class="pass_box">
            <slot name="pass"></slot>
            <!-- 忘记密码&&服务条款文本 -->
        </div>
             <slot name="qq_weixin"></slot>  
             <!-- 登录&&注册按钮 -->
     </div>
 </div>
</template>

<script>
import Hend from "../../components/header/header.vue"
export default {
 data() {
 return {
    fileList: []
 }
 },
 methods: {
    
 },
 components: {
Hend
 }
}
</script>

<style scoped lang="less">
    @r:100rem;
.form_box{
    background-color: #f9fafc;
    overflow:hidden;
    .img_box{
        width:241/@r;
        height:241/@r;
        background-color: #fff;
        margin:29/@r auto;
        border-radius:50%;
        box-shadow:#f1f3f2 0 0 15/@r 8/@r;
        overflow: hidden;
        background: url("./img/Start_icon@2x.png") no-repeat center center;
        background-size:100% 100%; 
         border: 2/@r solid #ffec09; 
    }
    .input-box{
        margin-top:90/@r;
        padding: 0 70/@r;
        p{
            height:76/@r;
            border-bottom:1/@r solid #e8e8e8;
            text-align: center;
            font-size:0; 
            line-height: 90/@r;
            margin-top: 47/@r;
            position: relative;
            input{
                font-size: 26/@r;
                width:88%;
                text-align: center;
                height:50/@r;
                background:#f9fafc;
            }
            input::-webkit-input-placeholder {
                    /* placeholder颜色  */
                    color: #999999;
                    /* placeholder字体大小  */
                    font-size: 26/@r;
                    /* placeholder位置  */
                    text-align: center;
                }
        }
    }
    .btn_box{
        margin-top: 90/@r;
        padding-bottom:20/@r;
        div{
            width:120/@r;
            height:120/@r;
            margin: auto;
            border-radius:50%;
            background:url("./img/icon-submit@2x.png") no-repeat;
            background-size:120/@r 120/@r; 
            box-shadow:#e5e6e6 0 10/@r 10/@r 0;
        }
    }
    .pass_box{
        margin-top:83/@r; 
        p{     
            font-size:0;
            text-align: center;
            a{
                font-size: 24/@r;
                color: #666666;
            }
        }
    }
    .qq_weixin{
        margin-top: 150/@r;
        overflow: hidden;
        p:nth-child(1){
            margin-left: 74/@r; 
            height:90/@r;
            width: 90/@r;
            background: url("./img/icon-QQ@2x.png")no-repeat;
            background-size:90/@r 90/@r; 
            float: left;
        }
         p:nth-child(2){
            float: left;
            margin-left: 93/@r;
            height:90/@r;
            width: 90/@r;
            background: url("./img/icon-WX@2x.png")no-repeat;
            background-size:90/@r 90/@r; 
         }
         a{
             display: inline-block;
             float: right;
             width:305/@r;
             height:90/@r;
             background: url("./img/icon-Jump@2x.png")no-repeat;
             background-size:305/@r 90/@r; 
         }
    }
    .magin_l{
        margin-top:30/@r !important;
        .left{
            float: left;
            background: url("./img/icon-Jump-1@2x.png")no-repeat;
            background-size:305/@r 90/@r; 
        }
    }
    #yanzheng{
        font-size:24/@r;
        padding:0 22/@r;
        background-color: #ffe009;
        border-radius:32/@r; 
        line-height: 60/@r;
        position: absolute;
        top:2/@r;
        right:10/@r;
        z-index: 100;
        width:164/@r;
        text-align: center;
    }

}
 /deep/.van-uploader__upload{
    border:1/@r dashed #969799; 
    i{
    color:#ffe009;
    font-size:120/@r;
    }
}
/deep/.van-button--normal{
      width:241/@r;
      height:241/@r;   
      border-radius:50%;
}
/deep/.van-button--primary{
    background: url("./img/Start_icon@2x.png") no-repeat center center;
    background-size:100% 100%;
    border:none; 
}
/deep/.van-icon::before{
    display: none;
}
/deep/.van-uploader__preview-image{
     width:241/@r;
     height:241/@r; 
}
.event{
    pointer-events:none;
}
</style>
