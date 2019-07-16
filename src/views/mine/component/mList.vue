<template>
  <ul class="mine_list">
   <li> <keep-alive><router-link to="/wallet"><img src="../img/icon-1@2x.png" class="icon_s"><span class="mine_t">我的钱包</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-2@2x.png" class="icon_s"><span class="mine_t">我的行程</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-3@2x.png" class="icon_s"><span class="mine_t">我的收藏</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-4@2x.png" class="icon_s"><span class="mine_t">车型列表</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-5@2x.png" class="icon_s"><span class="mine_t">门店列表</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-6@2x.png" class="icon_s"><span class="mine_t">评价列表</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-7@2x.png" class="icon_s"><span class="mine_t">邀请好友</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
   <li> <keep-alive><router-link to="/"><img src="../img/icon-8@2x.png" class="icon_s"><span class="mine_t">客服中心</span><img src="../img/icon-Check in@2x.png" class="icon_arrow"></router-link></keep-alive></li> 
  </ul>
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
.mine_list{
    margin: 0 .32rem;
    padding-bottom: 2.2rem;
    li{
         font-size: 0;
         height: 1.1rem;
         display:flex;
         align-items: center;
        a{
            font-size: .32rem;
            color:#333333;
            overflow: hidden;
            width: 100%;
            .icon_s{
                float: left;
                width: .48rem;
                height: .48rem;
            }
            .mine_t{
                float: left;
                margin-left: .4rem;
            }
            .icon_arrow{
                float: right;
                width: .44rem;
                height: .44rem;
            }
        }
    }
}
</style>
