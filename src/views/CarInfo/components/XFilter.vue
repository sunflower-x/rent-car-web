<template>
  <div class="XFilter-container">
    <span>{{ props.setInfo.title }}</span>
    <span>全部</span>
    <el-checkbox-group v-model="checkList" @change="handleChange">
      <el-checkbox
        v-for="item in props.setInfo.dataList"
        :label="item.label"
        :value="item.label"
      ></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits } from "vue";
// reactive在这里无法给这个数据响应式,要使用ref
let checkList = ref([]);
let emits = defineEmits(["getCheckList"]);
let props = defineProps(["setInfo"]);
let filterData = {
  title: "座位数",
  dataList: [
    { label: "0-2座" },
    { label: "3座" },
    { label: "4座" },
    { label: "5座" },
    { label: "6座以上" },
  ],
};
function handleChange() {
  // console.log(111);
  emits("getCheckList", checkList);
}
</script>

<style scoped lang="scss">
.XFilter-container {
  span {
    margin-right: 10px;
    width: 80px;
    text-align: center;
    // border: 1px solid red;
  }
}
</style>
