import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入中文
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

// 引入normalize.css
import "normalize.css";
import "./assets/style/index.scss"
// 引入store
import store from "./store/index";

// 引入element icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 引入路由守卫
import './permission'

// 引入自动注册全局主键插件
import components from "./utils/globalComponents";


const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(components)
app.use(ElementPlus, {
  locale: zhCn,
});
// app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");
