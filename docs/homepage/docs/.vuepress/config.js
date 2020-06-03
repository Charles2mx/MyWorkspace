module.exports = {
  base: '/MyWorkspace/',
  title: 'MyWorkspace',
  description: 'A personal work management toolbox,simple and practical.',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/Charles2mx/MyWorkspace',
    // 自定义仓库链接文字。
    repoLabel: 'MyWorkspace',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },
          { text: 'guide', link: '/guide/' },
          { text: 'wiki', link: '/wiki/' },
          { text: 'framework', link: '/framework/' }
        ],
        sidebar: {
          '/':['/', 'Home'],
          '/wiki/':['/wiki/', 'MyWorkspace']
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '维基', link: '/zh/wiki/' },
          { text: '框架', link: '/zh/framework/' }
        ],
        sidebar: {
          '/zh/': ['/', '首页'],
          '/zh/wiki/': ['/wiki/', 'MyWorkspace']
        }
      }
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/blog',
    '@vuepress/nprogress',
    '@vuepress/pwa',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
}