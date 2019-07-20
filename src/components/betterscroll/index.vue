<template>
  <div class="scrolls" ref="movie_body">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"betterscroll",
  data() {
    return {
        startY:0
    }
  },
  props: {
    scrollTop:{
      type:Function,
      default:function(){}
    },
    scrollEnd:{
      type:Function,
      default:function(){}
    },
    probeTypes:{
      type:Number,
      default:1
    }
  },
  methods: {
    toscrolltop(y){
      
      this.scroll.scrollTo(0,y);
      // console.log(this.scroll);
    }
  },
  components: {
  },
  mounted () {
    var scroll=new BS(this.$refs.movie_body,{
      tap:true,
      probeType:this.probeTypes,
    })
    this.scroll=scroll;
    scroll.on("scroll",(obj)=>{
        console.log('000');
        this.scrollTop(obj);

    }),
    scroll.on("touchEnd",(obj)=>{
      this.scrollEnd(obj);
  })
  }
}
</script>

<style scoped>
.scrolls{
  height: 100%;
}
</style>
