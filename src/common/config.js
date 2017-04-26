import angular from 'angular';

const config = ($compileProvider, $resourceProvider,
  jwtOptionsProvider, $httpProvider, $qProvider, $mdAriaProvider) => {
  'ngInject';

  const development = process.env.NODE_ENV === 'development';

  $compileProvider.debugInfoEnabled(development);
  $qProvider.errorOnUnhandledRejections(development);

  if (!development) {
    $mdAriaProvider.disableWarnings();
  }

  Object.assign($resourceProvider.defaults, {
    stripTrailingSlashes: true,
    cancellable: true,
    actions: {
      create: { method: 'POST' },
      save: { method: 'POST' },
      update: { method: 'PUT' },
      get: { method: 'GET' },
      query: { method: 'GET', isArray: true },
      remove: { method: 'DELETE' },
      delete: { method: 'DELETE' },
    },
  });

  jwtOptionsProvider.config({
    authHeader: 'X-Authorization',
    authPrefix: 'Bearer ',
    tokenGetter() {
      return localStorage.getItem('token');
    },
  });

  $httpProvider.interceptors.push('jwtInterceptor');
  Object.assign($httpProvider.defaults, { paramSerializer: '$httpParamSerializerJQLike' });
};

export default angular.module('fwcConfig', [])
  .config(config)
  .name;
