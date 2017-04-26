const webpackConfig = require('./webpack.test');
const karmaJasmine = require('karma-jasmine'); // eslint-disable-line
const karmaHtmlReporter = require('karma-htmlfile-reporter'); // eslint-disable-line
const karmaWebpack = require('karma-webpack'); // eslint-disable-line
const karmaSourcemap = require('karma-sourcemap-loader'); // eslint-disable-line
const karmaCoverage = require('karma-coverage'); // eslint-disable-line
const karmaLauncher = require('karma-phantomjs-launcher'); // eslint-disable-line

module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    plugins: [
      karmaJasmine,
      karmaHtmlReporter,
      karmaWebpack,
      karmaSourcemap,
      karmaCoverage,
      karmaLauncher,
    ],

    files: [
      { pattern: './config/karma-test-shim.js', watched: false },
      { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false },
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: 'errors-only',
    },

    webpackServer: {
      noInfo: true,
    },

    coverageReporter: {
      dir: 'coverage/',
      subdir: '.',
      reporters: [
        { type: 'cobertura', file: 'cobertura.xml' },
        { type: 'html' },
        { type: 'text-summary' },
      ],
    },


    client: {
      captureConsole: true,
    },

    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
  });
};
