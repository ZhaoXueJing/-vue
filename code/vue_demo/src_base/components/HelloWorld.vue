<!--创建vue 代码模板   seting filecodeTemplate
  1. 右键 vue 名字出现模板
-->
<template>
  <div>
  <h2 class="title">{{msg}}</h2>
</div>
</template>

<script>
  // 向外暴露配置对象
  export default { // 配置对象与vue 一致
    data () {   // 组件里data 必须是函数
      return {
        msg: '第一个Vue组件'
      }
    }
  }
</script>

<style scoped>

  .title {
    color: red;
    background: yellow;
  }
</style>
