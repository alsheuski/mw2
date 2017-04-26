import webpack from 'webpack';  // eslint-disable-line
import webpackMerge from 'webpack-merge'; // eslint-disable-line
import ExtractTextPlugin from 'extract-text-webpack-plugin'; // eslint-disable-line
import CopyWebpackPlugin from 'copy-webpack-plugin'; // eslint-disable-line
import CompressionPlugin from 'compression-webpack-plugin'; // eslint-disable-line
import commonConfig from './webpack.common';
import helpers from './helpers';

export default env => webpackMerge(commonConfig(env), {
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader'] }),
      },
      {
        test: /\.scss$/,
        exclude: /\.theme.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      { test: /\.theme.scss$/, use: ['raw-loader', 'sass-loader'] },
    ],
  },
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, // prod
      mangle: { screw_ie8: true }, // prod
      compress: { screw_ie8: true, warnings: true }, // prod
      comments: false, // prod
      sourceMap: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 0 }),
    new ExtractTextPlugin('[name].[hash].css'),
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
});
