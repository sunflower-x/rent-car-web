<template>
  <div class="container">
    <div class="top">
      <TopInfo :info="route.meta.name"></TopInfo>
      <div class="filter">
        <!--搜索车型  -->
        <el-form-item label="搜索车型">
          <el-input v-model="order" placeholder="请输入内容" />
        </el-form-item>
        <!--搜索品牌  -->
        <el-form-item label="搜索品牌">
          <el-input v-model="order" placeholder="请输入内容" />
        </el-form-item>
      </div>
    </div>
    <!-- 车型条件筛选 -->
    <div class="car-filter">
      <!-- 年款 -->
      <div>
        <span>年款</span>
        <span>全部</span>
        <el-select v-model="value" placeholder="请选择" style="width: 100px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <XFilter
        :setInfo="filterData[0]"
        @getCheckList="getSiteCheckList"
      ></XFilter>
      <XFilter
        :setInfo="filterData[1]"
        @getCheckList="getTypeCheckList"
      ></XFilter>
      <XFilter
        :setInfo="filterData[2]"
        @getCheckList="getDisplacementCheckList"
      ></XFilter>
      <!-- 变速器类型 -->
      <div>
        <span>变速器类型</span>
        <span>全部</span>
        <el-radio-group v-model="radio">
          <el-radio :label="3">手动</el-radio>
          <el-radio :label="6">自动</el-radio>
        </el-radio-group>
      </div>
    </div>


    <div class="btn">
      <div class="left">
        <span>总计:1</span>
      </div>
      <div class="right">
        <el-button><i class="iconfont icon-jiahao"></i> 添加车辆</el-button>
      </div>
    </div>
    <!-- 数据列表 -->
    <div class="list">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#eff1f7' }"
      >
        <el-table-column prop="date" label="车型/照片" width="180">
          <template #default="scope">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1200px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg"
              alt=""
            />
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="品牌" width="80" />
        <el-table-column prop="name" label="款式" />
        <el-table-column prop="name" label="年款" />
        <el-table-column prop="name" label="座位数" />
        <el-table-column prop="name" label="厢式" />
        <el-table-column prop="name" label="排量" />
        <el-table-column prop="name" label="变速器类型" />
        <el-table-column label="操作" class="operation" width="200">
          <XButton>修改信息</XButton>&nbsp;&nbsp;
          <XButton>删除</XButton>
        </el-table-column>
      </el-table>
    </div>
    <!-- <XDataList :tableData="tableData"></XDataList> -->
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
// import XDataList from "./components/XDataList.vue";
import XFilter from "../components/XFilter.vue";
import { useRoute } from "vue-router";
import XButton from '../components/XButton.vue'
let route = useRoute();
let form = ref("all");
let select = ref("1");
let radio = ref();
let options = reactive([
  { value: 1, label: "2020年" },
  { value: 2, label: "2019年" },
  { value: 3, label: "2018年" },
]);

let tableData = reactive([
  {
    date: "2023-10-5",
    name: "jack",
    returnTime: "2023-11-9",
    returnAddr: "深圳南山区",
    rentTime: "5天",
    type: "桑塔纳/型号/自动/6座",
    pay: "2000",
    deposit: "200",
    status: "租赁中",
  },
]);
// 筛选列表静态数据
let filterData = [
  {
    title: "座位数",
    dataList: [
      { label: "0-2座" },
      { label: "3座" },
      { label: "4座" },
      { label: "5座" },
      { label: "6座以上" },
    ],
  },
  {
    title: "厢式",
    dataList: [
      { label: "两厢" },
      { label: "三厢" },
      { label: "SUV" },
      { label: "商务车" },
      { label: "客车" },
      { label: "跑车" },
      { label: "旅行车" },
    ],
  },
  {
    title: "排量",
    dataList: [
      { label: "1.0L及以下" },
      { label: "1.1-1.6L" },
      { label: "1.7-2.0L" },
      { label: "2.1-2.5L" },
      { label: "2.6-3.0L" },
      { label: "3.1-4.0L" },
      { label: "4.0L以上" },
    ],
  },
];
function getSiteCheckList(val) {
  // console.log(val.value);
}
function getTypeCheckList(val) {
  // console.log(val.value);
}
function getDisplacementCheckList(val) {
  // console.log(val.value);
}
</script>

<style lang="scss" scoped>
.filter {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  // justify-content: ;
  // justify-content:  space-between;
  flex-wrap: wrap;
  .el-form-item {
    margin-right: 20px;
  }
}
.btn {
  display: flex;
  padding: 0px 20px;
  align-items: flex-end;
  justify-content: space-between;
  // margin-bottom: 0px !important;
  // border: 1px solid red;
  .left {
    float: left;
    margin-bottom: 5px;
    // margin-bottom: 0px !important;
    .el-button {
      border-radius: 0px;
      margin: 0px;
    }
  }
  .right {
    margin-bottom: 5px;
    .el-button{
      background: #409eff;
      color: white;
    }
  }
}

.el-table :deep(.cell) {
  // border: 1px solid black;
  // display: flex;
  // flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
  // text-align: center;
}
.list {
  .el-table :deep(.cell) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}

.car-filter {
  padding: 10px 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    span {
      margin-right: 10px;
      width: 80px;
      text-align: center;
      // border: 1px solid red;
    }
  }
}
img {
  height: 70px;
  float: left;
}
</style>
