const initialState = {
  expenseSource: [],
  expenseAmount: [],
};

const expenseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE_SOURCE_TO_LIST':
      return {
        ...state,
        expenseSource: [...state.expenseSource, action.payload],
      };
    case 'ADD_EXPENSE_AMOUNT_TO_LIST':
      return {
        ...state,
        expenseAmount: [...state.expenseAmount, action.payload],
      };

    case 'CLEAR_EXPENSE_LIST':
      return {
        ...state,
        expenseSource: [],
        expenseAmount: [],
      };

    default:
      return state;
  }
};

export default expenseListReducer;
