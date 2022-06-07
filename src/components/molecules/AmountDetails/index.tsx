import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import { Button, Grid } from "@mui/material";
import Buttons from "../../atoms/Buttons/Buttons";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

const index = () => {
  function valuetext(value: number) {
    return `1BTC=$${value}`;
  }

  const marks = [
    {
      value: 50,
      label: "3,406,069.54",
    },
  ];

  const classes = customStyles();
  return (
    <Grid
      item
      container
      sx={{
        width: "710px",
        border: "1px solid #E8E8F7",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      spacing={5}
    >
      <Grid item container sx={{ p: 1 }}>
        <Typo
          variant="body1"
          component="div"
          className={classes.paymentMethod}
          text="Amount Details"
        />
      </Grid>

      <Grid
        item
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          width: "663px",
          border: "1px solid #E8E8F7",
        }}
        spacing={3}
      >
        <Grid item container>
          <Typo
            component="div"
            className={classes.amountDetailsPrice}
            text="$34,000.00"
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
            children="Buy max"
            sx={{ width: "120px", height: "40px" }}
          />
        </Grid>
      </Grid>

      <Stack
        sx={{
          width: "300px",
          height: 80,
          display: "flex",
          alignItems: "center",
        }}
        spacing={1}
      >
        <Slider
          getAriaLabel={() => "Price"}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[50]}
          marks={marks}
          disabled
        />
      </Stack>

      <Grid
        item
        direction="row"
        sx={{
          display: "flex",
          p: 1,
          width: "663px",
          alignItems: "center",
          border: "1px solid #E8E8F7",
        }}
        spacing={3}
      >
        <Grid item container>
          <Typo
            component="div"
            className={classes.amountDetailsPrice}
            text="0.0234510 "
            width="300px"
          />
        </Grid>

        <Grid item container>
          <Typo
            component="div"
            className={classes.paymentMethod}
            text=""
            width="265px"
          />
        </Grid>

        <Grid item container>
          <Typo
            component="div"
            className={classes.amountDetailsPrice}
            text="BTC "
            width="100px"
          />
        </Grid>
      </Grid>

      <Grid item container sx={{ height: "5px" }}>
        <Typo
          component="div"
          className={classes.paymentMethod}
          text=""
          width="50px"
        />
      </Grid>
    </Grid>
  );
};

export default index;
