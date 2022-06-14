import { Button, Grid } from "@mui/material";
import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const array = [
  "Bitcoin",
  "XRP",
  "Polkadot",
  "Etherum",
  "Tether",
  "Etherum2",
  "Dodge coin",
];

const customStyles = makeStyles({
  highlight: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

const ButtonList = () => {
  const classes = customStyles();
  return (
    <Grid container direction="row" sx={{ display: "flex" }}>
      <KeyboardArrowRight />

      <Button
        sx={{
          background: "#F7931A",
          border: "1px solid #F7931A",
          textTransform: "none",
          color: "#FFFFFF",
        }}
        className={classes.highlight}
      >
        Bitcoin
      </Button>

      <Button
        sx={{
          background: "#F7931A",
          border: "1px solid #F7931A",
          textTransform: "none",
          color: "#FFFFFF",
        }}
        className={classes.highlight}
      >
        Bitcoin
      </Button>
    </Grid>
  );
};

export default ButtonList;
