import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import rupee from "../../../assets/rupee.png";
import { makeStyles } from "@material-ui/core";

var customStyles = makeStyles({
  paymentMethod: {
    width: "250px",
    height: "22px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#343446",
  },

  currency: {
    width: "250px",
    height: "28px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    color: "#343446",
  },

  totalBalance: {
    width: "251px",
    height: "28px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "28px",
    color: "#7D7D89",
  },
});

const index = () => {
  const classes = customStyles();

  return (
    <Grid
      sx={{
        height: "80%",
        width: "90%",
        display: "flex",
        border: "1px solid #E8E8F7",
        position: "absolute",
        top: "0px",
        p: 2,
      }}
    >
      <Grid
        item
        sx={{
          flexDirection: "flex-start",
        }}
      >
        <img src={rupee} alt="logo" width="25px" height="25px" />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="30px"
        />
      </Grid>

      <Grid item direction="column">
        <Grid item sm={1}>
          <Typo
            component="div"
            width="120px"
            text="USD Coin cash"
            className={classes.currency}
          />
        </Grid>

        <Grid item sm={1}>
          <Typo
            component="div"
            width="240px"
            text="Total Balance - $34,000"
            className={classes.totalBalance}
          />
        </Grid>
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="220px"
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text="Default"
        />
      </Grid>
    </Grid>
  );
};

export default index;
