/**
 * Created by ImportNew on 2018/6/6.
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store // 注册上vuex的store: 所有组件对象都多一个属性$store
})
