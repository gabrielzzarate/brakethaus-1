const path = require('path');
const _HtmlWebpackPlugin = require('html-webpack-plugin');


const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  template: path.join(__dirname, '../index.template.html'),
  hash: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: false,
    useShortDoctype: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,

  }
});


module.exports = {
  HtmlWebpackPlugin,
}