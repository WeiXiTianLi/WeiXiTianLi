<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import THeader from './components/THeader.vue'

</script>

<template>
  <el-container>
    <el-header>
      <div class="t-header">
        <t-header />
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
  .t-header {
    position: fixed;
  }
</style>
