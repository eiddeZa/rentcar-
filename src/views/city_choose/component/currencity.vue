<template>
  <div class="curr_city">
    <h2>最近访问的城市</h2>
    <ul>
        <li>北京</li>
        <li>上海</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted(){
   
  },
  methods: {

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
