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
    </div>
    <!-- 数据列表 -->
    <div class="list">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#eff1f7' }"
      >
        <el-table-column prop="date" label="车型/照片" width="200">
          <template #default="scope">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1200px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg"
              alt=""
            />
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="车牌" />
        <el-table-column prop="name" label="所在门店" />
        <el-table-column prop="name" label="地址" />
        <el-table-column prop="name" label="门店联系电话" />
        <el-table-column label="操作" class="operation">
          <XButton>调度</XButton>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import XButton from "../components/XButton.vue";
let route = useRoute();
// import XDataList from "./components/XDataList.vue";
let form = ref("all");
let select = ref("1");
let tableData = reactive([
  {
    date: "2023-10-5法沙法撒旦顶顶顶顶顶顶顶顶发沙发",
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
    margin-right: 20px;
  }
}
.btn {
  display: flex;
  padding: 0px 20px;
  align-items: flex-end;
  justify-content: flex-start;
  .left {
    margin-bottom: 5px;
  }
}
.el-table :deep(.cell) {
  text-align: center;
}
img {
  height: 70px;
  float: left;
}
</style>
