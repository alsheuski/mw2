import angular from 'angular';
import template from './expense-create.html';

class controller {
  constructor($scope, $state) {
    'ngInject';

    this.name = 'ExpenseCreate';
    this.$scope = $scope;
    this.$state = $state;
  }

  submit() {
    console.log(this);

    this.$state.go('expense');
  }
}

export default angular.module('mw2ExpenseCreate', [
  'ngMaterial',
]).component('mw2ExpenseCreate', {
  bindings: {},
  template,
  controller,
}).name;
