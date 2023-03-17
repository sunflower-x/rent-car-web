<template>
  <div class="allOrder-container">
    <!-- 头部 -->
    <div class="top">
      <!-- 页面信息 -->
      <TopInfo :info="route.meta.name"></TopInfo>
      <!-- 筛选表单 -->
      <XForm ></XForm>
    </div>
    <!-- 数据表单 -->
    <XDataList :tableData="tableData"></XDataList>
    <!-- 新增订单框 -->
    <XDialog
      :addOrderDialogFormVisible="addOrderDialogFormVisible"
      @changeDialogFormVisible="changeDialogFormVisible"
    ></XDialog>
  </div>
  <!-- 取车弹出框 -->
  <XGetCarDialog
    :getCarDialogFormVisible="getCarDialogFormVisible"
  ></XGetCarDialog>
</template>

<script setup>
import XDataList from "./components/XDataList.vue";
import XDialog from "./components/XDialog.vue";
import XForm from "./components/XForm.vue";
import XGetCarDialog from "./components/XGetCarDialog.vue";
import { ref, reactive, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { getAllOrderInfo } from "@/api/order.js";

const route = useRoute();
const store = useStore();

onMounted(() => {
  // 获取数据
  getAllOrderInfo().then((res) => {
    // console.log(res.orderInfoList,1111);
    tableData.value = res.orderInfoList;
  });
});
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
function changForm(val) {}
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
onMounted(() => {});
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
// 表单数据
let tableData = ref([]);
let orderStatus = ref("all");

// 控制还车对话框的标识
/* 
  将flag存储在store中,点击还车按钮,改变flag为true,当子组件点击关闭,将flag改为false
*/

// 取车弹出框逻辑
// console.log(store.state.orderManagement.getCarDialogFormVisible, 11111);
let getCarDialogFormVisible = ref(
  store.state.orderManagement.getCarDialogFormVisible
);
watch(
  () => store.state.orderManagement.getCarDialogFormVisible,
  (newVal) => {
    // console.log(newVal,11111111111);
    getCarDialogFormVisible.value = newVal;
  }
);
</script>

<style lang="scss" scoped></style>
