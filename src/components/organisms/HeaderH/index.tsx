import { Grid } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/Buttons/Buttons";
import Ava from "../../atoms/Avatar/index";
import Typo from "../../atoms/Typo/index";
import { KeyboardArrowDown } from "@mui/icons-material";

import img from "../../../assets/avatar.png";

import { customStyles } from "../../../theme/index";

const index = () => {
  const classes = customStyles();

  return (
    <Grid item container sx={{}}>
      <Grid item sx={{ position: "absolute", left: "100px", top: "10px" }}>
        <Typo text="Checkout" component="div" className={classes.checkout} />
      </Grid>

      <Grid item sx={{ position: "absolute", left: "945px" }}>
        <Buttons
          variant="contained"
          className={classes.sellButton}
          sx={{ backgroundColor: "#ffa74f" }}
        >
          {" "}
          SELL{" "}
        </Buttons>
      </Grid>

      <Grid item sx={{ position: "absolute", left: "1100px" }}>
        <Buttons
          variant="contained"
          className={classes.sellButton}
          sx={{ backgroundColor: "#0052FF" }}
        >
          {" "}
          BUY{" "}
        </Buttons>
      </Grid>

      <Grid item sx={{ position: "absolute", left: "1260px" }}>
        <Ava image={img} />
      </Grid>

      <Grid item sx={{ position: "absolute", left: "1300px" }}>
        <Buttons endIcon={<KeyboardArrowDown />} children="" />
      </Grid>

      <hr></hr>
    </Grid>
  );
};

export default index;
