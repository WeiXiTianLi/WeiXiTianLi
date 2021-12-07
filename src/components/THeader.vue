<script setup lang="ts">
import router from '../router';
import { ref, unref, onMounted, computed } from 'vue'
import { Expand } from '@element-plus/icons'

const url = `https://${window.location.host}`;
const handleSelect = (key: any, keyPath: any) => {
  switch (keyPath[0]) {
    case '1':
      router.push({ path: '/readme' });
      break;
    case '2':
      switch (keyPath[1]) {
        case '2-1':
          window.open('https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap/attach_files/861886/download/GenshinImpact_AutoMap.zip')
        case '2-2':
          window.open('/download/GenshinImpact_AutoMap.zip')
      }
      break;
  }
}
let smallMenu_show = ref(true)
const screenWidth = ref(document.body.clientWidth)
onMounted(() => {
  window.onresize = () => {
    screenWidth.value = document.body.clientWidth
  }
})
//@ts-ignore
smallMenu_show.value = computed(() => {
  return screenWidth.value <= 700 ? true : false
})
//@ts-ignore
smallMenu_show = unref(smallMenu_show)
</script>

<template>
  <el-menu mode="horizontal" @select="handleSelect">
    <el-link class="title" :href="url" :underline="false">
      <span>天理地图</span>
    </el-link>
    <el-menu-item v-if="!smallMenu_show" index="1" style="margin-left: auto;">
      <span>使用说明</span>
    </el-menu-item>
    <el-sub-menu v-if="!smallMenu_show" show-timeout="50" hide-timeout="50" index="2">
      <template #title>下载</template>
      <el-menu-item index="2-1">Gitee</el-menu-item>
      <el-menu-item index="2-2">Github</el-menu-item>
    </el-sub-menu>
    <el-link
      v-if="!smallMenu_show"
      href="https://github.com/WeiXiTianLi/TianLi"
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
    <el-link
      v-if="!smallMenu_show"
      href="https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap"
      :underline="false"
      target="_blank"
    >
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
    <el-sub-menu v-else style="margin-left: auto;" @select="handleSelect">
      <template #title>
        <el-icon>
          <expand />
        </el-icon>
      </template>
      <el-menu-item index="1">
        <span>使用说明</span>
      </el-menu-item>
      <el-sub-menu show-timeout="50" hide-timeout="50" index="2">
        <template #title>下载</template>
        <el-menu-item index="2-1">Gitee</el-menu-item>
        <el-menu-item index="2-2">Github</el-menu-item>
      </el-sub-menu>
      <el-menu-item>
        <el-link href="https://github.com/WeiXiTianLi/TianLi" :underline="false" target="_blank">
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
      </el-menu-item>
      <el-menu-item>
        <el-link
          href="https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap"
          :underline="false"
          target="_blank"
        >
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
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.el-link {
  padding: 0 20px;
  transition-duration: 0.2s;
  color: var(--el-text-color-primary);
}
.el-menu > .el-menu-item > .el-link {
  padding: 0 0px;
}
.el-menu > .el-menu-iem > .el-link > .el-link--inner {
  height: 1rem;
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
