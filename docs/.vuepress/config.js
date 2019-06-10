module.exports = {
  title: 'Touch',
  description: 'Just playing around',
  themeConfig: {
    date_format: 'yyyy-MM-dd',
    nav: [
      { 
        text: '后台',
        items: [
          {
            text: 'golang',
            link: '/peddle_self/dashboard/golang'
          },
          {
            text: 'redis',
            link: '/peddle_self/dashboard/redis'
          },
          {
            text: 'mogodb',
            link: '/peddle_self/dashboard/mogodb'
          },
          {
            text: 'mysql',
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
        text: 'issue',
        items: [
          {
            text: 'vue',
            link: '/issue/vue'
          },
          {
            text: 'golang',
            link: '/issue/golang'
          }
        ]
      },
      {
        text: '工作周报',
        link: '/weekpapers/weekpaper'
      }
    ],
    // sidebar: 'auto'
    sidebar: {
      '/peddle_self/dashboard/database': [
        'database'
      ],
      '/vue/problem': [
        'problem'
      ],
      '/peddle_self/production/document': [
        'document'
      ],
      '/weekpapers/weekpaper': [
        'weekpaper'
      ],
      '/peddle_self/dashboard/golang': [
        'golang'
      ],
      '/peddle_self/dashboard/redis': [
        'redis',
        'mogodb'
      ],
      '/issue/vue': [
        'vue',
        'golang'
      ],
      '/issue/golang': [
        'vue',
        'golang'
      ]     
    }
  }
}