import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Card1 from "../../molecules/AmountCard/card1";
import Card2 from "../../molecules/AmountCard/card2";

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
        <Card1 buttonval={buttonval} label1={label1} />
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
        <Card2 value={value} label2={label2} />

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
