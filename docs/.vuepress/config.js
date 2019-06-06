module.exports = {
  title: 'Touch',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { 
        text: '后台',
        items: [
          {
            text: 'server',
            link: '/peddle_self/dashboard/server'
          },
          {
            text: 'cache',
            link: '/peddle_self/dashboard/cache'
          },
          {
            text: 'database',
            link: '/peddle_self/dashboard/database'
          },
          {
            text: 'web',
            link: '/peddle_self/dashboard/web'
          }
        ] 
      },
      { 
        text: '数据库表',
        link: '/peddle_self/production/document'
      },
      {
        text: '工作周报',
        link: '/weekpapers/index'
      },
    ],
    sidebar: 'auto'
  }
}