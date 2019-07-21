<template>
  <div class="mendian">
      <heade txt="门店选择">
        <router-link to="/shouye" slot="left" class="leftImg"> <img src="./image/返回按钮.png"  alt/></router-link>
      </heade>
      <div class="serch">
          <input type="text" placeholder="输入地址寻找周边门店">
      </div>
      <div class="main">
        <div class="bans">
          <betterscroll ref="aaa">
          <div>
            <ul ref="men">
              <li v-for="(item,index) in list" :class="{active:index==0}"  @tap="chang(index)" :key="index">{{item.title}}</li>
            </ul>
          </div>
          </betterscroll>
        </div>
        <div class="section">
          <betterscroll ref="sc" :scrollTop="scrollTop" :probeTypes="2">
            <div class="container">
                <div v-if="iss"><loadding/></div>
                <div class="andmine" v-for="(item,inde) in list" :key="inde">
                  <h4>{{item.title}}</h4>
                  <ul >
                    <li @tap="tag(item_)" v-for="(item_,ins) in item.lis" :key="ins">
                      <div class="title">
                        <div>{{item_.tit}}</div>
                        <div>
                          <span v-if="item_.iszizhu==1" class="zizhu">仅自助</span>
                          <span v-else class="ershisi">24</span>
                          <span v-if="item_.jvli" class="jvli">{{item_.jvli}}km</span>
                        </div>
                      </div>
                      <p>{{item_.msg}}</p>
                    </li>
                  </ul>
                </div>
            </div>
          </betterscroll>
        </div>
      </div>
  </div>
</template>

<script>
import heade from '@/components/header/header.vue'
import betterscroll from '@/components/betterscroll'
import loadding from '@/components/loadding'
export default {
    name:'mendianxuan',
  data() {
    return {
      list:[],
      index:0,
      iss:true
    }
  },
  methods: {
    chang(index){
      this.index=index;
      this.fn();
      let h4=document.querySelectorAll("h4");
      let scrollt=h4[this.index].offsetTop;
      this.$refs.sc.toscrolltop(-scrollt)     ;

    },
    scrollTop(obj){
      this.scren(obj);
    },
    scren(obj){
      let h4=document.querySelectorAll("h4");
      let topp=obj.y;
      let arr=[];
      h4.forEach((item,index)=>{
        if(item.offsetTop<-topp){
          arr.push(item.offsetTop);
        }
      })
      if(arr.length==0){
        this.index=0;
      }else{
        let maxs= Math.max.apply(null,arr);
        h4.forEach((item,i)=>{
          if(item.offsetTop==maxs){
            this.index=++i;
            if(this.index>=this.list.length){
              this.index=this.list.length-1;
            }
          }
        })
      }
    },
    fn(){
      this.$refs.men.childNodes.forEach((item)=>{
        item.className="";
      })
      this.$refs.men.childNodes[this.index].className="active";
    },
    tag(item){
      this.$router.push({path:"/shopInfo",query:{title:item.tit}})
      window.localStorage.setItem("mendianinfo",JSON.stringify(item));
    }

  },
  watch: {
    index(){
      this.fn();
      let lists=document.querySelectorAll(".bans li");
      let biao=document.querySelector(".bans").offsetHeight;
      let h=lists[0].parentElement.parentElement.offsetHeight;
      if(lists[this.index].offsetTop>=biao){
         this.$refs.aaa.toscrolltop(-(lists[this.index].offsetTop-biao+lists[this.index].offsetHeight))
      }
    }
  },
  mounted(){
    if(window.localStorage.getItem("mendianlist")==null){
      this.axios.get("https://www.easy-mock.com/mock/5d32d0e3727ccf47581b3589/CityList/CityList").then((res)=>{
        if(res.status==200){
          this.list=res.data.data.list;
          window.localStorage.setItem("mendianlist",JSON.stringify(res.data.data.list));
            this.iss=false;
        }
     })
    }else{
      this.iss=true;
      setTimeout(()=>{
      this.iss=false;
      this.list=JSON.parse(window.localStorage.getItem("mendianlist"));
      },1000)
    }
  },
  components: {
      heade,
    betterscroll,
    loadding
  }
}
</script>

<style scoped lang="less">
input::-webkit-input-placeholder {
        color:#ccc;
        text-align: center
    }
.mendian{
  background-color: #f6f6f6;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .main{
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .section{
      height: 100%;
      .container{
        .andmine{
          h4{
            background-color: #f6f6f6;
            color: #b0b0b0;
            font-size: .23rem;
            padding-left: .23rem;
            height: .45rem;
            line-height: .45rem;
          }
          ul{
            background-color: #fff;
            padding:0 .23rem;
            li{
              font-size: .27rem;
              border-bottom: .02rem solid #eee;
              padding:.23rem 0;
              &:last-of-type{
                border-color: transparent;
              }
              p{
                font-size: .22rem;
                color: #9a9a9a;
                margin-top: .16rem;
              }
              div:first-of-type{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                color: #333;
                align-items: center;
                .zizhu{
                  width: .73rem;
                  height: .2rem;
                  border: .02rem solid #ffe009;
                  font-size: .17rem;
                  color: #ffe009;
                  padding: 0 .1rem;
                  margin-right: .36rem;
                }
                .ershisi{
                  width: .32rem;
                  height: .32rem;
                  border-radius: 50%;
                  background-color: #fedf08;
                  color:#fff;
                  text-align: center;
                  line-height: .32rem;
                  font-size: .13rem;
                  margin-right: .4rem;
                  display: inline-block;
                }
                .jvli{
                  font-size: .18rem;
                  color: #9a9a9a;
                }
              }
            }
          }
        }
      }
    }
    .bans{
      height: 100%;
      width: 2.04rem;
      ul{
        display: flex;
        flex-direction: column;
        li{
        padding-left: .33rem;
        box-sizing: border-box;
          border-bottom: .02rem solid #eee;
          color: #999;
          border-left: .03rem solid transparent;
          font-size: .24rem;
          height: .87rem;
            line-height: .87rem;
          &:first-of-type{
            border-top: .02rem solid #eee;
          }
        }
        li.active{
          color: #333;
          background-color: #fff;
          border-left-color: #ffe009;
        }
      }
    }
  }
  .serch{
    height: .99rem;
    width: 100%;
    box-shadow: 0 7px 18px -11px #d8d8d8 inset; 
    line-height: .99rem;
    padding: 0 .32rem;
    input{
      width: 100%;
      height: .48rem;
      border-radius: .25rem;
      font-size: .21rem;
      padding-left: .1rem;
      vertical-align: middle;
    }
  }
}
</style>
