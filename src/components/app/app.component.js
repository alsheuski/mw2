import angular from 'angular';
import firebase from 'firebase';
import template from './app.html';

class controller {
  constructor($firebaseObject) {
    'ngInject';

    this.name = 'App';
    this.$firebaseObject = $firebaseObject;

    const ref = firebase.database().ref('expense/');
    this.data = $firebaseObject(ref);
  }
}

export default angular.module('app', [
  'ngMaterial',
]).component('app', {
  bindings: {},
  template,
  controller,
}).name;
