export const addBalance = (amount) => ({
  type: "ADD_TO_BALANCE",
  payload: amount,
});

export const numberOfSelectSourceOptions = (number) => ({
  type: "NUMBER_OF_SELECT_OPTIONS",
  payload: number,
});
