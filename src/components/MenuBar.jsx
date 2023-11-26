import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const MenuBar = () => {
  return (
    <AppBar position="static" color="">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <AccountBalanceIcon />
          <Typography sx={{ pl: 2 }}>Expense Tracker</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
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
  );
};

export default MenuBar;
