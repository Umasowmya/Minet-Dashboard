import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import rupee from "../../../assets/rupee.png";
import ImageWithTypo from "../../molecules/ImageWithTypo/index";
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
});

const index = () => {
  const classes = customStyles();
  return (
    <Grid
      item
      container
      direction="row"
      sx={{
        height: "190px",
        width: "710px",
        border: "1px solid #E8E8F7",
      }}
      spacing={5}
    >
      <Grid item container>
        <Typo
          variant="body1"
          component="div"
          className={classes.paymentMethod}
          text="Deposit"
        />
      </Grid>

      <Grid
        item
        direction="row"
        sx={{
          height: "90px",
          width: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <ImageWithTypo image={rupee} value1="USD Cash coin" value2="Default" />
      </Grid>
    </Grid>
  );
};

export default index;
