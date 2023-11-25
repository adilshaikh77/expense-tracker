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
import { incomeSource } from "../data/incomeSource";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addBalance } from "../reducers/actions/addIncome";

const IncomeForm = () => {
  const [source, setSource] = useState("");
  const [newIncomeSource, setNewIncomeSource] = useState([]);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const addNewSelect = () => {
    if (newIncomeSource.length < 5) {
      setNewIncomeSource([...newIncomeSource, newIncomeSource.length]);
    } else {
      alert("Maximum limit reached (5 selects)");
    }
  };

  const removeSelect = (index) => {
    if (newIncomeSource.length > 0) {
      const updatedIncomeSources = newIncomeSource.filter(
        (item, i) => i !== index
      );
      setNewIncomeSource(updatedIncomeSources);
    } else {
      alert("Minimum limit reached (1 select)");
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value < 0 ? 0 : value);
    dispatch(addBalance(value));
  };
  return (
    <Paper
      sx={{
        height: "490px",
        width: "350px",
        ml: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", m: 1 }}>
        <FormControl sx={{ mb: 1, mr: 1, width: "250px", display: "flex" }}>
          <InputLabel>Source</InputLabel>
          <Select
            label="Source"
            onChange={(e) => setSource(e.target.value)}
            value={source}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {incomeSource.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
            #
          </Select>
        </FormControl>
        <OutlinedInput
          placeholder="Amount..."
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e)}
        ></OutlinedInput>
      </Box>
      {newIncomeSource?.map((i, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ m: 1, mb: 1, width: "300px" }} key={i}>
            <InputLabel>Source</InputLabel>
            <Select
              label="Source"
              onChange={(e) => setSource(e.target.value)}
              value={source}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {incomeSource.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
              #
            </Select>
          </FormControl>
          <Button
            sx={{ minWidth: "45px", height: "50px" }}
            onClick={() => removeSelect(index)}
            size="small"
          >
            <CloseIcon />
          </Button>
        </Box>
      ))}
      <Button
        sx={{
          width: "50px",
          height: "60px",
          borderRadius: "50%",
          alignSelf: "center",
        }}
        variant="contained"
        onClick={() => addNewSelect()}
      >
        <AddIcon />
      </Button>
    </Paper>
  );
};

export default IncomeForm;
