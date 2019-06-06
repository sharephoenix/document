module.exports = {
  title: 'Touch',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { 
        text: 'dashboard',
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
        text: 'Document',
        link: '/peddle_self/production/document'
      },
      {
        text: 'weekpaper',
        link: '/weekpapers/index'
      },
    ],
    sidebar: 'auto'
  }
}