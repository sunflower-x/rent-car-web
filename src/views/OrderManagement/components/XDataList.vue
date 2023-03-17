<template>
  <div class="list">
    <el-table
      :data="props.tableData"
      style="width: 100%"
      :header-cell-style="{ background: '#eff1f7' }"
    >
      <el-table-column prop="date" label="订单号" width="150">
        <template #default="scope"
          >{{ scope.row.date.split(",")[0] }}<br />订单号:{{
            scope.row.date.split(",")[1]
          }}</template
        >
      </el-table-column>
      <el-table-column prop="name" label="承租人" width="80">
        <template #default="scope"
          >{{ scope.row.name.split(",")[0] }}<br /><!-- {{
            scope.row.name.split(",")[1]
          }} --></template
        >
      </el-table-column>
      <el-table-column prop="returnTime" label="取还车时间" width="110">
        <template #default="scope">
          <p style="color: #fb6638">
            <span style="background: #fb6638; color: white; borderradius: 3px"
              >取车</span
            >{{ scope.row.returnTime.split(",")[0] }}
          </p>
          <p style="color: #808080">
            <span style="background: #808080; color: white; borderradius: 3px"
              >还车</span
            >{{ scope.row.returnTime.split(",")[1] }}
          </p>
        </template>
      </el-table-column>
      <el-table-column prop="returnAddr" label="取还车地址" width="150">
        <template #default="scope">
          <p style="color: #fb6638">
            <span style="background: #fb6638; color: white; borderradius: 3px"
              >取车</span
            >{{ scope.row.returnAddr.split(",")[0] }}
          </p>
          <p style="color: #808080">
            <span style="background: #808080; color: white; borderradius: 3px"
              >还车</span
            >{{ scope.row.returnAddr.split(",")[1] }}
          </p>
        </template>
      </el-table-column>
      <el-table-column prop="rentTime" label="租期" width="50" />
      <el-table-column prop="type" label="预订车型" width="160" />
      <el-table-column prop="pay" label="支付金额" width="70" />
      <el-table-column prop="deposit" label="押金金额" width="70" />
      <el-table-column prop="status" label="订单状态" width="80">
        <template #default="scope">
          <span style="background: #fb6638; color: white; borderradius: 3px">{{
            scope.row.status
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="合同">
        <template #default="scope">
          <el-button
            size="small"
            type="default"
            @click="handleDelete(scope.$index, scope.row)"
            >打印合同</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" class="operation">
        <XButton @click="handleReturnCar">还车</XButton>
        <XButton>取消订单</XButton>
        <XButton>修改订单</XButton>
        <XButton>订单日志</XButton>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
  <!-- 还车对话框 -->
  <XReturnCarDialog
    :returnCarDialogFormVisible="returnCarDialogFormVisible"
    @changeReturnCarDialogFormVisible="changeReturnCarDialogFormVisible"
  ></XReturnCarDialog>
</template>

<script setup>
import XButton from "./XButton.vue";
import XReturnCarDialog from './XReturnCarDialog.vue'
import {ref} from 'vue'
import { useStore } from "vuex";
let store = useStore();

/* 
  将flag存储在store中,点击还车按钮,改变flag为true,当子组件点击关闭,将flag改为false
*/
// 点击取车
let returnCarDialogFormVisible = ref(
  store.state.orderManagement.returnCarDialogFormVisible
);

let props = defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});
function handleReturnCar(){
  console.log(store.state.orderManagement.returnCarDialogFormVisible);
  store.dispatch('orderManagement/changeDialogVisible',true)
}
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
  }
}
</style>
