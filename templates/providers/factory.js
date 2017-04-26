import angular from 'angular';

const Factory = () => {
  'ngInject';

  return {

  };
};

export default angular.module('{{ camelCase (pkg 'name') }}.{{ camelCase modulename }}.{{ camelCase name }}', [])
  .factory('{{ camelCase name }}', Factory);
