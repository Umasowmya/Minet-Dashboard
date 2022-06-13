import { Grid } from "@mui/material";
import React from "react";
import explore from "../../../assets/explore.png";
import Typo from "../../atoms/Typo";
import image from "../../../assets/24h.png";
import graph from "../../../assets/graph.png";

interface assetsProps {
  cryptoImage: string;
  cryptoItem: string;
  price: string;
  graph: string;
}

const index = ({ cryptoImage, cryptoItem, price, graph }: assetsProps) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        border: "1px solid #E8E8F7",
        p: 2,
        width: "fit-content",
      }}
      spacing={3}
    >
      <Grid item>
        <img src={cryptoImage} alt="explore" width="42px" height="42px" />
      </Grid>
      <Grid item>
        <Grid item>
          <Typo component="div" text={cryptoItem} width="55px" />
        </Grid>
        <Grid item>
          <Typo component="div" text={price} width="106px" />
        </Grid>
        <Grid item>
          <img src="" height="20px" />
        </Grid>
        <Grid item>
          <img src={image} alt="time" width="41px" height="18px" />
        </Grid>
      </Grid>
      <Grid item>
        <img src={graph} alt="graph" width="190px" height="82px" />
      </Grid>
    </Grid>
  );
};

export default index;
