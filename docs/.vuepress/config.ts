import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions } from "vuepress-vite";
import { navbar } from "./configs";

export default defineUserConfig<DefaultThemeOptions>({
  head: [["link", { rel: "icon", href: "images/logo.png" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "WeiXiTianLi",
      description: "WeiXiTianLi的网页",
    },
    en: {
      lang: "en-US",
      title: "WeiXiTianLi",
      description: "WeiXiTianLi's webpage",
    },
  },

  themeConfig: {
    logo: null,
    locales: {
      "/": {
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        selectLanguageName: "简体中文",
      },
      "/en/": {},
    },
    navbar: navbar.zh,
    repo: "WeiXiTianLi/WeiXiTianLi",
    docsDir: "docs",
    docsBranch: "master",
  },
});
