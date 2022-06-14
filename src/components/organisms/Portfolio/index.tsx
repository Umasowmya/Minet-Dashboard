import { Grid } from "@mui/material";
import React from "react";
import InvestmentCard from "../../molecules/InvestmentCard";
import TimeComponent from "../../molecules/TimePeriods";
import image from "../../../assets/investment.png";
import imageBitcoin from "../../../assets/investmentBitcoin.png";
import analysisGraph from "../../../assets/analysisGraph.png";
import Typo from "../../atoms/Typo";

const Portfolio = () => {
  return (
    <Grid
      container
      sx={{
        border: "1px solid #E8E8F7",
        position: "relative",
        width: "840px",
      }}
    >
      <Grid
        container
        direction="row"
        spacing={1}
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid sx={{ display: "flex", width: "360px", p: 1 }} spacing={2}>
          <Grid item sx={{ p: 1 }}>
            <InvestmentCard
              title="Total Investment"
              price="$ 11,900,204"
              image={image}
            />
          </Grid>
          <Grid item sx={{ p: 1 }}>
            <InvestmentCard
              title="Bitcoin"
              price="$34,000.00"
              image={imageBitcoin}
            />
          </Grid>
        </Grid>
        <Grid sx={{ width: "380px", height: "89px", p: 1 }}>
          <TimeComponent />
        </Grid>
      </Grid>
      <Grid sx={{ width: "820px", p: 1 }}>
        <img
          src={analysisGraph}
          alt="analysis graph"
          height="250px"
          width="800px"
        />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
