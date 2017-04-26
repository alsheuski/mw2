import angular from 'angular';

import router from './route.config';
import config from './config';
import errorMessages from './error-messages/error-messages';
import httpInterceptor from './http-interceptor';
import icons from './icons/icons';
import theme from './theme/theme';

export default angular.module('fwcCommon', [
  router,
  config,
  errorMessages,
  httpInterceptor,
  icons,
  theme,
]).name;
