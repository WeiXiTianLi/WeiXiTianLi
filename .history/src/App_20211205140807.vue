<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import THeader from './components/THeader.vue'

</script>

<template>
  <el-container>
    <el-header>
      <t-header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
  .el-header {
    position: fixed;
  }
</style>
