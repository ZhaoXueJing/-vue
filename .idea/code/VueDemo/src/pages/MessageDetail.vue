<template>
  <ul>
    <!--前面路由也有传id-->
    <li>id: {{$route.params.id}}</li>
    <li>title: {{detail.title}}</li>
    <li>content: {{detail.content}}</li>
  </ul>
</template>

<script>
  const messageDetails = [
    {id: 1, title: 'Message001', content: 'message content00111....'},
    {id: 3, title: 'Message003', content: 'message content00222....'},
    {id: 5, title: 'Message005', content: 'message content00333....'}
  ]
  export default {
    data() {
      return {
        detail: {}
      }
    },
    /*mounted 在一个组件生命周期中执行一次*/
    mounted () {// 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
      const id = this.$route.params.id
      this.detail = messageDetails.find(detail => detail.id===id*1)
    },

    watch: {
      /*改变当前路由组件参数时，$route也会发生改变
      * $route: function ()  也可以传一个参数
      * */
      $route: function () { // 改变当前路由组件参数数据时自动调用
        console.log('$route()')
        const id = this.$route.params.id
        /*find 方法第一个参数是数组每一次迭代的元素*/
        this.detail = messageDetails.find(detail => detail.id===id*1)
      }
    }
  }
</script>

<style>

</style>
