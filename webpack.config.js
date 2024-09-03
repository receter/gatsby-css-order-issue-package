const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: __dirname + "/examples/src/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: __dirname + "/examples/src/index.js",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|woff2|woff)$/,
        type: 'asset',
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: true
            },
          },
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName:'[local]___[hash:base64:5]',
                exportLocalsConvention: 'dashesOnly',
                namedExport: true
              }
            },
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }
};
