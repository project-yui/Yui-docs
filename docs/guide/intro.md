# 简介

基于NTQQ底层组件实现，脱离 `Electron` UI层依赖，没有不必要的占用。

## 占用情况

### Electron Hook实现

![electron-ui](./pic/electron-ui.png)

### 直接调用底层实现

一开始：

![electron-ui](./pic/electron-node1.png)

一段时间：

![electron-ui](./pic/electron-node2.png)