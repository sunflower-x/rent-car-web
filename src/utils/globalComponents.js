/* 
    全局组件的自动注册
    利用vite里的api和vue的插件机制实现
*/
import { defineAsyncComponent } from 'vue';
 const componentsName = import.meta.globEager('../components/GlobalComponents/*/index.vue');
 const components = import.meta.glob('../components/GlobalComponents/*/index.vue'); 
  export default function install(app) {
   for (const [key, value] of Object.entries(components)) {
    // 注册组件名字   没有抛出Name， 引用文件组件文件夹名字
     const name = componentsName[key].default.name || key.slice(31, key.lastIndexOf('/'));
     app.component(name, defineAsyncComponent(value));
   }
 }
