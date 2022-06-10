import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import ImageWithTypo from "../../molecules/ImageWithTypo/index";
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
