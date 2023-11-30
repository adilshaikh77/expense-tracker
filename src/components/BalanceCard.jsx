import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectBalance } from "../selectors";

const BalanceCard = () => {
  const balance = useSelector(selectBalance);
  return (
    <Paper
      elevation={4}
      className="paper-backgroundImage"
      sx={{
        height: "95px",
        borderRadius: "0px 40px 40px 0px",
        width: "340px",
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography sx={{ pl: 2, zIndex: 1, bgcolor: "#72ce87c2" }} variant="h4">
        Balance: {balance}
      </Typography>
    </Paper>
  );
};

export default BalanceCard;
