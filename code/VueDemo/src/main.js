/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
/* index 可以省略不写*/
import router from './router'

/* eslint-disable no-new */
new Vue({  // 配置对象的属性名一些确定的名称，不能随便随便修改
  el: '#app',
  // components: {App: App} 下面是简写
  components: { App }, // 映射组件标签
  template: '<App/>', // 指定需要渲染到页面的模板
  router  // 注册路由器
})
