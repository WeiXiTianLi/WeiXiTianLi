<script setup lang="ts">import router from '../router';

const handleSelect = (key: any, keyPath: any) => {
  switch (key) {
    case 1:
      console.log(1,"ok")
      break;
}
</script>

<template>
  <el-menu mode="horizontal" @select="handleSelect">
    <el-link href="https://weixitianlizhi.ren" target="_blank" :underline="false">TianLi_Map</el-link>
    <el-menu-item index="1" style="margin-left: auto;">
      <span>使用说明</span>
    </el-menu-item>
    <el-sub-menu show-timeout="50" hide-timeout="50" index="2">
      <template #title>下载</template>
      <el-menu-item index="2-1">Gitee</el-menu-item>
      <el-menu-item index="2-2">Github</el-menu-item>
      <el-menu-item index="2-3">This</el-menu-item>
    </el-sub-menu>
    <el-link href="github.com" :underline="false" target="_blank">
      Github
      <svg
        class="icon outbound"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="15"
        height="15"
        data-v-b8818f8c
      >
        <path
          fill="currentColor"
          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
        />
        <polygon
          fill="currentColor"
          points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
        />
      </svg>
    </el-link>
    <el-link href="gitee.com" :underline="false" target="_blank">
      Gitee
      <svg
        class="icon outbound"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="15"
        height="15"
        data-v-b8818f8c
      >
        <path
          fill="currentColor"
          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
        />
        <polygon
          fill="currentColor"
          points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
        />
      </svg>
    </el-link>
  </el-menu>
</template>

<style scoped>
.el-link {
  padding: 0 20px;
}
svg {
  vertical-align: middle;
}
</style>
