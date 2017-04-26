import angular from 'angular';

const Service = () => {
  'ngInject';

};

export default angular.module('{{ camelCase (pkg 'name') }}.{{ camelCase modulename }}.{{ camelCase name }}', [])
  .service('{{ camelCase name }}', Service)
  .name;
