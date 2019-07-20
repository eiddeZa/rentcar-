<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <!-- slides -->
      <slot name="swiper_sli"></slot>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true,
          loop:true,
          effect:'cube',
            autoplay: {
        disableOnInteraction: false
    }
        }
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>
<style  lang="less">
  .swiper-pagination-fraction, .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets{
    position: absolute;
    bottom:0rem;
    right:0rem;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #ffffff;
  }
</style>


