import angular from 'angular';
import icStar from 'material-design-icons/toggle/svg/production/ic_star_24px.svg';

export default angular.module('mw2Icons', [
  'ngMaterial',
]).config(($mdIconProvider) => {
  'ngInject';

  $mdIconProvider.icon('star', icStar, 24);
}).name;
