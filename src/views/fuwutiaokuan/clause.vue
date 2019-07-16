<template>
 <div>
     <Hend txt="服务条款与隐私条款">
        <router-link class="leftImg" slot="left" to="/evaluate"><img src="./img/icon-come back@2x.png" alt=""></router-link>
     </Hend>
     <div class="text-c">
         <p :key="id" v-for="(item,id) in arr_text">{{item}}</p>
     </div>
 </div>
</template>

<script>
var arr_text=[
"1．向承租方提供的租赁车辆技术状况必须良好，各种证照及规费齐全。",
"2．负责办理保险公司为租赁车开办的险种。",
"3．负责车辆的二级维护和年检。",
"4．租赁车在租赁期间， 发生事故、应协助乙方处理事故。",
"5．租赁期间对车辆使用情况实施监督。",
"6．租赁期间，应遵守国家有关法律、法规、法令，全行车严禁酒后驾驶。因酒驾违法、违纪、违章所造成的民事法律责任，自行负责，并承担给甲方造成的经济损失。",
"7．租赁期间负责对车辆例行保养和小修，如车辆在例行保养和小修时需更换零部件，应事前取得甲方的许可。",
"8．不得用租赁车辆从事营业性活动，不得将车辆转租、出售、典当、抵押、不得将车辆交与无证人员。",
"9．承担车辆租赁期的 费、过桥费、过路费、小修费和车辆被盗后保险公司付赔后的不足部分及其他费用。",
"10．租车时，应出具担保人合法有效的担保书及有效的担保证件。",
"11．发生交通事故，承担公安交通管理部门裁定的责任，并承担保险公司付赔甲方后不足部分的损失和修理期间车辆的租金。",
"12．租赁车辆使用期间，发生交通事故，及时向当地公安交通、保险部门报案联系。并在24小时内通知甲方协助解决。",
"13．如需续租车辆，须在本合同期满前向甲方办理续租手续，合同期满未办理手续，逾期三天(含三天)未交还车辆，除应交纳逾期期间的租金外，另交纳逾期租金 %的违约金，逾期三天以上，未与出租方办理续租手续的，承租方将向有关部门申报，由此产生的后果及费用由承租方承担。"
];
import Hend from "../../components/header/header.vue"
export default {
 data() {
 return {
    arr_text
 }
 },
 methods: {

 },
 components: {
    Hend
 }
}
</script>

<style scoped lang="less">
@r:100rem;
.text-c{
    padding:30/@r 30/@r;
    p{
        font-size:28/@r;
        color: #333333;
        line-height: 48/@r;
        margin: 10/@r 0;
    }

}
.header{
    border-bottom:.01rem solid #ccc;
}
</style>
