import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import ImageWithTypo from "../../molecules/ImageWithTypo/index";
import explore from "../../../assets/explore.png";
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
          text="Total Balance"
        />
      </Grid>

      <Grid
        item
        direction="row"
        alignItems="center"
        sx={{
          height: "80px",
          width: "95%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          left: "10px",
        }}
      >
        <ImageWithTypo
          image={explore}
          value1="Bitcoin"
          value2="0.0234510 BTC"
        />
      </Grid>
    </Grid>
  );
};

export default index;
