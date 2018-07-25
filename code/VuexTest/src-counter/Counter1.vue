<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {

    mounted () {
      console.log(this.$store)
    },

    computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        /*不用调用*/
        return this.$store.getters.evenOrOdd
      }
    },

    methods: {
      increment () {
        /*通知vuex 去更新初始化数据*/
        this.$store.dispatch('increment') // 触发store中的actions 调用(对应)
      },
      decrement () {
        /*通知vuex 去更新初始化数据*/
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        /*通知vuex 去更新初始化数据*/
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        /*通知vuex 去更新初始化数据*/
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style>

</style>
