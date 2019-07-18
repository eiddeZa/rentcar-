<template>
  <div class="c_search">
    <img src="../img/search.png">
    <input type="text" placeholder="中文/拼音/首字母拼写" @blur="searchcity">
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
       his_city:this.$store.state.historycity
    }
  },
  methods: {
  searchcity(){
 
      // this.his_city.push("$('input').val()");
      // console.log(this.his_city);
      // this.$store.commit('chosed_c',this.his_city); 
  }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.c_search{
    width: 6.86rem;
    height: .48rem;
    background: #ebebeb;
    border-radius: .2rem;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    img{
        margin-top: .09rem;
        width: .45rem;
        height: .45rem;
    }
    input::-webkit-input-placeholder{
            color:#b9b9b9;
            font-size: .22rem;
        }
    input{
        flex: 1;
         background: #ebebeb;
         margin-right: .2rem;
    }
}
</style>
