<template>
  <div class="XOrderDetail-container">
    <div class="title">
      <span>订单类型</span>
    </div>
    <div class="content">
      <span>类型:个人/企业</span>
      <span>车辆号:XXXXXXX</span>
      <span>客户姓名:XXX</span>
      <span>车型:xxxxxxx</span>
      <span>身份证号:xxxxxxx</span>
      <span>车辆颜色:xxxxxxx</span>
      <span>联系电话:xxxxxxx</span>
      <span>承租时间:xxxxxxx</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.XOrderDetail-container {
  .content {
    margin-left: 25px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}
</style>
