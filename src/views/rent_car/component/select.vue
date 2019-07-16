<template>
  <div>
<div class="select">
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
<div class="menu">
    <ul>
           <li class="active"><span >上门</span></li>
           <li><span>到店</span></li>
         </ul>
</div>
</div>
<div class="select">
<van-dropdown-menu>
  <van-dropdown-item v-model="value3" :options="option3" />
  <van-dropdown-item v-model="value4" :options="option4" />
</van-dropdown-menu>
<div class="menu">
    <ul>
           <li class="active"><span >上门</span></li>
           <li><span>到店</span></li>
         </ul>
</div>
</div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      value1: 'city1',
      value2: 'quyu',
      value3:'city1',
      value4:'shop',
      option1: [
        { text: '郑州', value: 'city1' },
        { text: '北京', value: 'city2' },
        { text: '上海', value: 'city3' }
      ],
      option2: [
        { text: '金水区', value:'quyu' },
        { text: '中原区', value: 'quyu2' },
        { text: '郑东新区', value:'quyu3' },
      ],
      option3: [
        { text: '郑州', value: 'city1' },
        { text: '北京', value: 'city2' },
        { text: '上海',value: 'city3' }
      ],
      option4: [
        { text: '郑州花园路店', value: 'shop' },
        { text: '郑州东站店', value: 'shop2' },
        { text: '郑州万达店', value: 'shop3' },
      ]
    }
  },
  mounted(){
    $(function(){
      console.log(1111)
    $(".menu li").click(function() {
        $(this).siblings('li').removeClass('active');  // 删除其兄弟元素的样式
        $(this).addClass('active');                    // 为点击元素添加类名
    });
});
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="less">
.select{
    width: 100%;
    background-color: #fff;
    height: .7rem;
    // line-height: 1.5rem;
    // margin-top:.1rem;
    padding: .21rem;
    position: relative;
    
    .menu{
        font-size: 0;
        float: right;
        width: 1.28rem;
        height: .3rem;
        margin-top: .1rem;
        font-size: .2rem;
       background-color: #ededed;   
                    border-radius: 1rem;
                    text-align: center;
        ul{  
display: flex;
flex-direction: row;
.active{
            span{
              color: #fff;
              background-color:#ffe009;

            }

          }
            li{
               flex:1;
                 display: flex;
                    color:#666666;
                    font-size: .2rem;
                    span{  
                    border-radius: 1rem;
                    flex: 1;
                   width: .64rem;
                    line-height: .3rem;
                    }
        
            }
        }
    }
    /deep/.van-popup--top{
      width: 6.5rem;
       margin-left:  .34rem;
       text-align: center; 
       font-size: .3rem;
   
    //    padding: 0 .1rem; 
    }
    /deep/.van-overlay{
        width: .9rem;
        background-color: #ededed;
    }
   /deep/ .van-dropdown-menu{
       display: block;
       float: left;
           margin-top: .1rem;
      /deep/ .van-dropdown-menu__title::after{
          border: .04rem solid;
          position: absolute;
    right: -12px;
    border-color: transparent transparent currentColor currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: .8;
    content: '';
}
      }
         /deep/.van-dropdown-menu__item:nth-child(1){
             width: .9rem;
             /deep/.van-dropdown-menu__title{
               font-size: .3rem;
               text-align: left;
            //    margin-right: .08rem;
           }
            /deep/ .van-dropdown-menu__title::after{
               top:.3rem;
            }
            
         } 
         /deep/.van-dropdown-menu__item:nth-child(2){
             width: 3.6rem;
             margin-left: .08rem;
             /deep/.van-dropdown-menu__title{
               font-size: .2rem;
               text-align: left;
               color:rgb(153, 153, 153)
           }
           /deep/ .van-dropdown-menu__title::after{
              top:.2rem;
            }
            }
       /deep/.van-dropdown-menu__item{
           float: left;
       }
   }

</style>
