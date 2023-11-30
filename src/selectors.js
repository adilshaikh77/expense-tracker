import { createSelector } from '@reduxjs/toolkit';

export const selectBalance = (state) => state.balanceReducer?.balance;

export const numberOfOptions = (state) =>
  state?.numberOfSelectSourceOptions?.numberOfOptions;

export const expenseList = createSelector(
  (state) => state.expenseListReducer?.expenseSource,
  (state) => state.expenseListReducer?.expenseAmount,
  (expenseSource, expenseAmount) => ({
    expenseSource,
    expenseAmount,
  })
);
