<template>
  <div class="container">
    <div class="top">
      <TopInfo :info="route.meta.name"></TopInfo>
      <div class="filter">
        <!--搜索车型  -->
        <el-form-item label="搜索车型">
          <el-input v-model="order" placeholder="请输入内容" />
        </el-form-item>
        <!-- 运营状态 -->
        <el-form-item label="运营状态">
          <el-select v-model="form">
            <el-option label="全部" value="all" />
            <el-option label="租赁中" value="shanghai" />
            <el-option label="待租赁" value="beijing" />
            <el-option label="已下架" value="beijing" />
          </el-select>
        </el-form-item>
        <!-- 所属门店 -->
        <el-form-item label="所属门店">
          <el-select v-model="form">
            <el-option label="全部" value="all" />
            <el-option label="门店一" value="shanghai" />
            <el-option label="门店二" value="beijing" />
            <el-option label="门店三" value="beijing" />
          </el-select>
        </el-form-item>
      </div>
    </div>
    <div class="btn">
      <div class="left">
        <span>总计:1</span>
      </div>
      <div class="right">
        <el-button @click="handleAddCar"
          ><i class="iconfont icon-jiahao"></i> 添加车辆</el-button
        >
      </div>
    </div>
    <XCarDataList :tableData="tableData"></XCarDataList>
  </div>
  <!-- 添加框 -->
  <XDialog
    :dialogFormVisible="dialogFormVisible"
    @changeDialogFormVisible="changeDialogFormVisible"
  ></XDialog>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import XCarDataList from "../components/XCarDataList.vue";
import XDialog from "../components/XDialog.vue";
let dialogFormVisible = ref(false);
let route = useRoute();
let form = ref("all");
let select = ref("1");
function handleAddCar() {
  // console.log("点击添加按钮");
  dialogFormVisible.value = true;
}
function changeDialogFormVisible(val) {
  dialogFormVisible.value = val;
  // console.log("父组件接收到子组件传的数据");
}
let tableData = reactive([
  {
    date: "2023-10-5sfsfasdddddddddddddddddddd",
    name: "jack",
    returnTime: "2023-11-9",
    returnAddr: "深圳南山区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "租赁中",
  },
]);
</script>

<style lang="scss" scoped>
.filter {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .el-form-item {
    margin-right: 40px;
  }
}
.btn {
  display: flex;
  padding: 0px 20px;
  align-items: flex-end;
  justify-content: space-between;
  // margin-bottom: 0px !important;
  // border: 1px solid red;
  .left {
    float: left;
    margin-bottom: 5px;
    // margin-bottom: 0px !important;
    .el-button {
      border-radius: 0px;
      margin: 0px;
    }
  }
  .right {
    margin-bottom: 5px;
    .el-button {
      background: #409eff;
      color: white;
    }
  }
}

.el-table :deep(.cell) {
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  // text-align: center;
}
</style>
