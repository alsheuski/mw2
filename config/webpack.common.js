/* eslint-disable */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DotenvPlugin from 'webpack-dotenv-plugin';
import Dotenv from 'dotenv'
import helpers from './helpers';
import autoprefixer from 'autoprefixer';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

Dotenv.config();

export default (env = {}) => ({
  entry: {
    polyfill: 'babel-polyfill',
    vendor: './src/vendor.js',
    app: './src/main.js',
  },
  resolve: {
    modules: [helpers.root('src'), 'node_modules'],
    extensions: ['.js', '.scss'],
  },
  module: {
    rules: [
      ...(env.noLint ? [] : [{ test: /\.js$/, exclude: /node_modules/, use: ['source-map-loader', 'eslint-loader'], enforce: 'pre' }]),
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }]],
            plugins: [
              'syntax-dynamic-import',
              'angularjs-annotate',
              ['transform-runtime', {
                polyfill: false,
                regenerator: true,
              }],
            ],
          },
        },
      },
      { test: /\.html$/, loader: 'html-loader', options: { minimize: true } },
      { test: /\.(woff|woff2|ttf|eot)$/, loader: 'file-loader', options: { name: 'assets/fonts/[name].[hash].[ext]' } },
      { test: /\.hbs$/, loader: 'handlebars-loader', options: { inlineRequires: '/img/' } },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'url-loader',
        options: { limit: 100000, name: 'assets/images/[name].[hash].[ext]' },
      },
    ],
  },
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
        sassLoader: {
          includePaths: [helpers.root('src', 'theme')],
        },
        context: '/',
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfill',
      chunks: ['polyfill', 'vendor'],
      minChunks: Infinity,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor', 'app'],
      minChunks: Infinity,
    }),

    new HtmlWebpackPlugin({
      chunks: ['polyfill', 'vendor', 'app'],
      template: 'src/index.ejs',
    }),

    new DotenvPlugin({ sample: './.env.sample', path: './.env' }),
    new FaviconsWebpackPlugin(helpers.root('assets', 'favicon.svg')),
  ],
});
