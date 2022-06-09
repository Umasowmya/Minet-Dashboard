import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import explore from "../../../assets/explore.png";

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
            <img src={explore} alt="logo" width="25px" height="25px" />
          </Grid>

          <Grid>
            <Typo component="div" text="" width="20px" />
          </Grid>

          <Grid item sm={1}>
            <Typo
              component="div"
              width="90px"
              text="Bitcoin"
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
              text="0.0234510 BTC"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
