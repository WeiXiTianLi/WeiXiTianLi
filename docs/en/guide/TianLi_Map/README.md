---
title: TianLi_Map
---

# TianLi_Map [![Build status](https://ci.appveyor.com/api/projects/status/8kmemyn4jssya2xs?svg=true)](https://ci.appveyor.com/project/GengGode/genshinimpact-automap)

- Automatically detect the gods that appear on a small map and record

- The automatic memory of the gods collected, and it is determined which gods have not been discovered.

- If God has collected, God will become translucent.

- `Alt + T` or map Arbitrary position left mart button Double-click to turn the automatic tracking, if you display the gods, you will automatically start the identification record.

- Turn on automatic tracking, the lower right corner icon will become blue, depending on the computer performance, 3 to 60 seconds can be loaded, the floating window will automatically display the map in the role

## Instructions / Shortcuts

- `Alt + T` Turn on automatic tracking

- `Alt + F` Add Delete Custom Tag

- `Alt + Enter` Switch to borderless pattern

- `Alt + M` screenshot (debug)

- `Alt + F8` Select the original god game window

- `Left button drag`

- `Roller` Zoom map display

- `Middle key` Mobile window location

- `Left button double click on the left corner` to exit

## Update record

    2021.10.03.21:52 Added a disclaimer
    2021.10.03.21:45 Added support for [Tencent Cloud Game]

## Not available?

1. The project is only tested under limited conditions. If you need to troubleshoot errors, it is highly recommended to configure environmental configuration as follows.
   - Original Word Client> Right Hole Pist> Settings> Anti-aliasing, set to SMAA
   - Original God Client> On the right corner, Pishan> Setting> resolution, set to 1920x1080
   - System> Display Settings> Text Zoom, Set to 100%
2. Check: [Video Tutorial](#video-tutorial)
3. Submit [Issues](https://github.com/GengGode/TianLi_Map/issues)
4. Whether there is a problem or not, you can add groups[♂](#communication)

## Devs

[DLL dynamic link library](https://github.com/GengGode/GenshinImpact_AutoTrack_DLL)

<details>
  <summary>Development of this project</summary>
 Unzip resource.rar in the project directory, release the resource file, otherwise compile.
 Compile MSBuild, you need to install the QT VS Tools plugin.

### Already implemented

- [√] The automatic identification UID

- [√] detection game status is added over the location of the game and the role of the game and the role direction

- [√] to detect the game status

- [√] Add tag

- [√] Zoom change to the pointerCenter

- [√] According to the database display surrounding resource distribution

- [√] Save Archive

- [√] Save the log, contains the traceability data, such as archive damage, can be traced back

### TODO

- [ ] Add more points

- [ ] Optimize UI（take your time）

- [ ] Optimization match

- [ ] Add a chart partial implementation navigation to collect the shortest path for some resource

- [ ] Add inertial navigation part

### Development environment

- Visual Studio 2017

- Qt5.14.2

- opencv4.5.0

### How it works

This map uses the Windows API to screen the game window, and then perform image processing on the screen, and match the map with the world map to automatically track.

The map is set as the top window by the API to keep it above the original gang game window.

All current operations involving the Genshin Impact window are as follows：

```C++
 giHandle = FindWindowA(NULL, "原神"); //Get the Genshin Impact window handle

 giIsDisplayFlag = !IsIconic(giHandle); //Determined whether the Genshin Impact is under minimization

 GetWindowRect(giHandle, &giRect); //Get the Genshin Impact window area

 HDC hScreen = GetDC(giHandle); //Get the Genshin Impact window screen, the role is to get the Genshin Impact screen.

 SetForegroundWindow(giHandle); //Activate the Genshin Impact window is focus

 if (giHandle != NULL) //Judging whether the Genshin Impact window handle is empty

```

### System permissions

The subsequent development will involve saving and reading of the data file. At present, it is currently in the TEMP (current version), which is easy to delete under the MY GAME directory.Data archiving is created in this folder.

（Maybe it will change to Locallow under AppData）

like：`C:\Users\%USERNAME%\AppData\Local\Temp\GenshinImpactAutoMap`

In the future, you may develop the function of the GPU accelerated image processing, you need to use the GPU operation.

In order to use the "Empty Ball" original god map "client communication, the 23333 port of this machine is used to send the position, orientation and UID of the original god role.

There is also a read and write file archive.

In addition, there is no use of other system resources, and there is no need to obtain system authority.

</details>

## Known issues

- Handle adaptation none
- Uid recognition with resolution other than 1920 \ * 1080 none
- Automatic tracking except 16:9 resolution none

## Video tutorial

### Bilibili

- [Install](https://www.bilibili.com/video/BV1Wy4y1x754)

- [Use](https://www.bilibili.com/video/BV1ar4y1A7c5)

## Communication

#### QQ Group：[538198823](https://jq.qq.com/?_wv=1027&k=PBb6IKIY)

## Disclaimers

The project does not provide any form of guarantee. All direct risks associated with the use of the software shall be borne by the user.

If you find that the software contains errors or have better suggestions, please contact me so that these errors and suggestions can be applied in time.

Contact information：ysx20201029@163.com
