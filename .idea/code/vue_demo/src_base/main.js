/*
入口JS 创建Vue 实例
 import Vue from 'vue'  记住左边大写右边小写
 */
import Vue from 'vue'
import App from './App.vue'

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板(渲染到 el: '#app' 里)
})
