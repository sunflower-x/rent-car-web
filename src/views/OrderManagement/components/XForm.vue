<template>
  <div class="XForm-container">
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
</template>

<script setup>
import { reactive, ref, onMounted, watch, defineEmits } from "vue";
const props = defineProps(["form"]);
let form = ref(props.form);
const emits = defineEmits(["changForm"]);
// 监听props的变化
watch(()=>props,(newVal)=>{
  emits("changForm", newVal.form);
  form.value=newVal.form
},{deep:true})
onMounted(() => {
  // console.log(form);
});
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
</style>
