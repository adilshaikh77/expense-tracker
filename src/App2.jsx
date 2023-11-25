// App.js

import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './App.css';

const App = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static" color="">
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <AccountBalanceIcon />
                <Typography sx={{ pl: 2 }}>Expense Tracker</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Typography variant="subtitle1" sx={{ p: 1 }}>
                  Balance
                </Typography>
                <Typography variant="subtitle1" sx={{ p: 1 }}>
                  Income
                </Typography>
                <Typography variant="subtitle1" sx={{ p: 1 }}>
                  Expense
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              className="paper-backgroundImage" // Added class for background image
              elevation={4}
              sx={{
                height: '300px',
                borderRadius: '40px',
                width: '500px',
                // Removed background image styling from here
              }}
            >
              <Typography sx={{ pt: 14, pl: 2 }} variant="h4">
                Balance:
              </Typography>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              height: '575px',
              borderRadius: '40px',
              width: '100%',
              backgroundImage: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
