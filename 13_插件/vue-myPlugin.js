(function (window) {

  // 定义插件对象
  const MyPlugin = {}

  // 所有的插件对象都必须有一个install方法
  MyPlugin.install = function (Vue, options) {
    console.log('MyPlugin.install()')
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue.myGlobalMethod()')
    }
  
    // 2. 添加一个全局资源(asset)
    Vue.directive('my-directive',(el, binding) => {
      el.innerText = binding.value + '--------'
    })
  
    // 4. 添加一个实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }

  // 暴露插件对象
  window.MyPlugin = MyPlugin
})(window)