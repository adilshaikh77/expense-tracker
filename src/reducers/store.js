import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./reducers/addIncome";
import numberOfSelectSourceOptions from "./reducers/numberOfSelectOptions";
import expenseListReducer from "./reducers/addToExpenseList";

const rootReducer = combineReducers({
  balance: balanceReducer,
  numberOfOptions: numberOfSelectSourceOptions,
  expenseListReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
