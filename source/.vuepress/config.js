module.exports = {
  title: 'zthxxx',
  description: 'zthxxx\'s blog',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  theme: 'cherry',
  themeConfig: {
    docsRepo: 'zthxxx/zthxxx.github.io',
    docsDir: 'source',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: false,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '归档',
        link: '/posts/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    sidebar: 'auto',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['@vuepress/google-analytics', {
      ga: ''
    }],
  ],
}
