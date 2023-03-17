<template>
  <div class="XVehicleStatisticsList-container">
    <el-card>
      <div class="title">
        <div class="left">
          <h3>车辆统计</h3>
          <el-button type="default" round>总计</el-button>
          <el-button type="default" round>本月</el-button>
          <el-button type="default" round>本周</el-button>
        </div>
        <div class="right">
          <el-button type="primary" round>导出</el-button>
        </div>
      </div>
      <div class="list">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="type" label="车型" width="250">
            <template #default="scope">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1200px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg"
                alt=""
              />

              <span>迈凯伦540C/自动挡/硬顶跑车/3.8T/2座/2019款/Coupe</span>
            </template>
          </el-table-column>
          <el-table-column prop="rentPrice" sortable label="租金" />
          <el-table-column prop="comment" sortable label="评价" />
          <el-table-column prop="rentDay" sortable label="出租天数" />
          <el-table-column prop="rentalKilo" sortable label="出租公里数" />
          <el-table-column prop="orderQuantity" sortable label="订单量" />
          <el-table-column prop="occupancyRate" sortable label="出租率" />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
let tableData = ref([
  {
    id: 1,
    type: "",
    rentPrice: 200,
    comment: "5分",
    rentDay: "200",
    rentalKilo: "200",
    orderQuantity: "200",
    occupancyRate: "5.62%",
  },
  {
    id: 1,
    type: "",
    rentPrice: 200,
    comment: "5分",
    rentDay: "200",
    rentalKilo: "200",
    orderQuantity: "200",
    occupancyRate: "5.62%",
  },
  {
    id: 1,
    type: "",
    rentPrice: 200,
    comment: "5分",
    rentDay: "200",
    rentalKilo: "200",
    orderQuantity: "200",
    occupancyRate: "5.62%",
  },
  {
    id: 1,
    type: "",
    rentPrice: 200,
    comment: "5分",
    rentDay: "200",
    rentalKilo: "200",
    orderQuantity: "200",
    occupancyRate: "5.62%",
  },
  {
    id: 1,
    type: "",
    rentPrice: 200,
    comment: "5分",
    rentDay: "200",
    rentalKilo: "200",
    orderQuantity: "200",
    occupancyRate: "5.62%",
  },
]);
</script>

<style scoped lang="scss">
.XVehicleStatisticsList-container {
     margin-top: 20px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      h3 {
        margin-right: 30px;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .list {
    :deep(.el-table .cell) {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  img {
    width: 60px;
    margin-right: 20px;
  }
}
</style>
