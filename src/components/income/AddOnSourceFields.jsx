import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { incomeSource } from '../../data/incomeSource';
import { useDispatch } from 'react-redux';
import { addBalance } from '../../reducers/actions/actions';

const AddOnSourceFields = ({ index, value }) => {
  const dispatch = useDispatch();
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value < 0 ? 0 : value);
    dispatch(addBalance(value));
  };

  return (
    <>
      <FormControl sx={{ m: 1, mb: 1, width: '300px' }} key={value}>
        <InputLabel>Source</InputLabel>
        <Select
          label="Source"
          onChange={(e) => setSource(e.target.value)}
          value={source}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {incomeSource?.map((option) => (
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

PropTypes.AddOnSourceFields = {
  index: PropTypes.array,
  value: PropTypes.number,
};

export default AddOnSourceFields;
