<template>
  <el-dialog
    v-model="dialogVisible2"
    title="地图"
    width="50%"
    :close-on-click-modal="false"
  >
    <div class="amap-wrapper">
      <div id="Amap">
        <XGaodeMap ref="mymap"></XGaodeMap>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="getAddress">保存</el-button>
        <el-button @click="dialogVisible = false"> 取消 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import XGaodeMap from "./XGaodeMap.vue";
import { computed } from "@vue/reactivity";
import { getCurrentInstance, ref, reactive } from "vue";
const { proxy } = getCurrentInstance();
const dialogVisible2 = ref(true);
const dialogVisible = ref(true);
// 调用子组件挂载到全局的方法,获取到当前搜索的结果
const getAddress = () => {
  proxy?.$refs.mymap.getAddress().then((res) => {
    console.log(res,11111111);
  });
};
</script>
