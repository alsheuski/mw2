import angular from 'angular';
import firebase from 'firebase';
import template from './expense.html';

class controller {
  constructor($scope, $firebaseArray) {
    'ngInject';

    this.name = 'Expense';
    this.$scope = $scope;

    this.ref = firebase.database().ref().child('expense');
    this.expenses = $firebaseArray(this.ref);
  }
}

export default angular.module('mw2Expense', [
  'ngMaterial',
]).component('mw2Expense', {
  bindings: {},
  template,
  controller,
}).name;
