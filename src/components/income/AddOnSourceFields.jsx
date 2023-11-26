import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

import { incomeSource } from "../../data/incomeSource";

const AddOnSourceFields = ({ index, value }) => {
  const [source, setSource] = useState("");

  return (
    <FormControl sx={{ m: 1, mb: 1, width: "300px" }} key={value}>
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
      </Select>
    </FormControl>
  );
};

PropTypes.AddOnSourceFields = {
  index: PropTypes.array,
  value: PropTypes.number,
};

export default AddOnSourceFields;
