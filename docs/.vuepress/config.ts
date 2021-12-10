import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "WeiXiTianLi",
  description: "WeiXiTianLi的网页",
  head: [["link", { rel: "icon", href: "images/logo.png" }]],

  themeConfig: {
    logo: null,
    navbar: [
      {
        text: "文档",
        children: [
          {
            text: "TianLi_Map",
            link: "/guide/TianLi_Map",
          },
          {
            text: "YuanShen_TrackFish",
            link: "/guide/YuanShen_TrackFish",
          },
          {
            text: "YuanShen_PopupMove",
            link: "/guide/YuanShen_PopupMove",
          },
        ],
      },
      {
        text: "下载",
        children: [
          {
            text: "TianLi_Map",
            link: "/download/TianLi_Map",
          },
          {
            text: "YuanShen_TrackFish",
            link: "/download/YuanShen_TrackFish",
          },
          {
            text: "YuanShen_PopupMove",
            link: "/download/YuanShen_PopupMove",
          },
        ],
      },
    ],
    repo: "https://github.com/WeiXiTianLi/WeiXiTianLi",
    docsRepo: "https://github.com/WeiXiTianLi/WeiXiTianTianLi",
    docsDir: "docs",
    docsBranch: "master",
  },
});
