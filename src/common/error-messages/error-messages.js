import angular from 'angular';
import template from './error-messages.template.html';

export default angular.module('appErrorMessages', [
  'ngMessages',
]).run(($templateCache) => {
  'ngInject';

  $templateCache.put('error-messages', template);
}).name;
