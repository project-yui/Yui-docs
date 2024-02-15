# 简介

本文档将国内流行即时聊天工具简称为im。

基于im底层组件实现，脱离 `Electron` UI层依赖，没有不必要的占用。

## 通信协议

目前仅支持正向Websocket。

通信格式参考 onebot，但不完全一致，因为有些定义并不符合实际场景。

## 占用情况

### Electron Hook实现

![electron-ui](./pic/electron-ui.png)

### 直接调用底层实现

一开始：

![electron-ui](./pic/electron-node1.png)

一段时间：

![electron-ui](./pic/electron-node2.png)