import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import delivery from "../../../assets/delivery.png";
import { KeyboardArrowDown } from "@mui/icons-material";

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
        p: 2,
      }}
      spacing={5}
    >
      <Grid item container>
        <Typo
          variant="body1"
          component="div"
          className={classes.paymentMethod}
          text="Select speed delivery"
          width="200px"
        />
      </Grid>

      <Grid
        item
        direction="row"
        sx={{
          height: "90px",
          width: "100%",
          display: "flex",
          border: "1px solid #E8E8F7",
        }}
      >
        <Grid item sx={{ flexDirection: "flex-start" }}>
          <img src={delivery} alt="logo" width="25px" height="25px" />
        </Grid>

        <Grid item container>
          <Typo
            component="div"
            className={classes.paymentMethod}
            text=""
            width="30px"
          />
        </Grid>

        <Grid item direction="column">
          <Grid item sm={1}>
            <Typo
              component="div"
              width="160px"
              text="Instant: 2-5 minutes"
              className={classes.currency}
            />
          </Grid>

          <Grid item sm={1}>
            <Typo
              component="div"
              width="240px"
              text="Transaction fees : 0.001 BTC"
              className={classes.totalBalance}
            />
          </Grid>
        </Grid>

        <Grid item container>
          <Typo
            component="div"
            className={classes.paymentMethod}
            text=""
            width="220px"
          />
        </Grid>

        <Grid item container>
          <Typo
            component="div"
            className={classes.paymentMethod}
            text={<KeyboardArrowDown />}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
