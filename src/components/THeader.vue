<script setup lang="ts">
import router from '../router';
import { ref, unref, onMounted, computed } from 'vue'
import { Expand } from '@element-plus/icons'

const url = `https://${window.location.host}`;
const handleSelect = (key: any, keyPath: any) => {
  switch (key) {
    case 'doc-TianLi_Map':
      router.push({ path: '/tianli_map/doc' });
      break;
    case 'doc-YuanShen_TrackFish':
      break;
    case 'doc-YuanShen_PopupMove':
      break;
    case 'download-TianLi_Map':
      break;
    case 'download-YuanShen_TrackFish':
      break;
    case 'download-YuanShen_PopupMove':
      break;
  }
}
let menu_Collapse = ref(true)
const screenWidth = ref(document.body.clientWidth)
onMounted(() => {
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth
  }
})
//@ts-ignore
menu_Collapse.value = computed(() => {
  return screenWidth.value <= 700 ? true : false
})
//@ts-ignore
menu_Collapse = unref(menu_Collapse)
</script>

<template>
  <el-menu mode="horizontal" @select="handleSelect">
    <el-link class="title" :href="url" :underline="false">
      <span>WeiXiTianLi</span>
    </el-link>
    <el-sub-menu
      v-if="!menu_Collapse"
      show-timeout="50"
      hide-timeout="50"
      style="margin-left: auto;"
      index="doc"
    >
      <template #title>文档</template>
      <el-menu-item index="doc-TianLi_Map">TianLi_Map</el-menu-item>
      <el-menu-item index="doc-YuanShen_TrackFish">YuanShen_TrackFish</el-menu-item>
      <el-menu-item index="doc-YuanShen_PopupMove">YuanShen_PopupMove</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="download" v-if="!menu_Collapse" show-timeout="50" hide-timeout="50">
      <template #title>下载</template>
      <el-menu-item index="download-TianLi_Map">TianLi_Map</el-menu-item>
      <el-menu-item index="download-YuanShen_TrackFish">YuanShen_TrackFish</el-menu-item>
      <el-menu-item index="download-YuanShen_PopupMove">YuanShen_PopupMove</el-menu-item>
    </el-sub-menu>
    <el-link
      v-if="!menu_Collapse"
      href="https://github.com/WeiXiTianLi"
      :underline="false"
      target="_blank"
    >
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
    <el-sub-menu v-else style="margin-left: auto;" @select="handleSelect">
      <template #title>
        <el-icon>
          <expand />
        </el-icon>
      </template>
      <el-sub-menu index="doc" show-timeout="50" hide-timeout="50" style="margin-left: auto;">
        <template #title>文档</template>
        <el-menu-item index="doc-TianLi_Map">TianLi_Map</el-menu-item>
        <el-menu-item index="doc-YuanShen_TrackFish">YuanShen_TrackFish</el-menu-item>
        <el-menu-item index="doc-YuanShen_PopupMove">YuanShen_PopupMove</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="download" show-timeout="50" hide-timeout="50">
        <template #title>下载</template>
        <el-menu-item index="download-TianLi_Map">TianLi_Map</el-menu-item>
        <el-menu-item index="download-YuanShen_TrackFish">YuanShen_TrackFish</el-menu-item>
        <el-menu-item index="download-YuanShen_PopupMove">YuanShen_PopupMove</el-menu-item>
      </el-sub-menu>
      <el-link href="https://github.com/WeiXiTianLi" :underline="false" target="_blank">
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
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.el-link {
  padding: 0 20px;
  transition-duration: 0.2s;
  color: var(--el-text-color-primary);
}
.el-menu > .el-link {
  display: flex;
  margin: 0;
  padding: 10px;
  padding-left: 10px;
  justify-content: flex-start;
}
svg {
  vertical-align: middle;
}
.title {
  font-size: var(--el-font-size-extra-large);
  font-weight: var(--el-font-weight-primary);
  white-space: nowrap;
}
</style>
