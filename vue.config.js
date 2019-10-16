// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const PAGE_ENTRIES = [
//   'page1',
//   // 'page2',
// ];
let env = process.env.NODE_ENV;
let obj = {};
if ( env == 'page1') {
  obj = {
    page1: {
      entry: './src/entries/page1/main.js',
      template: './src/entries/page1/index.html',
      filename: 'page1.html',
    },
  };
}else if(env == 'page2'){
  obj = {
    page2: {
      entry: './src/entries/page2/main.js',
      template: './src/entries/page2/index.html',
      filename: 'page2.html',
    }
  };
}else{
  obj = {
    page1: {
      entry: './src/entries/page1/main.js',
      template: './src/entries/page1/index.html',
      filename: 'page1.html',
    },
    page2: {
      entry: './src/entries/page2/main.js',
      template: './src/entries/page2/index.html',
      filename: 'page2.html',
    },
  }
}


module.exports = {
  publicPath: './',
  pages: obj
  // devServer: {
  //   historyApiFallback: {  //当页面为404时，找到原先页面对应的首页
  //     rewrites: PAGE_ENTRIES.map(v => ({
  //       from: new RegExp(`^\\/${v}`),
  //       to: `/${v}.html`,
  //     })),
  //   },
  // },
  // chainWebpack: config => {
  //   //配置webpack输出
  //   config.entryPoints.delete('app')
  //   config.plugins.delete('html')
  //   PAGE_ENTRIES.forEach(v => {
  //     config.entry(v).add(`./src/entries/${v}/main.js`)
  //     config.plugin(`html-${v}`).use(HtmlWebpackPlugin, [{
  //       templateParameters: {
  //         BASE_URL: '/',
  //       },
  //       template: `./src/entries/${v}/index.html`,
  //       entry: `./src/entries/${v}/main.js`,
  //       filename: `${v}.html`,
  //       inject: true,
  //       excludeChunks: PAGE_ENTRIES.filter(item => item !== v),
  //     }]).before('preload')
  //   })
  // },
};
