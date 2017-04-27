import angular from 'angular';
import expense from './expense.component';

const { module, inject } = angular.mock;

describe('Component: expense', () => {
  let component;
  let mock;
  let $componentController;

  beforeEach(module(expense));

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
    mock = {};
  }));

  it('should assign the name bindings to the hero object', () => {
    component = $componentController('mw2Expense',
      {},
      { mock },
    );
    expect(component.name).toBe('Expense');
  });
});
