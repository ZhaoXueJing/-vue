<template>
  <!--
    面试题： @mouseenter   @mouseleave 区别？
  -->
  <li :style="{background: bgColor}"
      @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {// 指定属性名和属性值的类型
      todo: Object,
      deleteTodo: Function,
      index: Number
    },

    data () {
      return {
        bgColor: 'white', // 默认默认背景颜色
        isShow: false  // 按钮默认是否显示
      }
    },

    methods: {
      handleEnter (isEnter) {
        if(isEnter) { // 进入
          this.bgColor = '#cccccc'
          this.isShow = true
        } else { // 离开
          this.bgColor = '#ffffff'
          this.isShow = false
        }

      },

      deleteItem () {
        //this.deleteTodo(this.index)
        const {todo, index, deleteTodo} = this
        if(window.confirm(`确认删除${todo.title}吗？`)){
          deleteTodo(this.index)
        }
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
