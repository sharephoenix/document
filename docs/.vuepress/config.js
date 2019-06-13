const basePath = 'post'

module.exports = {
  title: 'Touch',
  description: 'Just playing around',
  // dest: basePath,
  base: `/blog/`,
  serviceWorker: true,
  evergreen: true,
  ga: 'UA-112738831-1',
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
        text: '算法',
        link: '/arithmetic/home'
      },
      { 
        text: 'j2objc',
        link: '/javaoc/javaoc'
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
        text: 'golang',
        link: '/golang/learning'
      },
      {
        text: 'webpack',
        link: '/webpack/learning'
      },
      {
        text: '工作周报',
        link: '/weekpapers/weekpaper'
      }
    ],
    // sidebar: 'auto'
    sidebar: {
      '/golang/learning': [
        'learning'
      ],
      '/webpack/learning': [
        'learning'
      ],
      '/javaoc/javaoc': [
        'javaoc'
      ],
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
      ],
      '/arithmetic/home': [
        'home',
        'js',
        'java',
        'swift',
        'golang'
      ],
      '/arithmetic/js': [
        'home',
        'js',
        'java',
        'swift',
        'golang'
      ],
      '/arithmetic/java': [
        'home',
        'js',
        'java',
        'swift',
        'golang'
      ],
      '/arithmetic/swift': [
        'home',
        'js',
        'java',
        'swift',
        'golang'
      ],
      '/arithmetic/golang': [
        'home',
        'js',
        'java',
        'swift',
        'golang'
      ]
    }
  }
}