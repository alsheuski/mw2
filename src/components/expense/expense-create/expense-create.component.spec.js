import angular from 'angular';
import expenseCreate from './expense-create.component';

const { module, inject } = angular.mock;

describe('Component: expenseCreate', () => {
  let component;
  let mock;
  let $componentController;

  beforeEach(module(expenseCreate));

  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
    mock = {};
  }));

  it('should assign the name bindings to the hero object', () => {
    component = $componentController('mw2ExpenseCreate',
      {},
      { mock },
    );
    expect(component.name).toBe('ExpenseCreate');
  });
});
