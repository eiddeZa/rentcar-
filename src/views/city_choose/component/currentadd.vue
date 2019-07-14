<template>
  <div class="curr_address">
   <div class="add_box"><span>当前定位</span>
   <img src="../img/add.png">
   <van-dropdown-menu class="address_ri">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
 value1: 0,
      value2: 'a',
      option1: [
        { text: '郑州', value: 0 }
        // { text: '上海', value: 1 },
        // { text: '广东', value: 2 }
      ],
      option2: [
        { text: '金水区', value: 'a' },
        { text: '中原区', value: 'b' },
        { text: '二七区', value: 'c' },
      ]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.curr_address{
    .add_box{
        padding-top: .2rem;
        height: .9rem;
        font-size: 0;
        color:#666666;
        display: flex;
        align-items: center;
        border-bottom: .01rem solid #eeeeee;
        span{
             
             font-size: .3rem;
        }
        img{
            margin-left: 2.3rem;
            width: .44rem;
            height: .44rem;
        }
        .address_ri{
            width: 2.15rem;
        }
        /deep/[class*=van-hairline]::after
        {
           border:none;
        }
        /deep/.van-dropdown-menu__title{
           font-size: .26rem;
        }
        /deep/.van-cell{
          font-size: .26rem;
        }
        /deep/.van-popup--top {
      top: 0rem;
      left: .32rem;
       width: 6.86rem;
    }
    }
}
</style>
