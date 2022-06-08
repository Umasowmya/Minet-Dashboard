import React from "react";
import { customStyles } from "../../../theme/index";
import Typo from "../../atoms/Typo/index";
import image1 from "../../../assets/explore.png";
import { Grid } from "@mui/material";
import CustomGrid from "../../molecules/Bitcoin/index";
import image2 from "../../../assets/etherum.png";
import image3 from "../../../assets/binance.png";
import image4 from "../../../assets/Tether.png";
import image5 from "../../../assets/cardano.png";
import image6 from "../../../assets/xrp.png";
import image7 from "../../../assets/dogecoin.png";
import image8 from "../../../assets/polka.png";

interface bitcoinProps {
  image: string;
  title: string;
  price: string;
}

const index = () => {
  const classes = customStyles();

  const bitcoin: bitcoinProps[] = [
    {
      image: image1,
      title: "Bitcoin",
      price: "$3,406,069.54",
    },

    {
      image: image2,
      title: "Etherum",
      price: "$240,048.03",
    },

    {
      image: image3,
      title: "Binance",
      price: "$30,054.88",
    },

    {
      image: image4,
      title: "Tether",
      price: "$74.21",
    },

    {
      image: image5,
      title: "Cardono",
      price: "$138.22",
    },

    {
      image: image6,
      title: "XRP",
      price: "$76.73",
    },

    {
      image: image7,
      title: "Dogcoin",
      price: "$21.37",
    },

    {
      image: image8,
      title: "Polkadot",
      price: "$1642.39",
    },
  ];

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ width: "680px", height: "325px", border: "1px solid #E8E8F7" }}
    >
      {bitcoin.map((value, index) => {
        return (
          <Grid item xs={3}>
            <CustomGrid
              image={value.image}
              title={value.title}
              price={value.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default index;
