import angular from 'angular';
import template from './{{ dashCase name }}.html';

class controller {
  constructor() {
    'ngInject';

    this.name = '{{ pascalCase name }}';
  }
}

export default angular.module('{{ camelCase (pkg 'name') }}{{ pascalCase name }}', [
  'ngMaterial',
]).component('{{ camelCase (pkg 'name') }}{{ pascalCase name }}', {
  bindings: {},
  template,
  controller,
}).name;
