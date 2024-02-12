import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yukihana",
  description: "Yukihana 是一个基于NTQQ的机器人框架.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '入门',
        items: [
          {
            text: '简介',
            link: '/guide/intro'
          },
          {
            text: '基础教程',
            link: '/guide/base'
          },
          {
            text: '配置',
            link: '/guide/config'
          },
        ] 
      },
      { text: '关于', link: '/about' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: {
      'guide': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/guide/intro' },
            { text: '基础教程', link: '/guide/base' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      'config': [
        {
          text: 'Examples2',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cuit-edu-cn/Yukihana' }
    ]
  },
})
