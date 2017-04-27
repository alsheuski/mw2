import angular from 'angular';
import firebase from 'firebase';
import template from './expense-create.html';

class controller {
  constructor($scope, $state, $firebaseArray) {
    'ngInject';

    this.name = 'ExpenseCreate';
    this.$scope = $scope;
    this.$state = $state;

    this.ref = firebase.database().ref().child('expense');
    this.expense = $firebaseArray(this.ref);
  }

  submit() {
    this.expense.$add({
      amount: this.amount,
      title: this.title,
      date: new Date(this.date).getTime(),
    }).then(() => {
      this.$state.go('expense');
    });
  }
}

export default angular.module('mw2ExpenseCreate', [
  'ngMaterial',
]).component('mw2ExpenseCreate', {
  bindings: {},
  template,
  controller,
}).name;
