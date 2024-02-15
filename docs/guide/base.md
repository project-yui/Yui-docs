# 基础教程

## 基本概念

Yukihana 通过 websocket/HTTP 等协议与外部进行通信；Yukihana 类似于一个 `服务器`，具体的机器人实现类似于 `客户端`。

## 下载服务端

1. 到发布页面进行下载：https://github.com/cuit-edu-cn/Yukihana-docs/releases
2. 下载后取得目标平台的文件

一般需要以下文件：

| 文件 | 作用 |
|------|------|
| index.js | 启动入口文件 |
| core.jsc | Yukihana核心文件 |

## 使用

安装/解压 Windows/Linux 的QQ。

> 注意：
> 
> 1. Windows 的 QQ.exe 需要进行patch操作以去除文件校验。
> 2. 程序不会出现任何界面，只有命令行。

### Windows

1. 将两个文件移动至：`ntqq/resources/app/app_launcher` 目录下，覆盖原文件。
2. 命令行打开ntqq文件夹，设置环境变量 `$Env:ELECTRON_RUN_AS_NODE=1` (powershell)。
3. 执行命令启动程序：`./QQ.exe ./resources/app/app_launcher/index.js`。

### Linux

> 对于Linux, 阁下需要自行处理依赖包问题。

1. 将两个文件移动至：`ntqq/resources/app/app_launcher` 目录下，覆盖原文件。
2. 命令行打开ntqq文件夹，设置环境变量 0`export ELECTRON_RUN_AS_NODE=1`。
3. 执行命令启动程序：`./qq ./resources/app/app_launcher/index.js`。

