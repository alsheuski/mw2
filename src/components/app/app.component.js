import angular from 'angular';
import template from './app.html';

class controller {
  constructor() {
    'ngInject';

    this.name = 'App';
  }
}

export default angular.module('app', [
  'ngMaterial',
]).component('app', {
  bindings: {},
  template,
  controller,
}).name;
