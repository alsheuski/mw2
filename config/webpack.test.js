module.exports = {
  devtool: 'source-map',
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      { test: /\.js$/, loader: 'isparta-loader', exclude: [/\.spec\.js$/, /node_modules/, /config/], enforce: 'pre' },
      {
        test: /\.spec\.js$/,
        enforce: 'pre',
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
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'null-loader' },
      { test: /\.css$/, loader: 'null-loader' },
      { test: /\.scss$/, loader: 'null-loader' },
    ],
  },
};
