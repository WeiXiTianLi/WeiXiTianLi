<script setup lang="ts">
import router from "../router"
import yuanshi_image from '../assets/yuanshi_image.png'
import { ArrowDown } from '@element-plus/icons'

const handleClick = (from: any) => {
  switch (from) {
    case 'github':
      window.open('https://github.com/WeiXiTianLi');
      break;
  }
}
const handleCommand = (from: any) => {
  switch (from) {
    case 'TianLi_Map':
      router.push({ path: "/tianli_map/doc" });
      break;
    case 'YuanShen_TrackFish':
      break;
    case 'YuanShen_PopupMove':
      break;
  }
}
</script>

<template>
  <div class="main">
    <el-image class="logo" :src="yuanshi_image" alt="failed" title="paimeng" />
    <h1>WeiXiTianLi</h1>
    <p>维系天理</p>
    <p>
      <el-button class="el-button big" type="primary" @click="handleClick('github')" plain>
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
      </el-button>
      <el-dropdown @command="handleCommand">
        <el-button class="el-button big" type="primary">
          文档
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="TianLi_Map">TianLi_Map</el-dropdown-item>
            <el-dropdown-item command="YuanShen_TrackFish">YuanShen_TrackFish</el-dropdown-item>
            <el-dropdown-item command="YuanShen_PopupMove">YuanShen_PopupMove</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </p>
  </div>
</template>

<style scoped>
svg {
  vertical-align: text-top;
}
.logo {
  min-width: 100px;
  min-height: 100px;
  max-height: 280px;
  max-width: 280px;
  border-radius: 26px;
}
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
h1 {
  font-size: 3rem;
  color: var(--el-text-color-primary);
}
p {
  font-size: 1.6rem;
  color: var(--el-text-color-regular);
}
.el-button.big {
  height: 3rem;
  margin-left: 10px;
}
.el-button {
  transition-duration: 0.4s;
}
.el-dropdown-menu__item {
  transition-duration: 0.4s;
}
</style>
