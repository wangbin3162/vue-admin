module.exports = {
  title: 'vue-admin-doc',
  description: 'vue element admin',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vue-admin/docs/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'bin-ui', link: 'https://wangbin3162.github.io/docs/bin-ui/' },
      { text: '预览', link: 'https://wangbin3162.github.io/preview/vue-admin/' },
      { text: '2.0版本', link: 'https://github.com/wangbin3162/bin-admin' },
      { text: 'GitHub', link: 'https://github.com/wangbin3162/vue-admin' }
    ],
    sidebar: {
      // 第一组侧边栏
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ['/guide/', '介绍'],
            ['/guide/base', '一、基本准备'],
            ['/guide/start', '二、开始实现'],
            ['/guide/component', '三、组件解析'],
            ['/guide/third', '四、第三方库']
          ]
        }
      ]
    }
  }
}

