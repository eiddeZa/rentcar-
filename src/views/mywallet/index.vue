<template>
  <div class="myWallet">
<Header txt='我的钱包'>
    <img src="./img/iconleft.png" slot="left" class="leftImg">
</Header>
<Showmoney></Showmoney>
  </div>
</template>

<script>
import Header from '../../components/header/header'
import Showmoney from './component/moneyshow'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Header,
Showmoney
  }
}
</script>

<style scoped lang='less'>

</style>
