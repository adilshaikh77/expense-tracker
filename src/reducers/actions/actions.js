export const addBalance = (amount) => ({
  type: "ADD_TO_BALANCE",
  payload: amount,
});

export const numberOfSelectSourceOptions = (number) => ({
  type: "NUMBER_OF_SELECT_OPTIONS",
  payload: number,
});

export const addExpenseSourceToList = (source) => ({
  type: "ADD_EXPENSE_SOURCE_TO_LIST",
  payload: source,
});

export const addExpenseAmountToList = (source) => ({
  type: "ADD_EXPENSE_AMOUNT_TO_LIST",
  payload: source,
});

export const subtractBalance = (amount) => ({
  type: "SUBTRACT_FROM_BALANCE",
  payload: amount,
});

export const clearExpenseList = () => ({
  type: "CLEAR_EXPENSE_LIST",
  payload: [],
});

export const clearBalance = () => ({
  type: "CLEAR_BALANCE",
  payload: [],
});
