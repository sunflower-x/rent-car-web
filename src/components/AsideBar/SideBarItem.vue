<template>
  <div v-for="item in props.list">
    <el-menu-item v-if="!item.children" :index="item.path">
      <template #title>{{ item.meta.name }}</template>
    </el-menu-item>

    <el-sub-menu v-else :index="item.path">
      <template #title
        >
        <!-- iconfont图标 -->
        <i :class="'iconfont '+item.meta.icon" style="fontSize:20px;marginRight:10px"></i>
        <span>{{ item.meta.name }}</span></template
      >
      <side-bar-item :list="item.children"></side-bar-item>
    </el-sub-menu>
  </div>
</template>

<script setup>
import { reactive } from "vue";
let props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped lang="scss">
:deep(.el-sub-menu__title) {
  color: #e4e4e4;
  // margin-left: 20px;
  font-size: 18px;
  background: #305ccc;
  &:hover {
    color: white;
    background: #305ccc;
  }
}
.el-menu-item.is-active {
  background-color: #305ccc;
  color: #e4e4e4;
}
.el-menu-item {
  background-color: #305ccc;
  color: #e4e4e4;
  padding-left: 65px !important;
  &:hover {
    color: white;
    background: #1890ff;
  }
}
</style>
