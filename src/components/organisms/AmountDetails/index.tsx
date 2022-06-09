import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import { Button, Grid } from "@mui/material";
import Buttons from "../../atoms/Buttons/Buttons";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

interface amountProps {
  buttonval: string;
  value: string;
  label1: string;
  label2: string;
}

const index = ({ buttonval, value, label1, label2 }: amountProps) => {
  function valuetext(value: number) {
    return `1BTC=$${value}`;
  }

  const marks = [
    {
      value: 50,
      label: "1BTC=3,406,069.54",
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
        position: "relative",
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
          width: "663px",
        }}
        spacing={3}
      >
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
          p: 2,
          width: "663px",
          alignItems: "center",

          position: "relative",
        }}
        spacing={3}
      >
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

        <Grid item container sx={{ height: "5px" }}>
          <Typo
            component="div"
            className={classes.paymentMethod}
            text=""
            width="50px"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
