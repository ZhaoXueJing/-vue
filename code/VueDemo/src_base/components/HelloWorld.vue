<template>
  <div>
  <h2 class="title">{{msg}}</h2>
</div>
</template>

<script>
  export default { // 配置对象与vue 一致
    data () {   // data 必须是函数
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
