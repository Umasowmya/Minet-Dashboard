import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import { Grid } from "@mui/material";

interface Props {
  label2: string;
  value: string;
}

const index2 = ({ label2, value }: Props) => {
  const classes = customStyles();

  return (
    <Grid
      sx={{
        border: "1px solid #E8E8F7",
        display: "flex",
        p: 1,
        alignItems: "center",
        position: "absolute",
        top: "0px",
        width: "93%",
        height: "80%",
      }}
    >
      <Grid item container>
        <Typo
          component="div"
          className={classes.amountDetailsPrice}
          text={label2}
          width="250px"
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="225px"
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.amountDetailsPrice}
          text={value}
          width="120px"
        />
      </Grid>
    </Grid>
  );
};

export default index2;
