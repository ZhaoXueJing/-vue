/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
/*
* 1. 引入的是组件，还可以引入别的组件
* */
import {Button} from 'mint-ui'

// 2. 注册成标签(全局) 1：组件名 2：
/*
* 每一个组件都有一个他的默认的值，用name 属性可以取到
* */
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
