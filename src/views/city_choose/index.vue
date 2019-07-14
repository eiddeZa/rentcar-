<template>
  <div class="city_index">
     <Header txt='城市'>
       <img src="./img/iconleft.png" slot="left" class="leftImg">
     </Header>
     <div class="ci_search">
     <Citysearch></Citysearch>
     </div>
     <div class="citys">
     <Address></Address>
     <Currenthos></Currenthos>
     <Hotcity></Hotcity>
     </div>
      <Searchlist></Searchlist>
  </div>
</template>

<script>
import Header from '../../components/header/header';
import Citysearch from './component/citysearch'
import Address from './component/currentadd'
import Currenthos from './component/currencity'
import Hotcity from './component/hotcity'
import Searchlist from './component/searchlist'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
  Header ,Citysearch,
  Address,Currenthos,
  Hotcity,Searchlist
  }
}
</script>

<style scoped lang="less">
.city_index{
    font-size: .26rem;
    background: #ededed;
    padding-bottom: .5rem;
    .ci_search{
      background: #ffffff;
      padding-bottom: .23rem;
    }
    .citys{
      padding: 0 .32rem .65rem .32rem;
      margin: .32rem;
      background: #ffffff;
      border-radius: .1rem;
    }
}


</style>
