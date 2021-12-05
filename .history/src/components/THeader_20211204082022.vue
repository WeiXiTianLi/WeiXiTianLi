<script setup lang="ts">
  const handleSelect = (key:any, keyPath:any) => {
    console.log(key, keyPath)
  }
</script>

<template>
  <el-menu mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" :class="el-menu-item">使用说明</el-menu-item>
    <el-sub-menu index="2">
      <template #title>下载</template>
      <el-menu-item index="2-1">Gitee</el-menu-item>
      <el-menu-item index="2-2">Github</el-menu-item>
      <el-menu-item index="2-3">This</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">Github</el-menu-item>
    <el-menu-item index="4">Gitee</el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-item {
  float: right;
}
</style>
