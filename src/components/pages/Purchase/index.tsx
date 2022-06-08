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
import TotalBalance from "../../organisms/totalBalance/index";
import AmountDetails from "../../organisms/AmountDetails/index";
import Deposit from "../../organisms/deposit/index";

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

            <Grid
              sx={{
                position: "absolute",
                left: "109px",
                top: "50px",
              }}
            >
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
              <TotalBalance />
            </Grid>

            <Grid sx={{ position: "absolute", left: "65px", top: "700px" }}>
              <AmountDetails
                buttonval="Buy max"
                value="BTC"
                label2="0.0234510 "
                label1="$34,000.00"
              />
            </Grid>

            <Grid sx={{ position: "absolute", left: "65px", top: "1100px" }}>
              <Deposit />
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
              transaction="You are buying"
              label11="Payment method"
              label12="Visa credit ...8845"
              label21="Delivery fees"
              label22="0.001BTC"
              label31="Deposit to"
              label32="Bitcoin wallet"
              button="BUY NOW"
            />
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default index;
