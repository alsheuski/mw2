import angular from 'angular';

import app from './app/app.component';
import expense from './expense/expense.component';
import expenseCreate from './expense/expense-create/expense-create.component';
/* import component */

export default angular.module('mw2Components', [
  app,
  expense,
  expenseCreate,
/* add component dependency */
]).name;
