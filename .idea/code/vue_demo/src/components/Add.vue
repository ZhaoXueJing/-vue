<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      addComment: { // 指定属性名、属性值的类型、必要性
        type: Function,
        required: true
      }
    },
    data () {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      add () {
        /* 0. 检测输入的合法性
         !name || !content name 或者content 为false 的时候，他就不合法
         return 程序不能继续
        * 1. 根据输入的数据，封装成一个comment 对象
        * 2. 添加到comments 中
        * 3. 清空
        * */
        // 0. 检测输入的合法性
        const name = this.name.trim()
        const content = this.content.trim()
        if (!name || !content) {
          alert('姓名或内容不能为空')
          return
        }
        // 1. 根据输入的数据，封装成一个comment 对象
        const comment = {
          name,
          content
        }
        // 2. 添加到comments 中
        this.addComment(comment)
        // 3. 清空
        this.name = ''
        this.content = ''
      }
    }
  }
</script>

<style scoped>

</style>
