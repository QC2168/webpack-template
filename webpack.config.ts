import * as path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ESLintPlugin from 'eslint-webpack-plugin';
import { getPages } from './src/uilts';

const { entrys, htmlPlugins } = getPages('./src/pages/**/*');

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  entry: entrys,
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
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
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
    ...htmlPlugins,
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      exclude: '/node_modules/',
    }),
  ],
};

export default config;
