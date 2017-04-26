import angular from 'angular';

function httpInterceptor($timeout, $rootScope, $q) {
  'ngInject';

  let totalRequestsCount = 0;
  let completedRequestsCount = 0;
  const latencyThreshold = 400;

  let startTimeout;

  const setCompleted = function setCompleted() {
    $timeout.cancel(startTimeout);
    completedRequestsCount = 0;
    totalRequestsCount = 0;
  };

  return {
    request(config) {
      if (!config.ignoreProgress) {
        if (totalRequestsCount === 0) {
          startTimeout = $timeout(() => {
            $rootScope.$broadcast('progress:start');
          }, latencyThreshold);
        }
        totalRequestsCount += 1;
      }
      return config;
    },

    response(response) {
      if (!response || !response.config) {
        return response;
      }

      if (!response.config.ignoreProgress) {
        completedRequestsCount += 1;
        if (completedRequestsCount >= totalRequestsCount) {
          $rootScope.$broadcast('progress:finish');
          setCompleted();
        }
      }
      return response;
    },

    responseError(response) {
      if (!response.data || !response.data.message) {
        Object.assign(response, {
          data: Object.assign({}, response.data, {
            message: 'Oops, something went wrong, please try again later ',
          }),
        });
      }

      if (!response.config.ignoreProgress) {
        completedRequestsCount += 1;
        if (completedRequestsCount >= totalRequestsCount) {
          $rootScope.$broadcast('progress:finish');
          setCompleted();
        }
      }

      return $q.reject(response);
    },
  };
}

export default angular.module('mw2HttpInterceptor', [
  'ui.router',
]).config(($httpProvider) => {
  'ngInject';

  $httpProvider.interceptors.push(httpInterceptor);
}).name;
