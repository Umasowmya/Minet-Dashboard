import React from "react";
import Template from "../../templates/index";
import HorizontalHeader from "../../organisms/HeaderH/index";
import VerticalHeader from "../../organisms/HeaderV/index";
import { Grid, Typography } from "@mui/material";
import Typo from "../../atoms/Typo/index";
import { customStyles } from "../../../theme";
import Footer from "../../organisms/Footer/index";
import CryptoGrid from "../../organisms/CryptoGrid/index";
import ViewTransaction from "../../molecules/ViewTransaction/index";
import PaymentMethod from "../../molecules/Payment Method/index";
import AmountDetails from "../../molecules/AmountDetails/index";
import SpeedDelivery from "../../molecules/SpeedDelivery/index";

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
              <AmountDetails />
            </Grid>

            <Grid sx={{ position: "absolute", left: "65px", top: "1100px" }}>
              <SpeedDelivery />
            </Grid>
          </Grid>

          <Grid
            sx={{
              position: "absolute",
              left: "838px",
              top: "103px",
            }}
          >
            <ViewTransaction transaction="You are buying" />
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default index;
