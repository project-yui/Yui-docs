import { defineConfig } from 'vitepress'
import markdownItTextualUml from 'markdown-it-textual-uml';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yukihana",
  description: "Yukihana 是一个基于国内流行im的机器人框架.",
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
            text: '通信模型',
            link: '/guide/communication'
          },
          {
            text: '使用Docker',
            link: '/guide/docker'
          },
        ] 
      },
      {
        text: 'API',
        items: [
          {
            text: '公共',
            link: '/api/common'
          },
          {
            text: '好友',
            link: '/api/friend'
          },
          {
            text: '群',
            link: '/api/group'
          },
          {
            text: '频道',
            link: '/api/guild'
          },
        ] 
      },
      {
        text: '参考',
        activeMatch: '/reference',
        items: [
          {
            text: 'Patch',
            link: '/reference/patch-v2',
            activeMatch: '/reference/patch',
          },
          {
            text: '消息定义',
            link: '/reference/message',
            activeMatch: '/reference/message',
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
            { text: '通信模型', link: '/guide/communication' },
            { text: '使用Docker', link: '/guide/docker' },
            { text: '性能', link: '/guide/performance' }
          ]
        }
      ],
      'api': [
        {
          text: 'API',
          items: [
            { text: 'Bot 账号', link: '/api/bot' },
            { text: '公共API', link: '/api/common' },
            { text: '好友API', link: '/api/friend' },
            { text: '群组API', link: '/api/group' },
            { text: '频道API', link: '/api/guild' }
          ]
        }
      ],
      'reference': [
        {
          text: 'Patch',
          items: [
            { text: '新Patch', link: '/reference/patch-v2' },
            { text: '旧Patch', link: '/reference/patch' }
          ]
        },
        {
          text: '消息定义',
          items: [
            { text: '基本结构', link: '/reference/message' },
            { text: '文本消息', link: '/reference/message/text' },
            { text: '图片消息', link: '/reference/message/image' },
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
      { icon: 'github', link: 'https://github.com/project-yukihana' }
    ]
  },
  markdown: {
    config(md) {
      md.use(markdownItTextualUml)
    }
  }
})
