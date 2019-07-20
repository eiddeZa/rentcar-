<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Rem from "../static/js/rem.js"
export default {
  name: 'App',
  mounted(){
    Rem.setrem();
    window.onresize=Rem.setrem;
  },components:{
  
  }
}
</script>

<style>
@import url("../static/css/reset.css");
#app{
  height: 100%;
}
</style>
