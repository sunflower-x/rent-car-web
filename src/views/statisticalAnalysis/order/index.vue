<template>
  <div class="order-container">
    <div class="top">
      <div class="left">
        <el-card>
          <span>总销售额/元</span>
          <div>
            <i class="iconfont icon-dangrixiaoshoue"></i>
            <span>8,987.00</span>
          </div>
        </el-card>
      </div>
      <div class="right">
        <el-card>
          <div>
            <span class="orderTotal">总订单量</span>
            <div>
              <i class="iconfont icon-tongji"></i>
              <span>8,987.00</span>
            </div>
          </div>
          <div>
            <span>今日下单量</span>
            <p>58</p>
          </div>
          <div>
            <span>今日成交金额</span>
            <p>1566.00</p>
          </div>
          <div>
            <span>本月下单量</span>
            <p>156</p>
          </div>
          <div>
            <span>本月成交金额</span>
            <p>11566.00</p>
          </div>
        </el-card>
      </div>
    </div>
    <div class="center">
      <!-- echarts图 -->
      <div class="left">
        <el-card>
          <!-- <div id="main" style="width: 1200px; height: 300px"></div> -->
          <XLintChart></XLintChart>
        </el-card>
      </div>
      <div class="right">
        <el-card>
          <span>销售额排行榜</span>
          <ul>
            <li><span>门店1</span><span>100</span><span>$895.00</span></li>
            <li><span>门店2</span><span>100</span><span>$895.00</span></li>
            <li><span>门店3</span><span>100</span><span>$895.00</span></li>
          </ul>
        </el-card>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <el-card>
          <span>订单类型</span>
          <div>
            <XRoundedRing
              id="id1"
              :option="ReturningTheCarInAnotherPlaceOption"
            ></XRoundedRing>
            <XRoundedRing id="id2" :option="pickUpCar"></XRoundedRing>
          </div>
        </el-card>
      </div>
      <div class="middle">
        <el-card>
          <span>订单来源</span>
          <XRoundedRing id="id3" :option="orderOriginOption"></XRoundedRing>
        </el-card>
      </div>
      <div class="right">
        <el-card>
          <span>出租率</span>
          <div>
            <span>本周</span>
            <i class="iconfont icon-xiangshang4"></i>
            <span>14.9230%</span>
          </div>
          <div>
            <span>本月</span>
            <i class="iconfont icon-xiangshang4"></i>
            <span>14.9230%</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import XLintChart from "../components/XLineChart.vue";
import XRoundedRing from "../components/XRoundedRing.vue";
import { ref, onMounted } from "vue";
let orderOriginOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    bottom: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
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
        { value: 1048, name: "App" },
        { value: 735, name: "电话" },
        { value: 580, name: "门店" },
      ],
    },
  ],
};
let ReturningTheCarInAnotherPlaceOption = {
  title: {
    text: "异地还车",
    // 副标题
    subtext: "90%",
    // 主副标题间距
    itemGap: 40,
    x: "center",
    y: "center",
    top: "120",
    // 主标题样式
    textStyle: {
      fontSize: "20",
      color: "black",
    },
  },
  legend: {
  
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      // 自定义中心内容的话需要把这个关闭
      emphasis: {
        label: {
          show: false,
          fontSize: "30",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 90, },
        { value: 10, itemStyle: {color:"white"},},
      ],
    },
  ],
};

let pickUpCar={
  title: {
    text: "上门取还",
    // 副标题
    subtext: "60%",
    // 主副标题间距
    itemGap: 40,
    x: "center",
    y: "center",
    top: "120",
    // 主标题样式
    textStyle: {
      fontSize: "20",
      color: "black",
    },
  },
  legend: {
  
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      // 自定义中心内容的话需要把这个关闭
      emphasis: {
        label: {
          show: false,
          fontSize: "30",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 60, itemStyle: {color:"brown"},},
        { value: 40, itemStyle: {color:"white"},},
      ],
    },
  ],
};
</script>

<style scoped lang="scss">
.order-container {
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .left {
      flex: 1;
      margin-right: 20px;
      :deep(.el-card__body) {
        text-align: center;
        span {
          font-size: 14px;
          color: #a3b0c6;
        }
        div {
          i {
            font-size: 50px;
            color: #1989fa;
            margin-right: 10px;
          }
          span {
            font-size: 30px;
            font-weight: bold;
            color: black;
          }
        }
      }
    }
    .right {
      flex: 5;
      :deep(.el-card__body) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
          text-align: center;
          span {
            font-size: 14px;
            color: #a3b0c6;
          }
          p {
            font-size: 18px;
            font-weight: bold;
            margin: 0px;
            margin-top: 10px;
            padding-bottom: 20px;
            border-bottom: 4px solid greenyellow;
          }
          div {
            i {
              font-size: 50px;
              color: #1989fa;
              margin-right: 10px;
            }
            span {
              font-size: 30px;
              font-weight: bold;
              color: black;
            }
          }
        }
      }
    }
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .left {
      flex: 3;
      margin-right: 40px;
      :deep(.el-card__body) {
        padding: 0px;
      }
    }
    .right {
      flex: 1;
      :deep(.el-card__body) {
        height: 300px;
        box-sizing: border-box;
        ul {
          li {
            list-style-type: decimal;
            margin: 20px 0px;
            span {
              margin-left: 40px;
            }
          }
          li:hover span:first-child {
            font-size: 20px;
            color: #1989fa;
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      flex: 2;
      margin-right: 20px;
      :deep(.el-card__body) {
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    .middle {
      flex: 1;
      margin-right: 20px;
    }
    .right {
      flex: 1;
      :deep(.el-card__body) {
        div {
          margin: 62px 30px;
          span:first-child {
            font-size: 20px;
            margin-right: 20px;
            color: #c2bfc5;
            font-weight: bold;
          }
          i {
            font-size: 30px;
            margin-right: 10px;
            color: #4edb7c;
          }
          span:last-child {
            font-size: 30px;
            font-weight: bold;
            color: #4edb7c;
          }
        }
      }
    }
  }
}
</style>
