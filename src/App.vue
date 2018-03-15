<template>
  <!--<div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>{{message}}</p>
    <input v-model="message">
    <a href="./first">点击我跳转第一页</a>
    <a href="./second">点击我跳转第二页</a>
    <router-view></router-view>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>-->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import firstcomponent from './component/firstcomponent';
  import asidemenu from './component/aside';
  import headermenu from './component/header'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App, Hello VUE!',
      message: 'Hello VUE!'
    }
  },
  components: {firstcomponent,asidemenu,headermenu}
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

</style>
