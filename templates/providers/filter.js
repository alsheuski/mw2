import angular from 'angular';

const Filter = () => {
  'ngInject';

  return (input) => {

    return input;
  };
};

export default angular.module('{{ camelCase (pkg 'name') }}.{{ camelCase modulename }}.{{ camelCase name }}', [])
  .filter('{{ camelCase  name }}', Filter);
