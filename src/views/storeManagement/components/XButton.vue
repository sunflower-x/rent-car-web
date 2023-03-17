<template>
  <div class="XBtn-container">
    <el-button >
      <slot>按钮</slot>
    </el-button>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.XBtn-container{
    .el-button{
      // background: red;
        width: 80px;
        padding: 0px ;
        margin: 0px;
        font-size: 10px;
    }
}

</style>
