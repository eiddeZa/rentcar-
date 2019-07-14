<template>
  <div class="hotCity">
     <h2>热门城市</h2>
    <ul>
        <li>北京</li>
        <li>上海</li>
        <li>上海</li>
        <li>天津</li>
        <li>重庆</li>
        <li>长沙</li>
        <li>西安</li>
        <li>西安</li>
        <li>西安</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.hotCity{
     h2{
        font-size: .28rem;
        color:rgb(61,65,63);
        padding: .48rem 0 .27rem 0;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        li{ 
            
            width:28.5%;
            height:.49rem;
            line-height: .49rem;
            text-align: center;
            background: rgb(240,240,240);
            border-radius: .13rem;
            margin-right: .3rem;
            margin-bottom: .2rem;
            box-sizing: border-box;
        }
        // li:nth-child(3){
        //     margin-right: 0;
        // }
    }
}
</style>
