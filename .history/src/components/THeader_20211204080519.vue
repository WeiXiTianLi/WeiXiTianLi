<script setup lang="ts">

</script>

<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1"></el-menu-item>
    <el-sub-menu index="2">
      <template #title>下载</template>
      <el-menu-item index="2-1">Gitee</el-menu-item>
      <el-menu-item index="2-2">Github</el-menu-item>
      <el-menu-item index="2-3">这里</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3"></el-menu-item>
    <el-menu-item index="4"></el-menu-item>
  </el-menu>
</template>

<style scoped>
</style>
