<template>
  <div class="XSolidCircle-container">
    <div class="circle">
        <span>86%</span>
    </div>
    <p>在租车辆占比</p>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.XSolidCircle-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin:0px  35px;
    .circle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #8da6f7;
        border: 10px solid #e1e3f6;
        display: flex;
        align-items: center;
        justify-content: space-around;
        span{
            font-size: 30px;
            font-weight: bolder;
            font-style:italic;
            color:#0772f9   
        }
    }
    p{
        padding: 0px;
        margin: 0px !important;
        color: #afb5d0;
    }
}

</style>