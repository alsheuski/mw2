import ProgressBarPlugin from 'progress-bar-webpack-plugin'; // eslint-disable-line
import webpackMerge from 'webpack-merge'; // eslint-disable-line
import ExtractTextPlugin from 'extract-text-webpack-plugin'; // eslint-disable-line
import commonConfig from './webpack.common';
import helpers from './helpers';

const API_URL = process.env.API_URL;

// env as argument in here is not same as process.env, but closer to process.argv
export default (env = {}) => webpackMerge(commonConfig(env), {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader'] }),
      },
      { test: /\.theme.scss$/, use: ['raw-loader', 'sass-loader'] },
      {
        test: /\.scss$/,
        exclude: /.theme.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        }),
      },
    ],
  },
  output: {
    path: helpers.root('dist'),
    publicPath: `http://${env.host}:${env.port}/`,
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
  },
  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: 'minimal',
    port: env.port,
    inline: true,
    proxy: {
      '/api/*': { target: API_URL, secure: false, changeOrigin: true },
    },
  },
  plugins: [
    new ProgressBarPlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
});
