<template>
  <div class="XDialog-container">
    <el-dialog
      v-model="dialogFormVisible"
      title="新增订单"
      style="width: 800px"
      @close="handleClose"
    >
      <el-form :model="form" require-asterisk-position="left">
        <!-- 客户类型 -->
        <el-form-item label="客户类型">
          <el-radio-group v-model="form.type">
            <el-radio label="个人" />
            <el-radio label="企业" />
          </el-radio-group>
        </el-form-item>
        <el-row :gutter="50">
          <!-- 企业名称 -->
          <el-col :span="10">
            <el-form-item label="企业名称">
              <el-input v-model="form.name" placeholder="请输入内容" />
            </el-form-item>
          </el-col>
          <!-- 企业联系人 -->
          <el-col :span="11">
            <el-form-item label="企业联系人">
              <el-input v-model="form.contactPerson" placeholder="请输入内容" />
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 联系人身份证号 -->
        <el-row :gutter="5">
          <el-col :span="13">
            <el-form-item label="联系人身份证号">
              <el-input v-model="form.ContactNum" class="input-with-select">
                <template #prepend>
                  <el-select
                    v-model="form.ContactNumType"
                    style="width: 115px"
                  >
                    <el-option label="居民身份证" default value="居民身份证" />
                    <el-option label="护照" value="护照" />
                    <el-option label="外国暂住证" value="外国暂住证" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
          </el-col>

          <!-- 联系电话 -->
          <el-col :span="8">
            <el-form-item label="联系电话">
              <el-input v-model="form.phone" placeholder="请输入内容" />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 订单来源 -->
        <el-form-item label="订单来源">
          <el-radio-group v-model="form.origin">
            <el-radio label="电话预定" value="电话预定" />
            <el-radio label="门店预定" value="门店预定" />
            <el-radio label="其他来源" value="其他来源" />
          </el-radio-group>
        </el-form-item>
        <!-- 取车门店 -->
        <el-row>
          <el-col :span="10">
            <XCascader
              title="取车门店"
              @getCascadeData="getCascadeData"
            ></XCascader>
          </el-col>
          <el-col :span="2">
            <el-form-item label="送车上门">
              <el-checkbox> </el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 还车门店 -->
        <el-row>
          <el-col :span="10">
            <XCascader
              title="还车门店"
              @getCascadeData="getReturnCascadeData"
            ></XCascader>
          </el-col>
          <el-col :span="2">
            <el-form-item label="上门取车">
              <el-checkbox> </el-checkbox>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="7">
            <!-- 预定车型 -->
            <el-form-item label="预定车型">
              <el-select v-model="form.carType">
                <el-option label="全部" value="all" />
                <el-option label="车型一" value="车型一" />
                <el-option label="车型二" value="车型二" />
                <el-option label="车型三" value="车型三" />
                <el-option label="车型四" value="车型四" />
                <el-option label="车型五" value="车型五" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="2">
            <!-- 车牌号 -->
            <el-form-item label="车牌号">
              <el-input v-model="form.carNum" placeholder="请输入内容" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="48">
          <!-- 取车日期 -->
          <el-col :span="9">
            <el-form-item label="取车日期">
              <el-date-picker
                v-model="form.getTime"
                type="date"
                placeholder="请选择日期"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <!-- 还车日期 -->
          <el-col :span="9" :offset="2">
            <el-form-item label="还车日期">
              <el-date-picker
                v-model="form.returnTime"
                type="date"
                placeholder="请选择日期"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 选择服务 -->
        <el-form-item label="选择服务">
          <el-checkbox-group v-model="form.serviceType">
            <!-- <XCheckbox></XCheckbox> -->
            <el-checkbox v-model="checked3" label="服务1" border />
            <el-checkbox v-model="checked3" label="服务2" border />
            <el-checkbox v-model="checked3" label="服务3" border />
            <el-checkbox v-model="checked3" label="服务4" border />
          </el-checkbox-group>
        </el-form-item>
        <!-- 备注 -->
        <el-form-item label="备注">
          <el-input v-model="form.remark" type="textarea" />
        </el-form-item>
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

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import XCascader from "../../components/XCascader.vue";

let form = ref({
  type: "",
  name: "",
  contactPerson: "",
  ContactNum: "",
  ContactNumType: "居民身份证",
  phone: "",
  origin: "",
  carType: "all",
  carNum: "",
  getTime: "",
  returnTime: "",
  serviceType: [],
  remark: "",
});
// 获取取车门店信息
function getCascadeData(val) {
  // console.log(val, "111111111");
}
// 获取还车门店信息
function getReturnCascadeData(val) {
  // console.log(val, "222222222");
}

const formLabelWidth = "140px";
let props = defineProps(["createOrderDialogFormVisible"]);
let dialogFormVisible = ref(props.createOrderDialogFormVisible);

let emits = defineEmits(["changeDialogFormVisible"]);
function handleCancel() {
  emits("changeDialogFormVisible", false);
}
function handleConfirm() {
  emits("changeDialogFormVisible", false);
}
function handleClose() {
  emits("changeDialogFormVisible", false);
}

// 监听props的变化,props第一次传过来的是undefined,所以需要监听变化
watch(
  () => props,
  (newVal) => {
    dialogFormVisible.value = newVal.createOrderDialogFormVisible;
    // console.log(newVal);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.XDialog-container {
  :deep(.el-dialog__header) {
    margin: 0px;
    font-weight: bold;
    border-bottom: 1px solid black;
    .el-dialog__headerbtn {
      top: 3px;
    }
  }
  :deep(.el-dialog__footer) {
    text-align: center;
  }
}
</style>
