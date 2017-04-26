import angular from 'angular';

const Directive = () => {
  'ngInject';

  return {
    restrict: 'A',
    link() {

    },
  };
};

export default angular.module('{{ camelCase (pkg 'name') }}.{{ camelCase modulename }}.{{ camelCase name }}', [])
  .directive('{{ camelCase name }}', Directive);
