import { combineReducers, configureStore } from '@reduxjs/toolkit';
import balanceReducer from './reducers/balanceReducer';
import numberOfSelectSourceOptions from './reducers/numberOfSelectOptions';
import expenseListReducer from './reducers/addToExpenseList';

const rootReducer = combineReducers({
  balanceReducer,
  numberOfSelectSourceOptions,
  expenseListReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
