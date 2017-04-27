// eslint-disable-next-line
export const expenseState = {
  name: 'expense',
  url: '/expense',
  views: {
    main: {
      component: 'mw2Expense',
    },
  },
};

export const expenseCreateState = {
  name: 'expenseCreate',
  parent: 'expense',
  url: '/create',
  views: {
    'main@': {
      component: 'mw2ExpenseCreate',
    },
  },
};
