/*
vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
相当于data对象的状态对象
 */
const state = {
  count: 0  // 指定初始化数据
}

/*
包含了n个直接更新状态的方法的对象
 */
const mutations = {
  /*增加的mutation*/
  INCREMENT (state) {
    state.count++
  },
  /*减少的mutation*/
  DECREMENT (state) {
    state.count--
  }
}

/*
包含了n个间接更新状态的方法的对象
 */
const actions = {
  /*增加的action  commit 方法*/
  increment ({commit}) {
    // 提交一个增加的mutation请求
    commit('INCREMENT')
  },
  /*减少的action*/
  decrement ({commit}) {
    // 提交一个mutation请求
    commit('DECREMENT')
  },
  /*带条件的action*/
  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      // 提交一个mutation请求
      commit('INCREMENT')
    }
  },
  /*异步的action*/
  incrementAsync ({commit}) {
    /*在action中执行异步代码*/
    setTimeout(() => {
      // 提交一个mutation请求
      commit('INCREMENT')
    }, 1000)
  },
}

/*
包含多个getter计算属性的对象
不需要调用，只需要读取
 */
const getters = {
  evenOrOdd (state) { // 当读取属性值时自动调用并返回属性值
    return state.count%2===0 ? '偶数' : '奇数'
  }
}


export default new Vuex.Store({
  state, // 状态对象
  mutations,  // 包含多个更新state 函数的对象
  actions,  // 包含多个对应事件回调函数的对象
  getters  // 包含多个getters 计算属性函数的对象
})
