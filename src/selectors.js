export const selectBalance = (state) => state.balance.balance;

export const numberOfOptions = (state) =>
  state?.numberOfOptions?.numberOfOptions;

export const expenseList = (state) => state.expenseListReducer.list;
