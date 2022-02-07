import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";
import { navbar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "WeiXiTianLi",
      description: "WeiXiTianLi的网页",
    },
    "/en/": {
      lang: "en-US",
      title: "WeiXiTianLi",
      description: "WeiXiTianLi's webpage",
    },
  },

  themeConfig: {
    logo: null,
    locales: {
      "/": {
        navbar: navbar.zh,
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        selectLanguageName: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        contributors: false,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
          "锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷",
          "烫烫烫烫烫烫烫烫烫烫烫烫烫烫烫",
        ],
        backToHome: "返回首页",

        //a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
      },
      "/en/": {
        navbar: navbar.en,
        selectLanguageText: "Languages",
        selectLanguageAriaLabel: "Languages",
        selectLanguageName: "English",
        contributors: false,
      },
    },
    repo: "WeiXiTianLi/WeiXiTianLi",
    docsDir: "docs",
    docsBranch: "master",
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索文档',
            hotKeys: ['/']
          }
        }
      }
    ]
  ]
});
