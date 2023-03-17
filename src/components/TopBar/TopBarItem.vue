<template>
  <div class="topBar-container">
    <el-card>
      <div class="left">
        <el-icon><Grid /></el-icon>
      </div>
      <div class="right">
        <el-icon><Bell /></el-icon>
        <div>
          <img src="../../assets/image/user.png" alt="user.png" />
          <span>Thomas</span>
          <el-icon><ArrowDownBold /></el-icon>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.topBar-container {
  :deep(.el-card__body) {
    padding: 0px 30px !important;
    @include flex-space-between;
    .left {
      .el-icon {
        font-size: 30px;
      }
    }
    .right {
      width: 240px;
      font-size: 20px;
      @include flex-space-between;
      img {
        width: 40px;
      }
      div {
        width: 160px;
        @include flex-space-between;
        span {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
