<template>
  <div class="searchList">
    <van-index-bar>
      <van-index-anchor index="A" />
      <div class="lis_box">
      <van-cell title="安阳" />
      <van-cell title="鞍山" />
      </div>
      <van-index-anchor index="B" />
      <div class="lis_box">
      <van-cell title="北京" />
      <van-cell title="北海" />
      <van-cell title="北洲" />
      </div>
        <van-index-anchor index="C" />
      <div class="lis_box">
      <van-cell title="重庆" />
      <van-cell title="成都" />
      <van-cell title="长宁" />
      </div>
      <van-index-anchor index="D" />
      <div class="lis_box">
      <van-cell title="邓州" />
      <van-cell title="邓县" />
      </div>
      
    </van-index-bar>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
// import {getCity} from '../../../../static/js/getCity.js'
export default {
  data() {
    return {
      city:''
    };
  },
  mounted(){
  //  this._getCurrentCity();
    // axios.get('http://39.97.33.178/api/cityList').then((response)=>{
    //  console.log(response);
    // }).catch((err)=>{console.log(err)});
  
  },
  methods: {
    
  },
  components: {}
};
</script>

<style scoped lang='less'>
.searchList {
  padding: 0.15rem 0.32rem 0.65rem 0.32rem;
  margin: 0.24rem 0.32rem;
  background: #ffffff;
  border-radius: 0.1rem;
  .lis_box{
    display: flex;
  }
  /deep/.van-index-anchor {
    font-size: 0.28rem;
    padding: 0.2rem 0 0.26rem 0.14rem;
  }
  /deep/.van-cell {
    font-size: 0.28rem;
    font-family:myFirstFont!important;
    width: 28.5%;
    height: 0.49rem;
    background: rgb(240, 240, 240);
    border-radius: 0.13rem;
    margin-right: 0.3rem;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
  }
  /deep/.van-cell__title{
    display: flex;
    font-family:myFirstFont;
    justify-content: center;
    align-items: center;
  }
  /deep/.van-index-bar__sidebar{
     top:65%;
     right: .38rem;
  }
  /deep/.van-index-bar__index{
    font-size: .16rem;
    line-height: .24rem;
        font-family: -webkit-body;
  }
}
</style>
