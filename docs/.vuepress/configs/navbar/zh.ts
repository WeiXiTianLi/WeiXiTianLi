import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
  {
    text: "文档",
    children: [
      {
        text: "TianLi_Map",
        link: "/zh/guide/TianLi_Map",
      },
      {
        text: "YuanShen_TrackFish",
        link: "/zh/guide/YuanShen_TrackFish",
      },
      {
        text: "YuanShen_PopupMove",
        link: "/zh/guide/YuanShen_PopupMove",
      },
    ],
  },
  {
    text: "下载",
    children: [
      {
        text: "TianLi_Map",
        link: "/zh/download/TianLi_Map",
      },
      {
        text: "YuanShen_TrackFish",
        link: "/zh/download/YuanShen_TrackFish",
      },
      {
        text: "YuanShen_PopupMove",
        link: "/zh/download/YuanShen_PopupMove",
      },
    ],
  },
];
