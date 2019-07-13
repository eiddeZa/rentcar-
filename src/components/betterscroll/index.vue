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
      probeType:1
    })
    this.scroll=scroll;
    scroll.on("scroll",(obj)=>{
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
