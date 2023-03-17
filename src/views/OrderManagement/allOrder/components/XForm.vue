<template>
  <div class="XForm-container">
    <!-- 筛选表单 -->
    <div class="filter-form">
      <el-form :model="form">
        <!--订单编号  -->
        <el-form-item label="订单编号">
          <el-input v-model="form.num" placeholder="请输入内容" />
        </el-form-item>
        <!-- 预定车型 -->
        <el-form-item label="预定车型">
          <el-select v-model="form.type" placeholder="请选择车型">
            <el-option label="全部" value="all" />
            <el-option label="车型一" value="type1" />
            <el-option label="车型二" value="type2" />
          </el-select>
        </el-form-item>
        <!-- 车牌号 -->
        <el-form-item label="车牌号">
          <el-input v-model="form.carNum" placeholder="请输入内容" />
        </el-form-item>
        <!-- 承租人姓名 -->
        <el-form-item>
          <el-input
            v-model="form.name"
            placeholder="请输入内容"
            class="input-with-select"
            style="width: 300px"
          >
            <template #prepend>
              <el-select
                v-model="form.selectType"
                placeholder="Select"
                style="width: 115px"
              >
                <el-option label="承租人姓名" value="1" />
                <el-option label="承租人手机号" value="2" />
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <!-- 创建时间 -->
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="form.createTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始"
            end-placeholder="结束"
          />
        </el-form-item>
        <!-- 订单状态 -->
        <el-form-item label="订单状态">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option label="全部" value="all" />
            <el-option label="待取车" value="待取车" />
            <el-option label="待换车" value="待换车" />
            <el-option label="已完成" value="已完成" />
            <el-option label="已取消" value="已取消" />
            <el-option label="已预定" value="已预定" />
          </el-select>
        </el-form-item>
        <!-- 订单来源 -->
        <el-form-item label="订单来源">
          <el-select v-model="form.origin" placeholder="请选择来源">
            <el-option label="全部" value="all" />
            <el-option label="App预定" value="App预定" />
            <el-option label="电话预定" value="电话预定" />
            <el-option label="线下门店预定" value="线下门店预定" />
            <el-option label="其他" value="其他" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <!-- 筛选按钮 -->
    <div class="filter-btn">
      <div class="left">
        <el-button
          @click="orderStatus = 'all'"
          :class="{ isActive: orderStatus == 'all' ? orderStatus : false }"
          >全部</el-button
        >
        <el-button
          @click="orderStatus = 'todayGet'"
          :class="{ isActive: orderStatus == 'todayGet' ? orderStatus : false }"
          >今日取车</el-button
        >
        <el-button
          @click="orderStatus = 'todayReturn'"
          :class="{
            isActive: orderStatus == 'todayReturn' ? orderStatus : false,
          }"
          >今日还车</el-button
        >
        <el-button
          @click="orderStatus = 'overdue'"
          :class="{ isActive: orderStatus == 'overdue' ? orderStatus : false }"
          >逾期订单</el-button
        >
        <el-button
          @click="orderStatus = 'cancel'"
          :class="{ isActive: orderStatus == 'cancel' ? orderStatus : false }"
          >已取消订单</el-button
        >
      </div>
      <div class="right">
        <el-button style="background: #409eff; color: white" @click="handleAdd"
          ><i class="iconfont icon-jiahao"></i>创建订单</el-button
        >
        <el-button>导出报表</el-button>
        <el-button @click="handleClearCondition">清除条件</el-button>
      </div>
    </div>
  </div>
  <!-- 弹出框 -->
  <!-- 放在容器外面,放在里面会样式污染 -->
  <XDialog
    :createOrderDialogFormVisible="createOrderDialogFormVisible"
    @changeDialogFormVisible="changeDialogFormVisible"
  ></XDialog>
</template>

<script setup>
import XDialog from "./XDialog.vue";
import { reactive, ref, onMounted, watch } from "vue";


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
// 表单数据清空
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
}
// 弹出框相关
const createOrderDialogFormVisible = ref(false);
function changeDialogFormVisible(val) {
  createOrderDialogFormVisible.value = val;
}
function handleAdd() {
  createOrderDialogFormVisible.value = true;
}
// 订单类型标识
let orderStatus = ref("all");
</script>

<style scoped lang="scss">
.XForm-container {
  :deep(.el-form) {
    display: flex;
    padding: 5px 20px;
    align-items: center;
    flex-wrap: wrap;
    .el-form-item {
      margin-right: 20px;
    }
  }
}
.filter-btn {
  padding: 0px 20px;
  @include flex-space-end;
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
