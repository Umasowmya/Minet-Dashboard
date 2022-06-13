import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import { Grid } from "@mui/material";

interface Props {
  label: string;
  Atom: React.ReactNode;
}

const index1 = ({ label, Atom }: Props) => {
  const classes = customStyles();

  return (
    <Grid
      sx={{
        border: "1px solid #E8E8F7",
        display: "flex",
        alignItems: "center",
        width: "623px",
        p: 1,
      }}
    >
      <Grid item container>
        <Typo
          component="div"
          className={classes.amountDetailsPrice}
          text={label}
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
        {Atom}
      </Grid>
    </Grid>
  );
};

export default index1;
