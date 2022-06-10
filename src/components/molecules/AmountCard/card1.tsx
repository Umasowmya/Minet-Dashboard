import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import { Grid } from "@mui/material";
import Buttons from "../../atoms/Buttons/Buttons";

interface Props {
  label1: string;
  buttonval: string;
}

const index1 = ({ label1, buttonval }: Props) => {
  const classes = customStyles();

  return (
    <Grid
      sx={{
        border: "1px solid #E8E8F7",
        display: "flex",
        alignItems: "center",
        width: "663px",
        p: 1,
      }}
    >
      <Grid item container>
        <Typo
          component="div"
          className={classes.amountDetailsPrice}
          text={label1}
          width="300px"
        />
      </Grid>

      <Grid item container>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="180px"
        />
      </Grid>

      <Grid item container>
        <Buttons
          variant="outlined"
          children={buttonval}
          sx={{ width: "120px", height: "40px" }}
        />
      </Grid>
    </Grid>
  );
};

export default index1;
