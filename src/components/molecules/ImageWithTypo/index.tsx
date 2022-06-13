import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import explore from "../../../assets/explore.png";

interface Props {
  image: string;
  value1: string;
  value2: string;
}
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
