<template>
  <el-container>
    <el-aside width="200px">
      <asidemenu></asidemenu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <headermenu></headermenu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import asidemenu from './aside';
  import headermenu from './header'
    export default {
        name: "",
      components: {asidemenu,headermenu}
    }
</script>

<style scoped>

</style>
