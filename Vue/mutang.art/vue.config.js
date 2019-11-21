module.exports = {
    publicPath: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: '', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    pages: {
        //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {
            //除了 entry 之外都是可选的
            entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
            template: 'public/index.html', // 模板来源
            filename: 'index.html', // 在 dist/index.html 的输出
            title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        },
        console: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/console/console.js',
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/console.html',
            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'console.html',
            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'console page',
            // 包含的模块，可选项
            chunks: ['console']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        // client: 'src/modules/client/client.js',
        client: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/client/client.js',
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/client.html',
            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'client.html',
            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'client page',
            // 包含的模块，可选项
            chunks: ['client']
        },
    },
    // lintOnSave: true, // 是否在保存的时候检查
    // productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    // css: {
    //   extract: true, // 是否使用css分离插件 ExtractTextPlugin
    //   sourceMap: false, // 开启 CSS source maps
    //   loaderOptions: {}, // css预设器配置项
    //   modules: false // 启用 CSS modules for all css / pre-processor files.
    // },
    //反向代理
    // devServer: {
    //   // 环境配置
    //   host: '192.168.1.53',
    //   port: 8080,
    //   https: false,
    //   hotOnly: false,
    //   open: true, //配置自动启动浏览器
    //   proxy: {
    //     // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
    //     // '/api': {
    //     //   target: 'http://192.168.1.248:9888',
    //     //   // target: 'http://192.168.1.4:8999',
    //     //   pathRewrite: {
    //     //     '^/api': '/api'
    //     //   }
    //     // }
    //   }
    // },
    devServer: {
        port: 8888,
    },
    // pluginOptions: {
    //   // 第三方插件配置
    //   // ...
    // }
}


