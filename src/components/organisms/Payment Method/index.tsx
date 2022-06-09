import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import dollar from "../../../assets/dollar.png";
import circle from "../../../assets/circle.png";

interface Props {
  title: string;
  logo: string;
}

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
        <Grid
          sx={{
            height: "80%",
            width: "90%",
            display: "flex",
            border: "1px solid #E8E8F7",
            position: "absolute",
            top: "0px",
            p: 2,
          }}
        >
          <Grid
            item
            sx={{
              flexDirection: "flex-start",
              background: `url(${dollar})`,
              backgroundSize: "22px 22px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={circle} alt="logo" width="25px" height="25px" />
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
                width="120px"
                text="USD Coin cash"
                className={classes.currency}
              />
            </Grid>

            <Grid item sm={1}>
              <Typo
                component="div"
                width="240px"
                text="Total Balance - $34,000"
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
              text="Default"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
