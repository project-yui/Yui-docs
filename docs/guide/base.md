# 基础教程

## 基本概念

Yui 通过 websocket/HTTP 等协议与外部进行通信；Yui 类似于一个 `服务器`，具体的机器人实现类似于 `客户端`。

## 下载服务端

### 公开成品

> 公开成品使用js字节码进行“加密”，依赖于特定版本的内部虚拟机，可能会无法使用。

1. 到发布页面进行下载：https://github.com/project-yui/Yui-docs/releases
2. 下载后取得目标平台的文件

### 自行构建（仅限校内）

1. 点击进入页面右上角的仓库（私有）
2. 依照仓库中的文档从源码进行构建

### 产物

不管您是使用公开成品，还是自行构建，一般会得到以下文件：

| 文件 | 作用 |
|------|------|
| index.js | 启动入口文件 |
| core.jsc | Yui核心文件 |

## 使用

安装/解压 Windows/Linux 的im。

> 注意：
> 
> 1. ~~Windows 的 im.exe 需要进行patch操作以去除文件校验。(参考：[patch](../reference/patch))~~ 本程序不会受到文件校验影响。
> 2. 程序不会出现任何界面，只有命令行。

### Windows

1. 将两个文件移动至：`im/resources/app/app_launcher` 目录下，覆盖原文件。
2. 命令行打开im文件夹，设置环境变量 `$Env:ELECTRON_RUN_AS_NODE=1` (powershell)。
3. 执行命令启动程序：`./im.exe ./resources/app/app_launcher/index.js`。

### Linux

> 对于Linux, 阁下需要自行处理依赖包问题。

1. 将两个文件移动至：`im/resources/app/app_launcher` 目录下，覆盖原文件。
2. 命令行打开im文件夹，设置环境变量 `export ELECTRON_RUN_AS_NODE=1`。
3. 执行命令启动程序：`./im ./resources/app/app_launcher/index.js`。

