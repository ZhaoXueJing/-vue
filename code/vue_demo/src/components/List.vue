<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <!--交给item comment这个-->
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"
      :deleteComment="deleteComment" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    /*声明接受属性: 这个属性就会成为组件对象的属性
    * 这时候模板就可以读到他，相当于data里的数据
    * 就从vm---组件对象
    * */
    props: ['comments','deleteComment'], // 这种方式只是指定了属性名
    data () {
      /*this 不在是vm，是当前的组件对象，使用方式和vm 一样*/
      return {

      }
    },
    components: {
      Item
    }
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }

</style>
