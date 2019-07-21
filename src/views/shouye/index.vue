<template>
  <div class="main">
    <heade txt="平价租车">
      <router-link slot="left" to="/mine" class="leftImg"><img src="./image/矢量智能对象@3x.png" alt /></router-link>
      <router-link slot="right" to="/clause" class="rightImg"><img src="./image/矢量智能对象@3x(1).png"  alt /></router-link>
    </heade>
    <div class="map">
     <el-amap 
        vid="amap"  
        :zoom="zoom"  
        :plugin="plugin" 
        class="amap-demo" 
        :center="center"
    >  
    </el-amap>
    </div>
    <div>
      <div class="foot">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img :src="item.carPicture" alt="">
            <div>
              <p>{{item.carName}}</p>
              <p>日租价:<span>&yen;{{item.carRentD}}</span></p>
            </div>
          </li>
        </ul>
        <p class="quanbu">
          <router-link tag="span" to="/shaixuan">查看全部车型</router-link>
        </p>
        <p class="wy" @click="meng=true">我要租车</p>
      </div>
    </div>
    <div class="tanchu" v-show="meng">
      <ul>
        <li @click="showren()">时间/日期</li>
        <li @click="meng=false">顺风车</li>
        <li @click="meng=false">取消</li>
      </ul>
    </div>
  </div>
</template>
<script>
VueAMap.initAMapApiLoader({
  key: '15f277aa6953ade0bcf272f3ddba8e91',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation'],
  uiVersion: '1.0.11' // 版本号
})
import heade from '@/components/header/header.vue'
export default {
  data() {
    let self = this;
    return {
      meng:false,//控制蒙版显示与否
      center: [113.682442, 34.784461],
      zoom: 17,
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [   //一些工具插件
        {
          pName: 'Geolocation',   //定位
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                 self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];        //设置坐标
                  self.loaded = true;                         //load
                  self.$nextTick();                           //页面渲染好后
                }
              })
            }
          }
        },
        {
          pName: 'ToolBar',  //工具栏
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'OverView',  //鹰眼
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        },
        {
          pName: 'MapType',  //地图类型
          defaultType: 0,
          events: {
            init(instance) {
              // console.log(instance);
            }
          }
        }
      ],
      list:[]
    }
  },
  methods: {
    showren(){
      this.meng=false;
      this.$router.push("/rentCar");
    }
  },
  components:{
    heade
  },
  mounted(){
    if(window.localStorage.getItem("shouyelist")==null){
        this.axios.get("http://172.25.5.219:8080/carRental_war_exploded/carController/find4Car").then((res)=>{
          if(res.status==200){
            this.list=res.data;
            window.localStorage.setItem("shouyelist",JSON.stringify(res.data))
        }
      })
    }else{
      this.list=JSON.parse(window.localStorage.getItem("shouyelist"));
    }
  },
}
</script>

<style scoped lang="less">
.main {
  position: relative;
  .tanchu{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.7);
    z-index: 9999;
    bottom: 0;
    ul{
      position: absolute;
      width: 100%;
      background-color: #fff;
      bottom: 0;
      border-radius: .2rem .2rem 0 0;
      padding: 0 4px;
      li{
        height: .94rem;
        line-height: .94rem;
        text-align: center;
        font-size: .27rem;
        color: #666;
        border-bottom: 1px solid #666;
        &:last-of-type{
          border-color: transparent;
        }
      }
    }
  }
  .foot{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      .wy{
        height: 1.02rem;
        line-height: 1.02rem;
        background-color: #ffe009;
        color: #666;
        font-size: .28rem;
        text-align: center;
      }
      .quanbu{
        height: .98rem;
        text-align: center;
        line-height: .98rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;
        span{
          font-size: .23rem;
          color: #ffe009;
          border: .02rem solid #ffe009;
          border-radius: .49rem;
          height: .48rem;
          width: 2.14rem;
          display: flex;
          align-items: center;
          background: url('./image/下拉.png') no-repeat 1.81rem center; 
          padding-left: .3rem;
          background-size:.11rem .20rem;         
        }
      }
      ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        margin-top: .4rem;
        li{
          font-size: .21rem;
          padding-bottom: .16rem;
          display: flex;
          width: 50%;
          flex-direction: row;
          align-items: center;
          height: 1rem;
          text-align: center;
          justify-content: center;
          color: #666;
          box-sizing: border-box;
          &:first-of-type{
            border-bottom: .01rem solid #ccc;
            border-right: .01rem solid #ccc;
          }
          &:last-of-type{
            border-top: .01rem solid #ccc;
          }
          &:nth-of-type(3){
            border-right: .01rem solid #ccc;
          }
          div>p:last-of-type{
            font-size: .18rem;
          }
          div{
            p{text-align: left;}
          }
          img{
            width: 1.28rem;
            height: .57rem;
            margin-right: .32rem;
          }
        }
      }
  }
  display: flex;
  flex-direction: column;
  // height: 100%;
  overflow: auto;
  flex-wrap: nowrap;
  .map {
    height: 7.18rem;
    width: 100%;
    box-shadow: 0 14px 20px -16px #d2d2d2 inset;
    position: relative;
    .meng{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.7);
    }
  }
}
</style>
