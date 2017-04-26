import angular from 'angular';

const Provider = () => {
  'ngInject';

  return {

    $get() {
      return {

      };
    },
  };
};


export default angular.module('{{ camelCase (pkg 'name') }}.{{ camelCase modulename }}{{ camelCase name }}Provider', [])
  .provider('{{ camelCase name }}', Provider);
