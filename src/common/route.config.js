import angular from 'angular';

import { appState } from '../components/app/app.route';

const routeConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  $stateProvider.state(appState);

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
};

const routeRun = ($transitions, $state) => {
  'ngInject';

  if (process.env.NODE_ENV !== 'development') {
    $state.defaultErrorHandler(angular.noop);
  }

  $transitions.onFinish(null, angular.noop); // fix ui-router dbl-click
};

export default angular.module('fwcRouter', [
  'ui.router',
])
  .config(routeConfig)
  .run(routeRun)
  .name;
