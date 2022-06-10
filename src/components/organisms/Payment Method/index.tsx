import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import dollar from "../../../assets/dollar.png";
import rupee from "../../../assets/rupee.png";
import PaymentCard from "../../molecules/PaymentCard/index";
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
          text="Payment Method"
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
        <PaymentCard />
      </Grid>
    </Grid>
  );
};

export default index;
