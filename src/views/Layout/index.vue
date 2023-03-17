<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Aside /></el-aside>
      <el-container>
        <el-header><TopBar /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from "../../components/AsideBar/Aside.vue";
import TopBar from "../../components/TopBar/TopBarItem.vue";
</script>

<style scoped lang="scss">
.common-layout {
  // overflow: hidden;
  height: 100%;
  .el-container {
// overflow: hidden;
    height: 100%;
    .el-aside {
      background: #305ccc;
      // width: 200px;
      // overflow: hidden;
    }
    .el-container {
      .el-header {
        // height: 80px;
        padding: 0px;
        :deep(.el-card__body){
          height: 50px;
          padding: 0px;
        }
      }
      .el-main{
        padding: 10px 25px;
      }
    }
  }
}
</style>
