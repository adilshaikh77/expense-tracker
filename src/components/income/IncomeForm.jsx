import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import DefaultSourceField from "./DefaultSourceField";
import AddOnSourceFields from "./AddOnSourceFields";
import { useDispatch } from "react-redux";
import { numberOfSelectSourceOptions } from "../../reducers/actions/actions";

const IncomeForm = () => {
  const dispatch = useDispatch();
  const [newIncomeSource, setNewIncomeSource] = useState([]);
  const [disable, setDisable] = useState(false);
  const incrementnewIncomeSourceOfOptions = () => {
    setNewIncomeSource([...newIncomeSource, newIncomeSource.length]);
    console.log(newIncomeSource);
    if (newIncomeSource.length > 3) {
      setDisable(true);
    }
  };
  dispatch(numberOfSelectSourceOptions(newIncomeSource));

  const removeSelect = (index) => {
    if (newIncomeSource.length > 0) {
      const updatedIncomeSources = newIncomeSource.filter(
        (item, i) => i !== index
      );
      setNewIncomeSource(updatedIncomeSources);
    }
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
        <DefaultSourceField />
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
          <AddOnSourceFields index={index} value={i} />
          <Button
            sx={{ minWidth: "45px", height: "50px" }}
            onClick={() => removeSelect(index)}
            size="small"
          >
            <CloseIcon />
          </Button>
        </Box>
      ))}
      {!disable && (
        <Button
          sx={{
            width: "50px",
            height: "60px",
            borderRadius: "50%",
            alignSelf: "center",
          }}
          variant="contained"
          onClick={() => incrementnewIncomeSourceOfOptions()}
        >
          <AddIcon />
        </Button>
      )}
    </Paper>
  );
};

export default IncomeForm;
