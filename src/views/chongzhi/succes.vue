<template>
  <div class="sucss_">
       <Header txt="充值成功">
     <router-link slot="left" class="leftImg" to='/wallet'><img src="./img/iconleft.png" ></router-link>
   </Header> 
   <div class="conent">
       <img src="./img/icon3.png" />
        <p>成功充值{{jine[$store.state.chooseLi].num}}.00元</p>
       
    </div>
        <router-link to="/rentCar"><button>立即租车</button></router-link>
  </div>
</template>

<script>
import Header from '../../components/header/header';
export default {
  data() {
    return {
 jine:[
      {num:30,boo:true},
      {num:50,boo:false},
      {num:100,boo:false},
      {num:300,boo:false},
      {num:500,boo:false},
      {num:1000,boo:false}
      ]
    }
  },
  methods: {

  },
  components: {
Header 
  }
}
</script>

<style scoped lang="less">
.sucss_{
    font-size: .5rem;
     height: 100%;
  width: 100%;
  background: #eeeeee;
  padding-bottom: .8rem;
    
   .conent{
          margin: .32rem auto;
          width:6.86rem; 
          border-radius:.05rem;
          background: #ffffff;
         img{
             width: 4.03rem;
             height: 3.89rem;
            
            margin: 0 auto;
         }
         p{
             font-size: .36rem;
             text-align: center;
             font-weight: 200;
             color: rgb(51, 51, 51);
             line-height: .5rem;
             padding-bottom: .5rem;
         }
         
    }
    a{

     color: #666666;
     button{
     width: 6.84rem;
     height:.88rem;
     font-size: .36rem;
     font-weight: 500;
     border-radius: .05rem;
     margin-top: .5rem;
     border: none;
     outline: none;
     margin-left: .32rem;
     text-align: center;
     background:#ffe009;
   }

   }
 }

</style>
