import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { expenseCategories } from "../../data/dataSource";
import ExpenseList from "./ExpenseList";
import { useDispatch, useSelector } from "react-redux";
import { expenseList } from "../../selectors";
import { addToExpenseList } from "../../reducers/actions/actions";

const ExpenseForm = () => {
  const [amount, setAmount] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const dispatch = useDispatch();

  const list = useSelector(expenseList);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value < 0 ? 0 : value);
  };
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const handleAddItem = () => {
    if (selectedValue) {
      // Dispatch the action to add to the expense list
      dispatch(addToExpenseList(selectedValue));

      // Update the local list of selected values
      setSelectedValue([...selectedValue, selectedValue]);

      // Clear the selected value after adding
      setSelectedValue("");
    }
  };

  console.log(selectedValue);
  return (
    <Paper
      sx={{
        height: "490px",
        width: "950px",
        ml: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", m: 1 }}>
        <FormControl sx={{ mr: 1, width: "250px", display: "flex" }}>
          <InputLabel>Expense Source</InputLabel>
          <Select
            label="Expense Source"
            required
            onChange={(e) => handleSelectChange(e)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {expenseCategories.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <OutlinedInput
          sx={{ mr: 1 }}
          placeholder="Amount..."
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e)}
        ></OutlinedInput>
        <Box sx={{ display: "flex", alignItems: "center", height: "54px" }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleAddItem()}
          >
            Add to the List
          </Button>
        </Box>
      </Box>
      <ExpenseList expenseList={list} />
    </Paper>
  );
};

export default ExpenseForm;
