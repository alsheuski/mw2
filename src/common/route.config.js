import angular from 'angular';

import { appState } from '../components/app/app.route';

import {
  expenseState,
  expenseCreateState,
} from '../components/expense/expense.route';

const routeConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  $stateProvider.state(appState);

  $stateProvider.state(expenseState);
  $stateProvider.state(expenseCreateState);

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

export default angular.module('mw2Router', [
  'ui.router',
])
  .config(routeConfig)
.run(routeRun)
  .name;
