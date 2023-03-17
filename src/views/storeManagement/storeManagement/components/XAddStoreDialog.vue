<template>
  <div class="XAddStoreDialog-container">
    <el-dialog
      v-model="dialogFormVisible"
      title="添加门店"
      style="width: 700px"
      @close="handleClose"
    >
      <el-form :model="form" label-position="center">
        <el-row>
          <el-col :span="8">
            <el-form-item label="门店名称">
              <el-input placeholder="请输入内容" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="所在地">
          <el-cascader
            v-model="value"
            :options="options"
            :props="props"
            @change="handleChange"
          />
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="负责人">
              <el-input placeholder="请输入内容" />
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="3">
            <el-form-item label="联系电话">
              <el-input placeholder="请输入内容" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="营业时间">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :default-time="defaultTime1"
          />
        </el-form-item>
        <div class="map">
          <div>
            <!-- <el-form-item label="详细地址">
              <el-input placeholder="请输入内容" />
            </el-form-item> -->
          </div>
          <div class="map-container">
            <!-- 放置地图 -->
            <h3>详细地址:</h3>
            <XGaodeMapWrapper></XGaodeMapWrapper>
          </div>
        </div>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref,watch } from "vue";
import XGaodeMapWrapper from "./XGaodeMapWrapper.vue";
let dialogFormVisible = ref(false);
const props = defineProps(["addStoreDialogVisibly"]);
dialogFormVisible.value = props.addStoreDialogVisibly;
function handleCancel(){
  dialogFormVisible.value=false
}
function handleConfirm(){
  dialogFormVisible.value=false
}
const emits=defineEmits(['getAddStoreVisibility'])
function handleClose(){
  emits('getAddStoreVisibility',false)
}
watch(()=>props.addStoreDialogVisibly,(newVal)=>{
  dialogFormVisible.value=newVal
},{
  deep:true
})
</script>

<style scoped lang="scss">
.XAddStoreDialog-container {
  :deep(.el-dialog__footer) {
    text-align: center;
  }
}
</style>
