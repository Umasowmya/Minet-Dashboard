import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import PaymentCard from "../../molecules/PaymentCard/index";

import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  paymentMethod: {
    width: "250px",
    height: "22px",
    color: "#343446",
  },

  hoverfun: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

const Payment = () => {
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
      className={classes.hoverfun}
      spacing={5}
    >
      <Grid item container>
        <Typo
          variant="subtitle1"
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

export default Payment;
