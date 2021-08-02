import * as path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer ?: WebpackDevServerConfiguration;
}
const config: Configuration = {
  mode: 'development',
  entry: {
    main: './src/main.ts',
    index: './src/pages/index/index.ts', // index页面
    hello: './src/pages/hello/hello.ts', // hello页面
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]/[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8088,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // 处理html文件中的img图片（负责引入img，从而能被url-loader进行处理）
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/pages/index/index.html',
      chunks: ['index', 'main'],
    }),
    new HtmlWebpackPlugin({
      title: 'hello',
      filename: 'hello.html',
      template: './src/pages/hello/hello.html',
      chunks: ['hello', 'main'],
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      exclude: '/node_modules/',
    }),
  ],
};

export default config;
