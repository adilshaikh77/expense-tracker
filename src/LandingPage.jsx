import { Container, Grid, Paper } from "@mui/material";
import React from "react";

import "./LandingPage.css";
import IncomeForm from "./components/income/IncomeForm";

import "./LandingPage.css";
import BalanceCard from "./components/BalanceCard";
import MenuBar from "./components/MenuBar";

const LandingPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MenuBar />
        </Grid>
        <Grid item xs={12}>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <BalanceCard />
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
