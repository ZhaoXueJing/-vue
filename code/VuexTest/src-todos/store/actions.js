/*
包含n个用于间接更新状态的方法的对象模块
包含多个接收组件通知触发mutation 调用间接状态的方法对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS} from './mutation-types'

export default {

  addTodo ({commit}, todo) {
    // 提交一个comutation请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },

  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll ({commit}, isCheck) {
    commit(SELECT_ALL_TODOS, {isCheck})
  },

  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  }
}
