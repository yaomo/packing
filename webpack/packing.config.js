export default {
  // 文件路径，所有目录都使用相对于项目根目录的相对目录格式
  path: {
    // 源文件目录
    src: 'src',
    // 静态文件目录
    assets: 'static',
    // 页面初始化mock数据文件存放目录
    mockPageInit: 'mock/pages',
    // webpack打包入口JS文件目录
    entries: 'src/entries/jade/{pagename}.js',
    // 模版目录，可能包含布局框架和页面级别模版
    templates: 'src/templates/markdown',
    // 网页级别模版目录
    templatesPages: 'src/templates/markdown',
    // 编译输出产物目录
    dist: 'prd',
    // 编译后的静态文件目录
    assetsDist: 'prd/assets',
    // 编译后的模版目录
    templatesDist: 'prd/templates',
    // 编译后网页级别模版目录
    templatesPagesDist: 'prd/templates/pages'
  },

  // 模版类型
  templateLoader: ['jade', 'markdown'],
  // 模版文件扩展名
  templateExtension: ['.jade', '.md'],

  // webserver端口
  port: {
    // 开发环境端口号
    dev: 3001,
    // 预览编译后结果的端口号
    dist: 8080,
  },

  commonChunks: {
    // CommonsChunkPlugin会将最后一个当作Entry chunk
    // Todo: 通过参数控制Entry chunk
    vendor: [
      'react',
      'react-dom',
      'classnames'
    ]
  },

  // URL转发路由规则配置
  // require! 表示使用本地mock文件
  rewriteRules: {
    '^/api/(.*)': 'require!/mock/api/$1.js',
    // '^/api/(.*)': '/index.jade.html',
    // '^/api/(.*)': 'http://touch.qunar.com/api/hotel/findhotelcity?cityName=%E5%8C%97%E4%BA%AC',
    // '^/hello': 'http://localhost:3001/123/4.html',
  },

};
