<template>
  <div class="myWallet">
<Header txt='我的钱包'>
     <router-link slot="left" class="leftImg" to='/shouye'><img src="./img/iconleft.png"></router-link>
</Header>
<Showmoney></Showmoney>
<Moneyclass></Moneyclass>
<img src="./img/icon2.png" class="icon_wall">
  </div>
</template>

<script>
import Header from '../../components/header/header'
import Showmoney from './component/moneyshow'
import Moneyclass from './component/moneyclass'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Header,
Showmoney,
Moneyclass
  }
}
</script>

<style scoped lang='less'>
.myWallet{
  height: 100%;
  width: 100%;
  background: #eeeeee;
  padding-bottom: .8rem;
 .icon_wall{
   width: 4.8rem;
   height: 4.8rem;
   margin: .5rem auto;
  
 }
}
</style>
