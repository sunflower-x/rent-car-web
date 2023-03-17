<template>
  <div class="storeManagement-container" style="border 1px solid">
    <div class="top">
      <div>
        <TopInfo info="门店管理"></TopInfo>
      </div>
      <XForm></XForm>
    </div>
    <div class="addStore">
      <span>总计:1</span>
      <el-button @click="handleAddStore"
        ><i class="iconfont icon-jiahao"></i> 添加门店</el-button
      >
    </div>
    <div class="list">
      <XStoreDataList :tableData="storeInfo"></XStoreDataList>
    </div>
  </div>
  <!-- 添加门店弹出框 -->
  <XAddStoreDialog
    :addStoreDialogVisibly="addStoreDialogVisibly"
    @getAddStoreVisibility="getAddStoreVisibility"
  ></XAddStoreDialog>
</template>

<script setup>
import XStoreDataList from "../components/XStoreDataList.vue";
import XAddStoreDialog from "./components/XAddStoreDialog.vue";
import { ref } from "vue";
let storeInfo = [
  {
    date: "1",
    name: "1",
  },
  {
    date: "2",
    name: "2",
  },
  {
    date: "3",
    name: "4",
  },
];

// 添加门店弹出框标识符
let addStoreDialogVisibly = ref(false);
function handleAddStore() {
  addStoreDialogVisibly.value = true;
}
function getAddStoreVisibility(val) {
  addStoreDialogVisibly.value = val;
}
</script>

<style scoped lang="scss">
.storeManagement-container {
  .top {
    // margin: 10px 40px;
    div {
      // margin-left: 40px;
    }
  }
  .addStore {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    .el-button {
      margin-bottom: 10px;
      background: #409eff;
      color: white;
    }
  }
}
</style>
