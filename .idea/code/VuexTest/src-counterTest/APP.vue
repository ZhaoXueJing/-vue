<template>
  <div>
    <p>click {{ $store.state.count }} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        count: 0
      }
    },

    computed: {
/*      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      },*/
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },

    methods: {
/*      increment () {
        // 通知vuex 去增加  分发
        this.$store.dispatch('increment') // 触发store 中对应的action调用
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('decrement')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }*/
      ...mapActions
        (['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
  }
</script>

<style scoped>

</style>
