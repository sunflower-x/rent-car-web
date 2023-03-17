<template>
  <div class="XHeadData-container">
    <el-row :gutter="20">
      <!-- 左边容器 -->
      <el-col :span="16">
        <!-- 左边第一行 -->
        <el-row :gutter="20" >
          <el-col :span="6" class="carTotal">
            <el-card>
              <i class="iconfont icon-xiaoche"></i>
              <b>324</b>
              <span>车辆总数</span>
            </el-card>
          </el-col>
          <el-col :span="18" class="todayItem">
            <el-card>
              <div>
                <span>今日预定</span>
                <b>10</b>
              </div>
              <div>
                <span>今日领取</span>
                <b>34</b>
              </div>
              <div>
                <span>今日还车</span>
                <b>32</b>
              </div>
              <div>
                <span>今日待还</span>
                <b>24</b>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row>
          <el-col :span="24" class="charts">
            <el-card>
              <div>
                <XSolidCircle></XSolidCircle>
              </div>
              <div>
                <XRoundedRing
                  id="id4"
                  :option="rentalVehicleType"
                ></XRoundedRing>
              </div>
              <div>
                <XRoundedRing
                  id="id5"
                  :option="rentalVehicleType"
                ></XRoundedRing>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 右边容器 -->
      <el-col :span="8" class="right">
        <el-card>
          <div class="box">
            <div class="top">
              <span>待年检车辆</span>
              <a href="#">查看更多></a>
            </div>
            <div class="content">
              <p>迈凯伦540C/自动挡/硬顶跑车/3.8T/2座/2019款/Coupe</p>
              <b>晋A123456</b>
            </div>
          </div>
          <div class="box">
            <div class="top">
              <span>待年检车辆</span>
              <a href="#">查看更多></a>
            </div>
            <div class="content">
              <p>迈凯伦540C/自动挡/硬顶跑车/3.8T/2座/2019款/Coupe</p>
              <b>晋A123456</b>
            </div>
          </div>
          <div class="box">
            <div class="top">
              <span>待年检车辆</span>
              <a href="#">查看更多></a>
            </div>
            <div class="content">
              <p>迈凯伦540C/自动挡/硬顶跑车/3.8T/2座/2019款/Coupe</p>
              <b>晋A123456</b>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import XSolidCircle from "./XSolidCircle.vue";
import XRoundedRing from "./XRoundedRing.vue";

let rentalVehicleType = {
  title: [
    {
      text: "交易总数",
      bottom: "0%",
      left: "8%",
    },
  ],
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "center",
    left: "40%",
    orient: "vertical",
    align: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["20%", "40%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
</script>

<style scoped lang="scss">
.XHeadData-container {
  .first-row{
  }
  .carTotal {
    :deep(.el-card__body) {
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        font-size: 40px;
        color: #5753ff;
      }
      b {
        font-size: 30px;
        margin: 15px 0px;
      }
    }
  }
  .todayItem {
    :deep(.el-card__body) {
      display: flex;
      justify-content: space-around;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-size: 14px;
          color: gray;
        }
        b {
          font-size: 30px;
          margin-top: 15px;
          padding-bottom: 20px;
          margin: 27px;
          border-bottom: 4px solid greenyellow;
        }
      }
    }
  }
  .right {
    :deep(.el-card__body) {
      display: flex;
      flex-direction: column;
      padding: 15px;
      .box {
        margin: 7px 0px;
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        .content {
          width: 340px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f0f3f8;
          border-radius: 14px;
          padding: 5px;
          p {
            width: 250px;
          }
          b {
            color: #f97d52;
          }
        }
      }
    }
  }
  .charts {
    margin-top: 20px;
    :deep(.el-card__body) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div{
      }
    }
  }
}
</style>
