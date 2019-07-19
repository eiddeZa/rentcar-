<template>
  <div class="curr_city">
    <h2>最近访问的城市</h2>
    <ul>
        <li v-for="(item,index) in hot_list" :key="index" @click="tiao(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
     hot_list:["郑州","北京"]
    }
  },
  methods: {
tiao(item){
       console.log(item);
       this.$store.commit('chosed_c',item);
       this.$router.push("/rentCar");
}
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.curr_city{
    h2{
        font-size: .28rem;
        color: #999999;
        padding: .42rem 0;
    }
    ul{
        display: flex;

        li{
            width: 1.26rem;
            height:.49rem;
            line-height: .49rem;
            text-align: center;
            background: rgb(240,240,240);
            border-radius: .13rem;
            margin-right: .3rem;
              margin-bottom: .2rem;
        }
    }
}
</style>
