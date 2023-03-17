<template>
  <div class="XDialog-container">
    <el-dialog
      v-model="dialogFormVisible"
      title="添加车辆"
      style="width: 800px"
      @close="handleClose"
    >
      <el-form>
        <!-- 基本信息 -->
        <div class="basicInfo">
          <span>基本信息</span>
          <el-row :gutter="20">
            <!-- 车型 -->
            <el-col :span="15">
              <el-form-item label="车型">
                <el-input
                  v-model="form"
                  placeholder="请输入,参数之间用/隔开,例如自动/掀背车/1.4L/5座"
                />
              </el-form-item>
            </el-col>
            <!-- 搜索 -->
            <el-col :span="2">
              <el-button type="primary" icon="Search">搜索车型</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="10">
              <!-- 车牌号 -->
              <el-form-item label="车牌号">
                <el-input
                  v-model="input3"
                  placeholder="请输入车牌号"
                  class="input-with-select"
                >
                  <template #prepend>
                    <el-select
                      v-model="select"
                      placeholder="深"
                      style="width: 70px; margin-right: 20px"
                    >
                      <el-option label="Restaurant" value="1" />
                      <el-option label="Order No." value="2" />
                      <el-option label="Tel" value="3" />
                    </el-select>
                    <el-select
                      v-model="select"
                      placeholder="A"
                      style="width: 70px"
                    >
                      <el-option label="A" value="1" />
                      <el-option label="B" value="2" />
                      <el-option label="C" value="3" />
                    </el-select>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <!-- 车架号 -->
              <el-form-item label="车架号">
                <el-input v-model="form" placeholder="请输入17位车架号" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="10">
              <!-- 所属门店 -->
              <el-form-item label="所属门店">
                <el-select v-model="form">
                  <el-option label="全部" value="全部" />
                  <el-option label="门店一" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <!-- 公里数 -->
              <el-form-item label="公里数">
                <el-input v-model="form" placeholder="请输入公里数" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="10">
              <!-- 发动机号 -->
              <el-form-item label="发动机号">
                <el-input v-model="form" placeholder="请输入行驶证上发动机号" />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <!-- 公里数 -->
              <el-form-item label="建造日期">
                <el-date-picker
                  v-model="form"
                  type="date"
                  placeholder="选择日期"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :span="10">
              <!-- 油箱容量 -->
              <el-form-item label="油箱容量">
                <el-input v-model="form" placeholder="请输入油箱容量 单位L" />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <!-- 车身颜色 -->
              <el-form-item label="车身颜色">
                <el-select v-model="form">
                  <el-option label="全部" value="all" />
                  <el-option label="红色" value="红色" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 车型照片 -->
          <div class="carPhoto">
            <span>车型照片</span>
            <XUpload></XUpload>
            <XUpload></XUpload>
            <XUpload></XUpload>
          </div>
        </div>
        <!-- 维保信息 -->
        <div class="maintenanceInfo">
          <span>维保信息</span>
          <div class="upload">
            <el-form-item label="年检到期时间">
              <el-date-picker
                v-model="form"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              />
            </el-form-item>

            <div class="UploadCertificate">
              <span>上传年检证明</span>
              <XUpload></XUpload>
            </div>
          </div>
          <div class="upload">
            <el-form-item label="车保到期时间">
              <el-date-picker
                v-model="form"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              />
            </el-form-item>

            <div class="UploadCertificate">
              <span>上传保单</span>
              <XUpload></XUpload>
            </div>
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
import { reactive, ref, watch, defineEmits } from "vue";
import XUpload from "./XUpload.vue";
let emits = defineEmits(["changeDialogFormVisible"]);
let dialogFormVisible = ref(props.dialogFormVisible);
let props = defineProps(["dialogFormVisible"]);
/* 
  注意:在el-dialog中只要对话框关闭就会调用@close这个函数,就是点击取消或者确定,只要监测到对话框关闭了,就会自动调用@close这个方法
*/
function handleCancel() {
  dialogFormVisible.value = false;
}
function handleConfirm() {
  dialogFormVisible.value = false;
}
function handleClose() {
  emits("changeDialogFormVisible", false);
  // console.log("handleClose");
}

watch(
  () => props,
  (newVal) => {
    dialogFormVisible.value = newVal.dialogFormVisible;
    // console.log("props变化了");
  },
  {
    deep: true,
  }
);
</script>

<style scoped lang="scss">
.XDialog-container {
  :deep(.el-dialog__body) {
    background: #f7f5f5;
  }
  :deep(.el-dialog__body) {
    padding: 10px 10px !important;
    padding-bottom: 0px !important;
  }
  :deep(.el-dialog__footer) {
    text-align: center;
  }
  .basicInfo {
    background: white;
    padding: 20px 15px;
    .XUpload-container {
      margin: 0px 10px;
    }
    .carPhoto {
      display: flex;
      align-items: center;
    }
  }
  .maintenanceInfo {
    margin-top: 20px;
    background: white;
    padding: 20px 15px;
    // padding-bottom: 0px;
    .upload {
      width: 650px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .UploadCertificate {
      display: flex;
      align-items: center;
    }
  }
}
</style>
