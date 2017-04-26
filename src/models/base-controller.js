import angular from 'angular';

export default class BaseController {
  constructor({ $mdDialog, $mdToast } = {}) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.modelOptions = {
      updateOn: 'default blur',
      debounce: {
        default: 250,
        blur: 0,
      },
    };
    this.reqsCompleted = 0;
    this.reqsTotal = 0;
    this.$cancelRequest = angular.noop;
  }

  handleQuerySuccess(data) {
    if (data.$meta) {
      this.setPagination(data.$meta.pagination);
    }
  }

  togglePending(value) {
    if (value) {
      if (this.reqsTotal === 0) {
        this.isPending = true;
      }
      this.reqsTotal += 1;
    } else {
      this.reqsCompleted += 1;
      if (this.reqsCompleted >= this.reqsTotal) {
        this.isPending = false;
        this.reqsCompleted = 0;
        this.reqsTotal = 0;
      }
    }
  }

  handleSuccess(message = 'Successfully done!') {
    this.$mdToast.showSimple(message);
  }

  handleError(error, options = {}) {
    if (error.status >= 0 && error.status !== 401 && error.status !== 520) {  // 520 - shutdown mode
      const toast = this.$mdToast.simple().textContent(error.data.message);
      if (angular.isDefined(options.delay)) {
        toast.hideDelay(options.delay);
      }
      if (options.action) {
        toast.action(options.action);
      }
      return this.$mdToast.show(toast);
    }
    return error;
  }

  getPageParams() {
    const pagination = this.params.pagination;
    return {
      limit: pagination.limit,
      offset: (this.params.current - 1) * pagination.limit,
    };
  }

  getSortParams() {
    const sort = this.params.sort;
    if (angular.isDefined(sort) && sort !== '') {
      const desc = sort.startsWith('-');
      const key = sort.replace('-', '');
      return { [key]: desc ? 'desc' : 'asc' };
    }
    return null;
  }

  setPagination(pagination) {
    const current = parseInt(pagination.offset / pagination.limit, 10) + 1;
    this.params = Object.assign({}, this.params, { pagination, current });
  }

  handlePageChangeBasic(stateName) {
    this.$state.transitionTo(stateName, this.params);
  }

  getItems(service, method = 'query', options = {}) {
    this.togglePending(true);

    const params = Object.assign({}, {
      filter: this.params.filter,
      sort: this.getSortParams(),
      page: this.getPageParams(),
      type: this.params.type,
    }, options);

    this.items = service.resource[method](params);

    this.items.$promise
      .then(items => this.handleQuerySuccess(items))
      .catch(error => this.handleError(error))
      .finally(() => this.togglePending(false));

    return this.items.$promise;
  }

  $onDestroy() {
    if (this.items && this.items.$cancelRequest) {
      this.items.$cancelRequest();
    }
    if (this.$mdToast) {
      this.$mdToast.hide();
    }
  }
}
