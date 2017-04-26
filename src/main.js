import angular from 'angular';
import common from './common';
import components from './components';
import './theme/main.scss';

angular.module('fwc', [
  'ngResource',
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngMessages',
  'ngSanitize',
  'ui.router',
  'angular-jwt',
  'md.data.table',
  common,
  components,
]).constant('APP_CONSTANTS', {});

angular.bootstrap(document.documentElement, ['fwc'], {
  strictDi: true,
});
