import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearExpenseList } from '../../reducers/actions/actions';

const ExpenseList = ({ expenseSource, expenseAmount }) => {
  const dispatch = useDispatch();
  const expenseList = expenseSource.map((source, index) => {
    return {
      source,
      amount: expenseAmount[index],
    };
  });
  return (
    <Grid container>
      <Container
        disableGutters
        sx={{
          width: '350px',
          height: '410px',
          ml: 1,
          mr: 1,
          r: 0,
          border: '1px solid #000000',
          overflowY: 'auto',
          display: 'flex',
        }}
      >
        <List sx={{ pl: 1, pr: 1 }}>
          {expenseList?.map((i, index) => (
            <ListItem
              key={index}
              sx={{
                boxShadow:
                  '0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 0px 6px 0px rgba(0, 0, 0, 0.08)',
              }}
            >
              <ListItemText
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                primary={i.source}
                secondary={
                  <Typography>
                    <LocalAtmIcon
                      color="success"
                      sx={{ verticalAlign: 'bottom', mr: 0.5 }}
                    />
                    {i.amount}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="contained"
          size="small"
          onClick={dispatch(clearExpenseList())}
        >
          Clear List
        </Button>
      </Box>
    </Grid>
  );
};

export default ExpenseList;
