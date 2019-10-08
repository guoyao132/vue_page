const HtmlWebpackPlugin = require('html-webpack-plugin');

const PAGE_ENTRIES = [
  'page1',
  // 'page2',
];
// let env = process.env.NODE_ENV;
// if ( env == 'production' || env == 'test' || env == 'dev' || env == 'rc') {
//   basturl = process.env.VUE_APP_BASEURL;
// }


module.exports = {
  devServer: {
    historyApiFallback: {  //当页面为404时，找到原先页面对应的首页
      rewrites: PAGE_ENTRIES.map(v => ({
        from: new RegExp(`^\\/${v}`),
        to: `/${v}.html`,
      })),
    },
  },
  chainWebpack: config => {
    //配置webpack输出
    config.entryPoints.delete('app')
    config.plugins.delete('html')
    PAGE_ENTRIES.forEach(v => {
      config.entry(v).add(`./src/entries/${v}/main.js`)
      config.plugin(`html-${v}`).use(HtmlWebpackPlugin, [{
        templateParameters: {
          BASE_URL: '/',
        },
        template: `./src/entries/${v}/index.html`,
        entry: `./src/entries/${v}/main.js`,
        filename: `${v}.html`,
        inject: true,
        excludeChunks: PAGE_ENTRIES.filter(item => item !== v),
      }]).before('preload')
    })
  },
};
