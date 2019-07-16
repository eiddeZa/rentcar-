<template>
  <div class="header">
       <slot @click="chang"  name="left"></slot>
      <span>{{txt}}</span>
      <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
   props:[
    'txt'
  ],
  methods: {
    
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.header{
    height: .98rem;
    // border-bottom:.01rem solid #ccc;
    line-height: .98rem;
    text-align: center;
    position: relative;
    background: #ffffff;
    font-size: .36rem;
    
     .leftImg{
      width: .44rem;
      height: .44rem;
      position: absolute;
      left: .32rem;
      bottom: .27rem;
    }
    .rightImg{
       width: .48rem;
      height: .48rem;
      position: absolute;
      right: .32rem;
      bottom: .25rem;
    }
  
   
  }
</style>
