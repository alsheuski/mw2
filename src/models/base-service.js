import angular from 'angular';

export default class BaseService {
  transformResponse(data) {
    try {
      const response = angular.fromJson(data);
      if (response.data) {
        Object.assign(response.data, {
          $meta: response.meta,
        });
        return response.data;
      }
      return response;
    } catch (e) {
      return [];
    }
  }

  responseInterceptor(response) {
    Object.assign(response.resource, {
      $meta: response.data.$meta,
    });
    return response.resource;
  }

  transformRequestFormData(data, headersGetter) {
    const headers = headersGetter();
    headers['Content-Type'] = undefined;

    if (angular.isUndefined(data)) {
      return data;
    }

    const fd = new FormData();
    angular.forEach(data, (value, key) => {
      if (value instanceof FileList) {
        if (value.length === 1) {
          fd.append(key, value[0]);
        } else {
          angular.forEach(value, (file, index) => {
            fd.append(`${key}_${index}`, file);
          });
        }
      } else {
        fd.append(key, value);
      }
    });

    return fd;
  }
}
