import { Container, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const ExpenseList = ({ expenseList }) => {
  return (
    <Container
      disableGutters
      sx={{
        width: "350px",
        height: "410px",
        ml: 1,
        r: 0,
        border: "1px solid #000000",
      }}
    >
      <List sx={{ pl: 1, pr: 1 }}>
        {expenseList.map((key) => (
          <ListItem
            sx={{
              boxShadow:
                "0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 0px 6px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            <ListItemText primary={key} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ExpenseList;
