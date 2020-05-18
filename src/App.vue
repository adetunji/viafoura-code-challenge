<template>
  <div id="app">
    <Comment msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Comment from './components/Comment.vue'

export default {
  name: 'App',
  components: {
    Comment
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
