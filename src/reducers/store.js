import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./reducers/addIncome";

const store = configureStore({
  reducer: balanceReducer,
});

export default store;
