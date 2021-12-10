import type { NavbarConfig } from "@vuepress/theme-default";

export const zh: NavbarConfig = [
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
];
