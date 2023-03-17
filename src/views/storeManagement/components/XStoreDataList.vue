<template>
  <div class="list">
    <el-table
      :data="props.tableData"
      style="width: 100%"
      :header-cell-style="{ background: '#eff1f7' }"
    >
      <el-table-column prop="date" label="编号" />
      <el-table-column prop="date" label="名称" />
      <el-table-column prop="name" label="所在地" />
      <el-table-column prop="name" label="详细地址" />
      <el-table-column prop="name" label="负责人" />
      <el-table-column prop="name" label="联系电话" />
      <el-table-column prop="name" label="营业时间" />
      <el-table-column prop="name" label="门店状态" />
      <el-table-column prop="name" label="员工人数" />
      <el-table-column prop="name" label="车辆数" />
      <el-table-column label="操作" class="operation">
        <XButton>修改信息</XButton>
        <XButton>门店设置</XButton>
        <XButton>删除门店</XButton>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import XButton from "./XButton.vue";
let props = defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.list {
  margin: 0px 20px;
  .el-table {
    :deep(.cell) {
      text-align: center;
    }
    :deep(thead) {
      color: #606266;
      .cell {
      }
    }
    :deep(.cell) {
      /* display: flex;
      align-items: center; */
    }
    .operation {
      // display: block;
    }
  }
}
img {
  height: 70px;
  // vertical-align: top;
  float: left;
}
</style>
