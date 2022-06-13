import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { makeStyles } from "@material-ui/core";

interface Props {
  image: string;
  value1: string;
  value2: string;
}

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

  amountDetailsPrice: {
    width: "118px",
    height: "28px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "28px",
    color: "#343446",
  },
});
const index = ({ image, value1, value2 }: Props) => {
  const classes = customStyles();

  return (
    <Grid
      sx={{
        border: "1px solid #E8E8F7",
        height: "70px",
        width: "95%",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "0%",
        left: "30px",
      }}
    >
      <Grid
        item
        sx={{
          flexDirection: "flex-start",
          pl: 2,
        }}
      >
        <img src={image} alt="logo" width="25px" height="25px" />
      </Grid>

      <Grid>
        <Typo component="div" text="" width="20px" />
      </Grid>

      <Grid item sm={1}>
        <Typo
          component="div"
          width="120px"
          text={value1}
          className={classes.currency}
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="5px"
        />
      </Grid>
      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="200px"
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          width="120px"
          className={classes.amountDetailsPrice}
          text={value2}
        />
      </Grid>
    </Grid>
  );
};

export default index;
