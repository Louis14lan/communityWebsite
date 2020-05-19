const path = require('path')
const HtmlWebPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPlugin({
  template: path.join(__dirname, "src/index.html"),
  filename: "index.html"
})

module.exports = {
  mode: 'development',
  plugins: [htmlPlugin],
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      { test: /\.js|jsx$/, use: ['babel-loader'], exclude: [path.resolve(__dirname, 'node_modules')] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "@": path.join(__dirname, './src')
    }
  }
}
