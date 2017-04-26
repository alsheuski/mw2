import angular from 'angular';
import app from './app.component';

const { module, inject } = angular.mock;

describe('Component: app', () => {
  let component;
  let mock;
  let $componentController;

  beforeEach(module(app));

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
    mock = {};
  }));

  it('should assign the name bindings to the hero object', () => {
    component = $componentController('mw2App',
      {},
      { mock },
    );
    expect(component.name).toBe('App');
  });
});
