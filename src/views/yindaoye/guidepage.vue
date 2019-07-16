<template>
 <div class="box">
   <van-swipe style="height:100%;" vertical  :loop="false" indicator-color="#ffe009">
        <van-swipe-item><img src="./img/introduction1.jpg" alt=""><router-link to=""><span class="skip"></span></router-link></van-swipe-item>
        <van-swipe-item><img src="./img/introduction2.png" alt=""><router-link to=""><span class="skip"></span></router-link></van-swipe-item>
        <van-swipe-item><img src="./img/introduction3.jpg" alt=""><router-link to=""><span class="enterinto "></span></router-link></van-swipe-item>
    </van-swipe>
 </div>
</template>

<script>

export default {
 data() {
 return {
    
 }
 },
 methods: {

 },
 components: {

 }
}
</script>

<style scoped lang="less">
@r:100rem;
.box{
    width:100%;
    height:100%;
}
.skip{
    display:inline-block;
    width:90/@r;
    height:46/@r;
    background: url("./img/skip.png") no-repeat center center;
    background-size:90/@r 46/@r; 
    position: absolute;
    top:40/@r;
    right:30/@r;
}
.enterinto{
    display: inline-block;
    width:300/@r;
    height: 70/@r;
    background: url("./img/kaiqi.png") no-repeat center center;
    background-size:300/@r 70/@r; 
    position: absolute;
    left:226/@r;
    top:1036/@r;
}

</style>
