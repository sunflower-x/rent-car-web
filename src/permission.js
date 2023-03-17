import router from "./router";
//路由进入前拦截
//to:将要进入的页面 vue-router4.0 不推荐使用next()
// 白名单
const whiteList = ["/login", "/404", "/401"];
router.beforeEach(async (to) => {
  // 进度条开始
  // 判断token是否存在
  let token = localStorage.getItem("token");
  if (token) {
    if (to.path === "/login") {
      return "/";
    } else {
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.path}`;
    } else {
      return true;
    }
  }
});
//路由进入后拦截
router.afterEach(() => {
  // 进度条结束
});
