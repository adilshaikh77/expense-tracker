import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./reducers/addIncome";
import numberOfSelectSourceOptions from "./reducers/numberOfSelectOptions";

const rootReducer = combineReducers({
  balance: balanceReducer,
  numberOfOptions: numberOfSelectSourceOptions,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
