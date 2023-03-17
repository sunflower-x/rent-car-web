<template>
  <div class="XReturnCar-container">
    <el-dialog
      v-model="dialogFormVisible"
      title="还车"
      style="width: 800px"
      @close="handleClose"
    >
      <!-- 订单详情 -->
      <div class="orderDetail">
        <!-- 组件 -->
        <XOrderDetail></XOrderDetail>
      </div>
      <!-- 支付信息 -->
      <div class="payInfo">
        <span>支付信息</span>
        <div class="content">
          <p>订单金额:$200</p>
          <p>结算方式:现金</p>
        </div>
      </div>
      <!-- 押金信息 -->
      <div class="depositInfo">
        <span>押金信息</span>
        <div class="content">
          <p>押金金额:$200</p>
          <p>结算方式:预授权</p>
          <p>备注:xxxxx</p>
        </div>
      </div>
      <!-- 还车信息 -->
      <div class="returnInfo">
        <span>还车信息</span>
        <div class="content">
          <el-row :gutter="30">
            <el-col :span="10">
              <el-form-item label="还车时间">
                <el-date-picker
                  v-model="form"
                  type="date"
                  placeholder="请选择日期"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="验车人">
                <el-select v-model="form" placeholder="请选择">
                  <el-option label="Zone one" value="jack" />
                  <el-option label="Zone two" value="li" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="油量情况">
            <el-slider v-model="value1" style="width: 400px" />
          </el-form-item>
          <el-form-item label="公里数">
            <el-input v-model="form" placeholder="请输入内容" />
          </el-form-item>
        </div>
      </div>

      <!-- 车辆照片 -->
      <div class="carPic">
        <span>车辆照片</span>
        <div class="content">
          <el-form-item label="损坏">
            <el-radio-group v-model="form">
              <el-radio label="划痕" />
              <el-radio label="裂痕" />
              <el-radio label="凹陷" />
              <el-radio label="脱落" />
              <el-radio label="其他" />
            </el-radio-group>
          </el-form-item>
          <el-row>
            <el-col :span="6">
              <XUpload></XUpload>
            </el-col>
            <el-col :span="6">
              <XUpload></XUpload>
            </el-col>

            <el-col :span="12">
              <!-- 照片说明 -->
              <p>照片说明</p>
              <el-input
                v-model="form"
                type="textarea"
                rows="4"
                placeholder="请输入介绍信息"
              />
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 备注说明 -->
      <div class="remark">
        <span>备注说明</span>
        <div class="content">
          <el-input
            v-model="form"
            type="textarea"
            placeholder="请输入介绍信息"
          />
        </div>
      </div>

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
import XUpload from "./XUpload.vue";
import XOrderDetail from "./XOrderDetail.vue";
import { reactive, ref, watch, defineEmits } from "vue";
import {useStore} from 'vuex'
const store=useStore()

let dialogFormVisible = ref(store.state.orderManagement.returnCarDialogFormVisible)
/* 
    从vuex获取到对话框打开的标识并监听这个属性
*/
function handleCancel() {
  dialogFormVisible.value = false;
}
function handleConfirm() {
  dialogFormVisible.value = false;
}
function handleClose() {
  store.dispatch('orderManagement/changeDialogVisible',false)
}
watch(()=>store.state.orderManagement.returnCarDialogFormVisible,(newVal)=>{
  // console.log("returnCarDialogFormVisible",11111111);
   dialogFormVisible.value=newVal
  
},{
  deep:true
})

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
.XReturnCar-container {
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

.XReturnCar-container {
  .orderDetail {
    border: 0.5px solid gray;
    padding: 10px 10px;
    margin-bottom: 10px;
  }
  .payInfo {
    border: 0.5px solid gray;
    padding: 10px 10px;
    margin-bottom: 10px;
    .content {
      margin-left: 20px;
      margin-top: 10px;
    }
  }
  .depositInfo {
    border: 0.5px solid gray;
    padding: 10px 10px;
    margin-bottom: 10px;
    .content {
      margin-left: 20px;
      margin-top: 10px;
      p:last-child {
        margin-left: 20px;
      }
    }
  }
  .returnInfo {
    border: 0.5px solid gray;
    padding: 10px 10px;
    margin-bottom: 10px;
    .content {
      margin-left: 20px;
      margin-top: 10px;
    }
  }
  .carPic {
    border: 0.5px solid gray;
    padding: 10px 10px;
    margin-bottom: 10px;
    .content {
      margin-left: 20px;
      margin-top: 10px;
    }
  }
  .remark {
    border: 0.5px solid gray;
    padding: 10px 10px;
    margin-bottom: 10px;
    .content {
      margin-left: 20px;
      margin-top: 10px;
    }
  }
}
</style>
