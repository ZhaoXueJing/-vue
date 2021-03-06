//  vue 插件库
;(function (window) {
  /*需要向外暴露一个插件对象*/
  const MyPlugin = {}
  /*插件对象必须有一个install() 方法*/
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive----'+binding.value
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  window.MyPlugin = MyPlugin
})(window)
