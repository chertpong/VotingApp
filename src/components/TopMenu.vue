<template>
  <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Cakes</el-menu-item>
    <el-menu-item index="3">Drinks</el-menu-item>
    <el-submenu index="4">
      <template slot="title">Articles</template>
      <el-menu-item index="4-1">Cakes</el-menu-item>
      <el-menu-item index="4-2">Drinks</el-menu-item>
      <el-menu-item index="4-3">Others</el-menu-item>
    </el-submenu>
    <el-menu-item index="5">ORDER NOW</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect (key, keyPath) {
        if (key === '1') {
          this.$router.push({ name: 'home' })
        }
        console.log(key, keyPath)
      }
    }
  }
</script>