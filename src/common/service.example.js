import angular from 'angular';
import BaseService from '../models/base-service';

class Categories extends BaseService {
  constructor($resource) {
    'ngInject';

    super();
    this.resource = $resource('/api/v1/categories/:id/', {
      id: '@id',
    }, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: this.transformResponse,
        interceptor: {
          response: this.responseInterceptor,
        },
      },
    });
  }
}

export default angular.module('mw2CategoriesService', [])
  .service('Categories', Categories)
  .name;
