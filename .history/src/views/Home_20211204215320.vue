<script setup lang="ts">
import { ref } from 'vue'
import router from "../router"

const handleClick = (e: any) => {
  router.push({ path: "/readme" })
}
const downloadDialogVisible = ref(false)
</script>

<template>
  <el-image
    class="logo"
    src="https://website-1252418465.cos-website.ap-hongkong.myqcloud.com/paimeng_image.png"
    alt="failed"
    title="paimeng"
  />
  <h1>天理地图</h1>
  <p>麻麻再也不用担心我找不到神瞳了</p>
  <p>
    <el-button type="primary" plain>下载</el-button>
    <el-button type="primary" @click="handleClick">使用说明</el-button>
  </p>
  <el-dialog
  v-model="downloadDialogVisible"
  title="下载"
  width="30%"
  >
  </el-dialog>
</template>

<style scoped>
.logo {
  max-height: 280px;
  max-width: 280px;
  border-radius: 26px;
}
h1 {
  font-size: 3rem;
  color: var(--el-text-color-primary);
}
p {
  font-size: 1.6rem;
  color: var(--el-text-color-regular);
}
.el-button {
  transition-duration: 0.4s;
  height: 3rem;
}
</style>
