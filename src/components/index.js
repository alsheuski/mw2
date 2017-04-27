import angular from 'angular';

import app from './app/app.component';
import expense from './expense/expense.component';
/* import component */

export default angular.module('mw2Components', [
  app,
  expense,
/* add component dependency */
]).name;
