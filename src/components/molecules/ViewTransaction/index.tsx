import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme/index";
import payment from "../../../assets/payment.png";
import delivery from "../../../assets/delivery.png";
import deposit from "../../../assets/deposit.png";
import dollar from "../../../assets/dollar.png";
import payingThough from "../../../assets/payingThrough.png";

interface GridProps {
  transaction: string;
}

const index = ({ transaction }: GridProps) => {
  const classes = customStyles();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      border="1px solid #E8E8F7"
      sx={{ width: "527px", height: "646px" }}
    >
      <Grid item>
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
      <Divider />

      <Grid item container direction="column">
        <Grid item alignItems="center">
          <Grid direction="row" alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              <img src={payment} />
            </Grid>
            <Grid direction="row">
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text="Payment Method"
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text="Visa credit ...8845"
                  width="144px"
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
              left: "3.5%",
              width: "0px",
              height: "32px",
            }}
          ></Grid>
          <Grid direction="row" alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              <img src={payment} />
            </Grid>
            <Grid direction="row">
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text="Delivery fees"
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text="0.001BTC"
                  width="144px"
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
              left: "3.5%",
              width: "0px",
              height: "32px",
            }}
          >
            <Typo text="" component="div" width="10px" />
          </Grid>
          <Grid direction="row" alignItems="center" sx={{ display: "flex" }}>
            <Grid item sx={{ p: 4 }}>
              <img src={payment} />
            </Grid>
            <Grid direction="row">
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text="Deposit to"
                  width="114px"
                  className={classes.paymentMethoddiv}
                />
              </Grid>
              <Grid>
                <Typo
                  variant="caption"
                  component="div"
                  text="Bitcoin wallet"
                  width="144px"
                  className={classes.visaCredit}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <Grid container direction="row" xs={12}>
          <Grid xs={4}>
            <Typography component="div" width="100px" variant="overline">
              0.0234510 BTC
            </Typography>
          </Grid>
          <Grid xs={5}>
            <Divider textAlign="left">LEFT</Divider>
          </Grid>
          <Grid xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="overline">
              0.0234510 BTC
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" xs={12}>
          <Grid xs={4}>
            <Typography component="div" width="120px" variant="overline">
              transaction fee
            </Typography>
          </Grid>
          <Grid xs={5}>
            <Divider textAlign="left">LEFT</Divider>
          </Grid>
          <Grid xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="overline">
              $1,000.00
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" xs={12}>
          <Grid xs={4}>
            <Typography component="div" width="100px" variant="body1">
              Total
            </Typography>
          </Grid>
          <Grid xs={5}>
            <Divider textAlign="left">LEFT</Divider>
          </Grid>
          <Grid xs={3} alignItems="center">
            <Typography component="div" width="100px" variant="body1">
              $35,000.00
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Button variant="contained" sx={{ width: "449px", height: "40px" }}>
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
