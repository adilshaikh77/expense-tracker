const initialState = {
  balance: 0,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BALANCE":
      const newBalance = action.payload;
      if (newBalance < 0) {
        return state;
      } else {
        return {
          ...state,
          balance: newBalance,
        };
      }

    default:
      return state;
  }
};

export default balanceReducer;
