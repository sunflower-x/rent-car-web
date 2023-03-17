<template>
  <div class="XRoundedRing-container">
    <div :id="props.id" style="width: 265px; height: 150px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const props = defineProps(["id", "option"]);

onMounted(() => {
  console.log(props.id);
  var myChart = echarts.init(document.getElementById(props.id));
  getChart(myChart);
});
function getChart(myChart) {
  myChart.setOption(props.option);
}
</script>

<style scoped lang="scss">
.XRoundedRing-container{
  div{
  }
}
</style>
