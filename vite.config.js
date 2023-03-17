import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/style/flex.scss" as *;`,
      },
    },
  },
  // 热启动
  /*  devServer: {
    hot: true, //自动保存
    open: true, //自动启动
    port: 8080, //默认端口号
    host: "0.0.0.0",
    public: '0.0.0.0:9528',
  }, */
  //vite.config.ts
  server: {
    port: "3000",
    open: true, //自动打开
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      /* "^/api": {
        target: "http://localhost:8080", // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ""),
      }, */
    },
  },
});
