import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import payment from "../../../assets/payment.png";
import delivery from "../../../assets/delivery.png";
import deposit from "../../../assets/deposit.png";
import dollar from "../../../assets/dollar.png";
import payingThough from "../../../assets/payingThrough.png";
import { useNavigate } from "react-router-dom";

interface GridProps {
  transaction: string;
  label11: string;
  label12: string;
  label21: string;
  label22: string;
  label31: string;
  label32: string;
  button: string;
}

const index = ({
  transaction,
  label11,
  label12,
  label21,
  label22,
  label31,
  label32,
  button,
}: GridProps) => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      border="1px solid #E8E8F7"
      sx={{ width: "527px", height: "646px" }}
    >
      <Grid item sx={{ pt: 2 }}>
        <Typo
          variant="caption"
          component="div"
          text={transaction}
          className={classes.transaction}
          width="125px"
        />
      </Grid>
      <Grid item>
        <Typo
          variant="heading3"
          component="div"
          text="0.0234510 BTC"
          className={classes.price}
        />
      </Grid>
      <Grid item>
        <Typo
          variant="caption"
          component="div"
          text="1BTC = $3,406,069.54"
          className={classes.transaction}
          width="150px"
        />
      </Grid>
      <Grid
        sx={{
          width: "523px",
          pt: 2,
          position: "absolute",
          left: "0%",
          top: "12%",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>

      <Grid item container direction="column">
        <Grid item alignItems="center">
          <Grid direction="row" alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              {transaction === "You are buying" ? (
                <img src={payment} alt="payment" />
              ) : (
                <img src={payingThough} alt="paying  through" />
              )}
            </Grid>
            <Grid direction="row">
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text={label11}
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="body1"
                  component="div"
                  text={label12}
                  width="164px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            alignItems="center"
            sx={{
              border: "1px dashed #B4B4CF",
              position: "absolute",
              left: "8%",
              width: "0px",
              height: "54px",
              top: "22%",
            }}
          ></Grid>
          <Grid direction="row" alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              <img src={delivery} alt="delivery" />
            </Grid>
            <Grid direction="row">
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text={label21}
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="body1"
                  component="div"
                  text={label22}
                  width="164px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            alignItems="center"
            sx={{
              border: "1px dashed #B4B4CF",
              position: "absolute",
              left: "8%",
              width: "0px",
              height: "58px",
              top: "35%",
            }}
          >
            <Typo text="" component="div" width="10px" />
          </Grid>
          <Grid direction="row" alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              {transaction === "You are buying" ? (
                <img src={deposit} alt="deposit" />
              ) : (
                <img src={dollar} alt="dollar" />
              )}
            </Grid>
            <Grid direction="row">
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text={label31}
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="body1"
                  component="div"
                  text={label32}
                  width="164px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{
          width: "523px",
          pt: 2,
          position: "absolute",
          left: "0%",
          top: "48%",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>

      <Grid sx={{ width: "480px", height: "250px" }}>
        <Grid container direction="row" xs={12} alignItems="center">
          <Grid xs={3}>
            <Typography component="div" width="100px" variant="overline">
              0.0234510 BTC
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Divider textAlign="left"></Divider>
          </Grid>
          <Grid xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="overline">
              0.0234510 BTC
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" xs={12} alignItems="center">
          <Grid xs={3}>
            <Typography component="div" width="150px" variant="overline">
              transaction fee
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Divider textAlign="left"></Divider>
          </Grid>
          <Grid xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="overline">
              $1,000.00
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" xs={12} alignItems="center">
          <Grid xs={1}>
            <Typography component="div" width="100px" variant="body1">
              Total
            </Typography>
          </Grid>
          <Grid xs={8}>
            <Divider textAlign="left"></Divider>
          </Grid>
          <Grid xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="body1">
              $35,000.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {button === "SELL NOW" ? (
        <Button
          variant="contained"
          sx={{
            width: "449px",
            height: "40px",
            position: "absolute",
            top: "75%",
            left: "5%",
            backgroundColor: "orange",
          }}
          onClick={() => {
            navigate("/paymentSuccessful");
          }}
        >
          {button}
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{
            width: "449px",
            height: "40px",
            position: "absolute",
            top: "75%",
            left: "5%",
            backgroundColor: "#0052FF",
          }}
          onClick={() => {
            navigate("/purchaseSuccessful");
          }}
        >
          {button}
        </Button>
      )}
    </Grid>
  );
};

export default index;
