import angular from 'angular';
import common from './common';
import components from './components';
import './theme/main.scss';

angular.module('mw2', [
  'ngResource',
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngMessages',
  'ngSanitize',
  'ui.router',
  'angular-jwt',
  'md.data.table',
  'firebase',
  common,
  components,
]).constant('APP_CONSTANTS', {});

angular.bootstrap(document.documentElement, ['mw2'], {
  strictDi: true,
});
