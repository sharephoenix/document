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
        text: 'mogodb',
        items: [
          {
            text: 'MongoDB',
            link: '/cache/mongodb/mongodb'
          }
        ]
      },
      {
        text: 'redis',
        items: [
          {
            text: 'Redis',
            link: '/cache/redis/redis'
          },
          {
            text: 'LevelDB',
            link: '/cache/redis/leveldb'
          },
          {
            text: 'RocksDB',
            link: '/cache/redis/rocksdb'
          }
        ]
      },
      { 
        text: '数据库表',
        link: '/peddle_self/production/document'
      },
      { 
        text: 'weex',
        link: '/weex/weex'
      },
      { 
        text: 'flutter',
        link: '/flutter/primary/primary'
      },
      { 
        text: 'docker',
        link: '/docker/primary/primary'
      },
      { 
        text: '集群',
        link: '/cluster/cluster'
      },
      { 
        text: '服务器',
        link: '/server/server'
      },
      {
        text: 'vue入门',
        link: '/vue/primary/primary'
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
          },
          {
            text: 'mysql',
            link: '/issue/mysql'
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
      }
    ],
    sidebar: 'none',
    sidebar: {
      '/wiki/userwiki': [
        'userwiki',
        'encryption'
      ],
      '/docker/primary/primary': [
        'primary'
      ],
      '/flutter/primary/primary': [
        'primary'
      ],
      '/wiki/encryption': [
        'userwiki',
        'encryption'
      ],
      '/cache/mongodb/mongodb': [
        'mongodb',
        'intermediate'
      ],
      '/cache/mongodb/intermediate': [
        'mongodb',
        'intermediate'
      ],
      '/cache/redis/redis': [
        'redis',
        'rocksdb',
        'leveldb'
      ],
      '/cluster/cluster': [
        'cluster'
      ],
      '/vue/primary/primary': [
        'primary'
      ],
      '/server/server': [
        'server'
      ],
      '/golang/learning': [
        'learning',
        'weexdemogo/read'
      ],
      '/weexdemogo/read': [
        'learning',
        'weexdemogo/read'
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
        'thisweek',
        'weekpaper',
      ],
      '/weekpapers/thisweek': [
        'thisweek',
        'weekpaper',
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
        'golang',
        'mysql'
      ],
      '/issue/golang': [
        'vue',
        'golang',
        'mysql'
      ],
      '/issue/mysql': [
        'vue',
        'golang',
        'mysql'
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