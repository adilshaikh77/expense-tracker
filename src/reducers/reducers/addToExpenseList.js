const initialState = {
  list: [],
};

const expenseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_EXPENSE_LIST":
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    default:
      return state;
  }
};

export default expenseListReducer;
