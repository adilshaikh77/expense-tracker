const initialState = {
  numberOfOptions: 0,
};

const numberOfSelectSourceOptions = (state = initialState, action) => {
  switch (action.type) {
    case "NUMBER_OF_SELECT_OPTIONS":
      return {
        ...state,
        numberOfOptions: action.payload,
      };
    default:
      return state;
  }
};

export default numberOfSelectSourceOptions;
