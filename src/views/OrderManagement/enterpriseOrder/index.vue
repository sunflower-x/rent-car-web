<template>
  <div class="allOrder-container">
    <!-- 头部 -->
    <div class="top">
      <!-- 页面信息 -->
      <TopInfo :info="route.meta.name"></TopInfo>
      <!-- 筛选表单 -->
      <XForm :form="form" @changForm="changForm"></XForm>
    </div>
    <!-- 操作按钮 -->
    <div class="btn">
      <div class="left">
        <el-button
          autofocus="true"
          :class="{ isActive: orderStatus == 'all' ? orderStatus : false }"
          >全部</el-button
        >
        <el-button @click="orderStatus = 'todayGet'">今日取车</el-button>
        <el-button @click="orderStatus = 'todayReturn'">今日还车</el-button>
        <el-button @click="orderStatus = 'overdue'">逾期订单</el-button>
        <el-button @click="orderStatus = 'cancel'">已取消订单</el-button>
      </div>
      <div class="right">
        <el-button style="background: #409eff; color: white" @click="handleAdd"
          ><i class="iconfont icon-jiahao"></i>创建订单</el-button
        >
        <el-button>导出报表</el-button>
        <el-button @click="handleClearCondition">清除条件</el-button>
      </div>
    </div>
    <!-- 数据表单 -->
    <XDataList :tableData="tableData"></XDataList>
  </div>
  <!-- 新增订单框 -->
  <XDialog
    :addOrderDialogFormVisible="addOrderDialogFormVisible"
    @changeDialogFormVisible="changeDialogFormVisible"
  ></XDialog>
</template>

<script setup>
import XDataList from "../components/XDataList.vue";
import XDialog from "../components/XDialog.vue";
import XForm from "../components/XForm.vue";
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
// 表单数据
const form = ref({
  num: "",
  type: "all",
  carNum: "",
  name: "",
  selectType: "1",
  createTime: "",
  status: "all",
  origin: "all",
});
// 获取返回的表单数据
function changForm(val) {
  // console.log(val, 111111);
}
// 点击清除条件  点击=>获取到返回的表单数据=>然后再监听到props的变化
function handleClearCondition() {
  form.value = {
    num: "",
    type: "all",
    carNum: "",
    name: "",
    selectType: "1",
    createTime: "",
    status: "all",
    origin: "all",
  };
  // console.log(form.value,"点击清除条件");
}
onMounted(() => {
});
// 创建订单的打开标识
const addOrderDialogFormVisible = ref(false);
// 点击创建订单
function handleAdd() {
  addOrderDialogFormVisible.value = true;
}
// 获取到从子组件传来的创建订单框的标识
function changeDialogFormVisible(val) {
  addOrderDialogFormVisible.value = val;
}
// 表单数据 后期从服务器获取
let tableData = reactive([
  {
    date: "2023-10-03-10-23,20190621030",
    name: "张三,18322822805",
    returnTime: "2023-11-5,2023-11-9",
    returnAddr: "深圳南山区,深圳宝安区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "待取车",
  },
  {
    date: "2023-10-03-10-23,20190621030",
    name: "张三,18322822805",
    returnTime: "2023-11-5,2023-11-9",
    returnAddr: "深圳南山区,深圳宝安区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "待取车",
  },
  {
    date: "2023-10-03-10-23,20190621030",
    name: "张三,18322822805",
    returnTime: "2023-11-5,2023-11-9",
    returnAddr: "深圳南山区,深圳宝安区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "待取车",
  },
  {
    date: "2023-10-03-10-23,20190621030",
    name: "张三,18322822805",
    returnTime: "2023-11-5,2023-11-9",
    returnAddr: "深圳南山区,深圳宝安区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "待取车",
  },
  {
    date: "2023-10-03-10-23,20190621030",
    name: "张三,18322822805",
    returnTime: "2023-11-5,2023-11-9",
    returnAddr: "深圳南山区,深圳宝安区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "待取车",
  },
]);

let orderStatus = ref("all");
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  padding: 0px 20px;
  align-items: flex-end;
  justify-content: space-between;
  .left {
    float: left;
    .el-button {
      border-radius: 0px;
      margin: 0px;
      &:focus {
        outline: none;
        color: #409eff;
      }
    }
  }
  .right {
    margin-bottom: 5px;
  }
}
.isActive {
  color: #409eff;
  background: #ecf5ff;
}
</style>
