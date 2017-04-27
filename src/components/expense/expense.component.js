import angular from 'angular';
import template from './expense.html';

class controller {
  constructor() {
    'ngInject';

    this.name = 'Expense';
  }
}

export default angular.module('mw2Expense', [
  'ngMaterial',
]).component('mw2Expense', {
  bindings: {},
  template,
  controller,
}).name;
