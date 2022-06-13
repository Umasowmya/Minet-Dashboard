import React from "react";
import Typo from "../../atoms/Typo/index";
import { Button, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Card from "../../molecules/AmountCard/ButtonCard";
import { makeStyles } from "@material-ui/core";
import Buttons from "../../atoms/Buttons/Buttons";

interface amountProps {
  buttonval: string;
  value: string;
  price: string;
  quantity: string;
}

var customStyles = makeStyles({
  paymentMethod: {
    width: "250px",
    height: "22px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#343446",
  },

  amountDetailsPrice: {
    width: "118px",
    height: "28px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "28px",
    color: "#343446",
  },
});

const index = ({ buttonval, value, price, quantity }: amountProps) => {
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
        <Card
          Atom={<Button variant="outlined">{buttonval}</Button>}
          label={price}
        />
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
            position: "absolute",
            top: "0px",
            width: "90%",
            height: "80%",
          }}
        >
          <Card
            Atom={
              <Typo
                component="div"
                className={classes.amountDetailsPrice}
                text={value}
                width="120px"
              />
            }
            label={quantity}
          />
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
