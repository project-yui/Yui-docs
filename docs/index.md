---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Yui"
  text: "基于 Telecord 的机器人框架"
  tagline: 面向低占用场景的 Node.js 机器人框架
  actions:
    - theme: brand
      text: 介绍
      link: /guide/intro
    - theme: alt
      text: API 示例
      link: /api-examples

features:
  - title: 低占用
    details: 直接使用 Node.js 启动，无需 Electron UI 进程
  - title: 协议清晰
    details: 以 WebSocket + HTTP 提供动作调用与文件辅助能力
  - title: 不掉线
    details: 至少一周不掉线，稳定可靠（由于更新重启，未测试到更长时间）
---

