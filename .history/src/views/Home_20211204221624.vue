<script setup lang="ts">
import { ref } from 'vue'
import router from "../router"

const downloadDialogVisible = ref(false)
const handleClose = (select :any) => {
  switch (select) {
    case 'gitee':
      window.open('https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap/attach_files/861886/download/GenshinImpact_AutoMap.zip')
      downloadDialogVisible.value = false
      break;
    case 'github':
      window.open('/download/GenshinImpact_AutoMap.zip')
      downloadDialogVisible.value = false
      break;
  }
}
const handleClick = (from: any) => {
  switch (from) {
    case 'download':
      downloadDialogVisible.value = true;
      break;
    case 'readme':
      router.push({ path: "/readme" })
      break;
  }
}
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
    <el-button type="primary" @click="handleClick('download')" plain>下载</el-button>
    <el-button type="primary" @click="handleClick('readme')">使用说明</el-button>
  </p>
  <el-dialog v-model="downloadDialogVisible" title="下载" width="30%">
    <span>您打算从哪个源下载？</span>
    <template #footer>
      <span>
        <el-button @click="handleClose('github')" type="primary" plain>Github</el-button>
        <el-button @click="handleClose('gitee')" type="primary">Gitee</el-button>
      </span>
    </template>
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
p>.el-button {
  height: 3rem;
}
.el-button {
  transition-duration: 0.4s;
}
</style>
