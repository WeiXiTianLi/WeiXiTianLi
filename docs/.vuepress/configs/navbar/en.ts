import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  {
    text: "Docs",
    children: [
      {
        text: "TianLi_Map",
        link: "/en/guide/TianLi_Map",
      },
      {
        text: "YuanShen_TrackFish",
        link: "/en/guide/YuanShen_TrackFish",
      },
      {
        text: "YuanShen_PopupMove",
        link: "/en/guide/YuanShen_PopupMove",
      },
    ],
  },
  {
    text: "Download",
    children: [
      {
        text: "TianLi_Map",
        link: "/en/download/TianLi_Map",
      },
      {
        text: "YuanShen_TrackFish",
        link: "/en/download/YuanShen_TrackFish",
      },
      {
        text: "YuanShen_PopupMove",
        link: "/en/download/YuanShen_PopupMove",
      },
    ],
  },
  {
    text: "Communication",
    children: [
      {
        text: "QQ Group",
        children: [
          {
            text: "538198823",
            link: "https://jq.qq.com/?_wv=1027&k=PBb6IKIY",
          },
        ],
      },
      {
        text: "Email",
        children: [
          {
            text: "ysx20201029@163.com",
            link: "mailto:ysx20201029@163.com",
          },
        ],
      },
    ],
  },
];
