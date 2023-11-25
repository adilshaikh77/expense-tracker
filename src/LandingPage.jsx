import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./LandingPage.css";
import IncomeForm from "./components/IncomeForm";
import { useSelector } from "react-redux";
import { selectBalance } from "./selectors";

const LandingPage = () => {
  const balance = useSelector(selectBalance);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Paper
              elevation={4}
              sx={{
                height: "250px",
                borderRadius: "40px",
                width: "460px",
                backgroundImage: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                alignContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ pl: 2 }} variant="h4">
                Balance: {balance}
              </Typography>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              height: "575px",
              borderRadius: "40px",
              width: "100%",
              backgroundImage: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <IncomeForm />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
