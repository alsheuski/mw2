import angular from 'angular';

const Config = () => {
  'ngInject';

};

export default angular.module('{{ camelCase (pkg 'name') }}.{{ camelCase name }}Config', [])
  .config('{{ camelCase name }}', Config);
