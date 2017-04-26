import angular from 'angular';
import {{ camelCase name }} from './{{ dashCase name }}.component';

const { module, inject } = angular.mock;

describe('Component: {{ camelCase name }}', () => {
  let component;
  let mock;
  let $componentController;

  beforeEach(module({{ camelCase name }}));

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
    mock = {};
  }));

  it('should assign the name bindings to the hero object', () => {
    component = $componentController('{{camelCase (pkg 'name')}}{{ pascalCase name }}',
      {},
      { mock },
    );
    expect(component.name).toBe('{{ pascalCase name }}');
  });
});
