import angular from 'angular';

import THEME_CSS from '../../theme/main.theme.scss';

const config = ($mdThemingProvider) => {
  'ngInject';

  $mdThemingProvider.registerStyles(THEME_CSS);

  $mdThemingProvider.theme('default');

  $mdThemingProvider.enableBrowserColor();
};

export default angular.module('fwcTheme', ['ngMaterial'])
  .config(config)
  .name;
