import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addBalance } from "../../reducers/actions/actions";
import { incomeSource } from "../../data/dataSource";

const DefaultSourceField = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value < 0 ? 0 : value);
    dispatch(addBalance(value));
  };
  return (
    <>
      <FormControl sx={{ mb: 1, mr: 1, width: "250px", display: "flex" }}>
        <InputLabel>Income Source</InputLabel>
        <Select
          label="Income Source"
          onChange={(e) => setSource(e.target.value)}
          value={source}
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {incomeSource.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <OutlinedInput
        placeholder="Amount..."
        type="number"
        value={amount}
        onChange={(e) => handleAmountChange(e)}
      ></OutlinedInput>
    </>
  );
};

export default DefaultSourceField;
