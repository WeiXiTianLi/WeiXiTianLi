<script setup lang="ts">
import Readme from '../assets/README.md'
import 'github-markdown-css'

</script>

<template>
  <readme class="markdown-body" />
</template>

<style scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>