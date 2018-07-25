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
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {

    mounted () {
      console.log(this.$store)
    },

    /*computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },*/
    /*
    * mapGetters() 返回值对象
    * */
    computed: {
      /*mapState() 返回值： {count () { return this.$store.state['count']}  } */
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },

    /*methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      }
    }*/
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
  }
</script>

<style>

</style>
