export const addBalance = (amount) => ({
  type: 'ADD_TO_BALANCE',
  payload: amount,
});

export const numberOfSelectSourceOptions = (number) => ({
  type: 'NUMBER_OF_SELECT_OPTIONS',
  payload: number,
});

export const addExpenseSourceToList = (source) => ({
  type: 'ADD_EXPENSE_SOURCE_TO_LIST',
  payload: source,
});

export const addExpenseAmountToList = (source) => ({
  type: 'ADD_EXPENSE_AMOUNT_TO_LIST',
  payload: source,
});
