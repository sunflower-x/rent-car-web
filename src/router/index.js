import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  // 路由还需要再以后进行优化配置,添加属性
  {
    path: "/",
    component:()=> import("../views/Layout/index.vue"),
    redirect: "/order",
    name: "layout",
    meta: {},
  },

  // 订单管理
  {
    path: "/order",
    redirect: "/order/AllOrder",
    component:()=> import("../views/Layout/index.vue"),
    name: "order",
    meta: { name: "订单管理", icon: "icon-dingdan" },
    children: [
      {
        path: "/order/AllOrder",
        component:()=> import("../views/OrderManagement/allOrder/index.vue"),
        name: "AllOrder",
        meta: { name: "全部订单" },
      },
      {
        path: "/order/PickUpCar",
        component:()=> import("../views/OrderManagement/pickUpCar/index.vue"),
        name: "PickUpCar",
        meta: { name: "待取车" },
      },
      {
        path: "/order/ReturnCar",
        component:()=> import("../views/OrderManagement/returnCar/index.vue"),
        name: "ReturnCar",
        meta: { name: "待还车" },
      },
      {
        path: "/order/EnterpriseOrder",
        component:()=> import("../views/OrderManagement/enterpriseOrder/index.vue"),
        name: "EnterpriseOrder",
        meta: { name: "企业订单" },
      },
    ],
  },

  // 车辆信息管理
  {
    path: "/carInfo",
    redirect: "/carInfo/carManagement",
    component:()=> import("../views/Layout/index.vue"),
    name: "carInfo",
    meta: { name: "车辆信息管理", icon: "icon-cheliangguanli" },
    children: [
      {
        path: "/carInfo/carManagement",
        component:()=> import("../views/CarInfo/carManagement/index.vue"),
        // component: import("../views/OrderManagement/EnterpriseOrder.vue"),
        name: "carManagement",
        meta: { name: "车辆管理" },
      },
      {
        path: "/carInfo/vehicleDispatch",
        component:()=> import("../views/CarInfo/vehicleDispatch/index.vue"),
        name: "vehicleDispatch",
        meta: { name: "车辆调度" },
      },
      {
        path: "/carInfo/modelManagement",
        component:()=> import("../views/CarInfo/modelManagement/index.vue"),
        name: "modelManagement",
        meta: { name: "车型管理" },
      },
    ],
  },

  // 车辆服务管理
  {
    path: "/vehicleService",
    redirect: "/vehicleService/insure",
    component:()=> import("../views/Layout/index.vue"),
    name: "vehicleService",
    meta: { name: "车辆服务管理", icon: "icon-cheliangzhuanru" },
    children: [
      {
        path: "/vehicleService/insure",
        component:()=> import("../views/vehicleService/insure.vue"),
        name: "insure",
        meta: { name: "保险到期车辆" },
      },
      {
        path: "/vehicleService/annualInspection",
        component:()=> import("../views/vehicleService/annualInspection.vue"),
        name: "annualInspection",
        meta: { name: "待年检车辆" },
      },
      {
        path: "/vehicleService/maintaining",
        component:()=> import("../views/vehicleService/maintaining.vue"),
        name: "maintaining",
        meta: { name: "保养车辆" },
      },
      {
        path: "/vehicleService/remind",
        component:()=> import("../views/vehicleService/remind.vue"),
        name: "remind",
        meta: { name: "提醒设置" },
      },
    ],
  },

  // 门店管理
  {
    path: "/storeManagement",
    redirect: "/storeManagement/management",
    component:()=> import("../views/Layout/index.vue"),
    name: "storeManagement",
    meta: { name: "门店管理", icon: "icon-mendianliebiao" },
    children: [
      {
        path: "/storeManagement/management",
        component:()=> import("../views/storeManagement/storeManagement/index.vue"),
        name: "management",
        meta: { name: "门店管理" },
      },
      {
        path: "/storeManagement/staff",
        component:()=> import("../views/storeManagement/staff.vue"),
        name: "staff",
        meta: { name: "员工管理" },
      },
    ],
  },

  // 客户管理
  {
    path: "/customerManagement",
    redirect: "/customerManagement/management",
    component:()=> import("../views/Layout/index.vue"),
    name: "customerManagement",
    meta: { name: "客户管理", icon: "icon-kehu" },
    children: [
      {
        path: "/customerManagement/personal",
        component:()=> import("../views/customerManagement/personal.vue"),
        name: "personal",
        meta: { name: "个人客户" },
      },
      {
        path: "/customerManagement/enterprise",
        component:()=> import("../views/customerManagement/enterprise.vue"),
        name: "enterprise",
        meta: { name: "企业客户" },
      },
      {
        path: "/customerManagement/blacklist",
        component:()=> import("../views/customerManagement/blacklist.vue"),
        name: "blacklist",
        meta: { name: "黑名单" },
      },
    ],
  },

  // 统计分析
  {
    path: "/statisticalAnalysis",
    redirect: "/statisticalAnalysis/user",
    component:()=> import("../views/Layout/index.vue"),
    name: "statisticalAnalysis",
    meta: { name: "统计分析", icon: "icon-tongji" },
    children: [
      {
        path: "/statisticalAnalysis/user",
        component:()=> import("../views/statisticalAnalysis/user/index.vue"),
        name: "user",
        meta: { name: "用户统计" },
      },
      {
        path: "/statisticalAnalysis/order",
        component:()=> import("../views/statisticalAnalysis/order/index.vue"),
        name: "orderCount",
        meta: { name: "订单统计" },
      },
      {
        path: "/statisticalAnalysis/car",
        component:()=> import("../views/statisticalAnalysis/car/index.vue"),
        name: "car",
        meta: { name: "车辆统计" },
      },
    ],
  },

  // 系统设置
  {
    path: "/setting",
    redirect: "/setting",
    component:()=> import("../views/Layout/index.vue"),
    name: "setting",
    meta: { name: "系统设置", icon: "icon-31shezhi" },
    children: [
      {
        path: "/setting",
        component:()=> import("../views/setting.vue"),
        name: "setting",
        meta: { name: "系统设置" },
      },
    ],
  },

  {
    path: "/login",
    component: ()=>import("../views/Login/index.vue"),
    name: "login",
    meta: {},
  },
];

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
