const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/script/main.js',
    login: './src/script/login.js',
    logout: './src/script/logout.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name]-[chunkhash].js',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index-[chunkhash].html',
      inject: false,
      chunks: ['main'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      title: 'webpack is awesome!',
      date: new Date(),
    }),
    new htmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login-[chunkhash].html',
      inject: true,
      chunks: ['login'],
      title: 'this is login.html',
    }),
    new htmlWebpackPlugin({
      template: './src/logout.html',
      filename: 'logout-[chunkhash].html',
      inject: true,
      chunks: ['logout'],
      title: 'this is logout.html',
    }),
  ],
}
