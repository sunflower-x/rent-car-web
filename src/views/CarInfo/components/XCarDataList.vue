<template>
  <div class="list">
    <el-table
      :data="props.tableData"
      style="width: 100%"
      :header-cell-style="{ background: '#eff1f7' }"
    >
      <el-table-column   prop="date" label="车型/照片" width="200">
        <template #default="scope">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1200px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg" alt="" />
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="车牌" />
      <el-table-column prop="name" label="所在门店" />
      <el-table-column prop="name" label="当前里程数" />
      <el-table-column prop="name" label="油箱容量" />
      <el-table-column prop="name" label="车身颜色" />
      <el-table-column prop="name" label="运营状态" />
      <el-table-column label="操作" class="operation">
        <XButton>修改信息</XButton>
        <XButton>租金设置</XButton>
        <XButton>删除此车</XButton>
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
    :deep(.cell){
      /* display: flex;
      align-items: center; */
    }
    .operation{
      // display: block;
    }
  }
}
img{
  height: 70px;
  // vertical-align: top;
  float: left;
}
</style>
