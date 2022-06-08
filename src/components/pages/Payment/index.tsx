import React from "react";
import Template from "../../templates/index";
import HorizontalHeader from "../../organisms/HeaderH/index";
import VerticalHeader from "../../organisms/HeaderV/index";
import { Grid, Typography } from "@mui/material";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme";
import Footer from "../../organisms/Footer/index";
import CryptoGrid from "../../organisms/CryptoGrid/index";
import ViewTransaction from "../../organisms/ViewTransaction/index";
import PaymentMethod from "../../organisms/Payment Method/index";
import AmountDetails from "../../organisms/AmountDetails/index";
import SpeedDelivery from "../../organisms/SpeedDelivery/index";

const index = () => {
  const classes = customStyles();
  return (
    <Template
      HorizontalHeader={<HorizontalHeader />}
      VerticalHeader={<VerticalHeader />}
      Content={
        <>
          <Grid sx={{ position: "absolute", left: "104px", top: "106px" }}>
            <Grid>
              <Typography variant="subtitle1" component="div">
                Buy Crypto
              </Typography>
            </Grid>

            <Grid sx={{ position: "absolute", left: "109px", top: "50px" }}>
              <Typography
                variant="body1"
                component="div"
                width="114px"
                sx={{ fontSize: "16px" }}
              >
                Choose crypto
              </Typography>
            </Grid>

            <Grid sx={{ position: "absolute", left: "75px", top: "96px" }}>
              <CryptoGrid />
            </Grid>

            <Grid sx={{ position: "absolute", left: "65px", top: "500px" }}>
              <PaymentMethod />
            </Grid>

            <Grid sx={{ position: "absolute", left: "65px", top: "700px" }}>
              <AmountDetails
                buttonval="Sell max"
                value="USD coin(cash)"
                label1="0.0234510 "
                label2="$34,000.00"
              />
            </Grid>

            <Grid sx={{ position: "absolute", left: "65px", top: "1100px" }}>
              <SpeedDelivery />
            </Grid>
          </Grid>

          <Grid
            sx={{
              position: "absolute",
              left: "858px",
              top: "103px",
            }}
          >
            <ViewTransaction
              transaction="You are selling"
              label11="Paying through"
              label12="Bitcoin Wallet"
              label21="Delivery fees"
              label22="0.001BTC"
              label31="Deposit to"
              label32="Rupee coin"
              button="SELL NOW"
            />
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default index;
