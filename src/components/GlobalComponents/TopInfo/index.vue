<template>
  <div class="TopInfo-container">
    <i class="iconfont icon-fuzhushuxian"></i>
    <h3>{{props.info}}</h3>
  </div>
</template>

<script setup>
let props =defineProps(['info'])
</script>

<style scoped lang="scss">
.TopInfo-container {
  display: flex;
  align-items: center;
  height: 30px;
  i {
    font-size: 25px;
    color: #305ccc;
  }
  h2 {
  }
  // border: 1px solid red;
}
</style>
