import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "WeiXiTianLi",
  description: "WeiXiTianLi的网页",
  head: [["link", { rel: "icon", href: "images/logo.png" }]],

  themeConfig: {
    logo: "images/logo.png",
    navbar: [
      {
        text: "文档",
        children: [
          {
            text: "TianLi_Map",
            link: "/guide/TianLi_Map",
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
        ],
      },
    ],
    repo: "https://github.com/WeiXiTianLi",
    docsRepo: 'https://github.com/WeiXiTianLi/WeiXiTianTianLi',
    docsDir: 'docs',
    docsBranch: 'master'
  },
});
