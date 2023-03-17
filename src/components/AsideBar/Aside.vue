<template>
  <el-menu
    default-active="/"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    :router="true"
    :unique-opened="true"
  >
    <h2>LOGO</h2>
    <SideBarItem :list="list"></SideBarItem>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import SideBarItem from "./SideBarItem.vue";
// 直接引入路由信息,以后可以将路由信息放在store里
import { routes } from "../../router/index";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

// 根据路由信息的meta属性里的name来判断该路由是否渲染到侧边栏
let list = reactive(
  routes.filter((item) => {
    return item.meta.name;
  })
);

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.el-menu {
  background: #305ccc;
  border: none;
  h2 {
    color: white;
    text-align: center;
  }
}
</style>
