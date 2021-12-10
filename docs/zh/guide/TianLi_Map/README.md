---
title: TianLi_Map
---

# 原神自动地图 TianLi_Map [![Build status](https://ci.appveyor.com/api/projects/status/8kmemyn4jssya2xs?svg=true)](https://ci.appveyor.com/project/GengGode/genshinimpact-automap)

- 自动发现小地图上出现的神瞳并记录

- 自动记忆神瞳是否收集，判断显示哪些神瞳没被发现

- 神瞳已收集的话，神瞳就会变成半透明。

- `Alt+T` 或者地图任意位置左键双击开启关闭自动追踪，如果显示神瞳的话就会自动开始识别记录。

- 开启自动追踪，右下角图标会变成蓝色，根据电脑性能，3 至 60 秒即可加载完成，悬浮窗会自动显示角色所在位置的地图

## 使用方法 / Shortcuts

- `Alt + T` 开启关闭自动追踪

- `Alt + F` 添加删除自定义标记

- `Alt + Enter` 切换为无边框模式

- `Alt + M` 截图(Debug 用)

- `Alt + F8` 选择原神游戏窗口

- `左键拖动`地图

- `滚轮` 缩放地图显示

- `中键`移动窗口位置

- `左键双击`左上角派蒙退出

## 更新记录

```
    2021.10.03.21:52 添加了免责声明
    2021.10.03.21:45 添加了对【腾讯云游戏】的支持
    ---- 之前的忘了
```

## 无法使用？

1. 项目仅在有限的条件下测试过，如需排查错误，强烈建议按照以下描述进行环境配置。
   - 原神客户端 > 右上角派蒙 > 设置 > 抗锯齿，设置为 SMAA
   - 原神客户端 > 右上角派蒙 > 设置 > 分辨率，设置为 1920x1080
   - 系统 > 显示设置 > 文字缩放，设置为 100%
2. 请查看：[视频教程](#视频教程)
3. 提交[Issues](https://github.com/GengGode/TianLi_Map/issues)
4. 无论有没有问题，你都可以加群[♂](https://jq.qq.com/?_wv=1027&k=PBb6IKIY)

## Devs

[DLL 动态链接库](https://github.com/GengGode/GenshinImpact_AutoTrack_DLL)

<details>
  <summary>此项目的开发</summary>
 解压resource.rar在项目目录下，释放资源文件，否则编译不过。
 编译 MSBuild 即可，需要VS安装Qt VS Tools插件。

### 已经实现

- [√] 通过游戏内小地图，自动识别角色所在位置以及角色朝向

- [√] 添加了自动识别 UID

- [√] 检测游戏状态

- [√] 添加标记

- [√] 缩放改为以指针为中心

- [√] 根据数据库显示周围资源分布

- [√] 保存存档

- [√] 保存日志，包含可追溯数据，如存档损坏，可以此追溯

### 计划实现

- [ ] 添加更多点位

- [ ] 优化 UI（慢慢来）

- [ ] 优化匹配

- [ ] 添加图论部分实现导航收集某种资源的最短路径

- [ ] 添加惯性导航部分

### 开发环境

- Visual Studio 2017

- Qt5.14.2

- opencv4.5.0

### 工作原理

本地图是通过调用 Windows Api 来对原神的游戏窗口进行截屏，然后对画面进行图像处理，对地图与世界地图进行匹配来实现的自动追踪。

通过 Api 来设置地图为顶层窗口，使其保持在原神游戏窗口的上方。

目前所有涉及对原神窗口的操作如下：

```C++
 giHandle = FindWindowA(NULL, "原神"); //获取原神窗口句柄

 giIsDisplayFlag = !IsIconic(giHandle); //判断原神是否处于最小化

 GetWindowRect(giHandle, &giRect); //获取原神窗口区域

 HDC hScreen = GetDC(giHandle); //获取原神窗口画面，作用是截屏获取原神画面

 SetForegroundWindow(giHandle); //激活原神窗口为焦点

 if (giHandle != NULL) //判断原神窗口句柄是否为空

```

### 系统权限

之后的开发中将会涉及到数据文件的保存与读取，目前会在 Temp（目前版本应该会改到 My Game 目录下，Temp 下容易被删除）目录中建立名为 GenshinImpactAutoMap 的文件夹，并在该文件夹中建立数据存档。

（说不定会改到 AppData 下的 LocalLow 里）

如：`C:\Users\%USERNAME%\AppData\Local\Temp\GenshinImpactAutoMap`

日后可能会开发 GPU 加速图像处理的功能，需要使用 GPU 运算。

目前为了与“「空荧酒馆」原神地图”客户端通信还使用了本机的 23333 端口用来发送原神角色的位置、朝向以及 UID。

还有读写文件存档。

除此之外不存在其他系统资源的使用，也没有获取系统权限的需求。

</details>

## 已知问题

- 手柄适配 无
- 除 1920 \* 1080 外分辨率的 uid 识别 无
- 除 16 ：9 分辨率外的自动追踪 无

## 视频教程

### Bilibili

- [安装](https://www.bilibili.com/video/BV1Wy4y1x754)

- [使用](https://www.bilibili.com/video/BV1ar4y1A7c5)

## 交流

#### QQ 群：[538198823](https://jq.qq.com/?_wv=1027&k=PBb6IKIY)

## 免责声明

本项目不提供任何形式的保证。所有与使用本软件的直接风险均由用户承担。

如果您发现本软件包含错误或者有更好的建议，请联系我以便这些错误和建议得到及时的应用。

联系方式：ysx20201029@163.com
