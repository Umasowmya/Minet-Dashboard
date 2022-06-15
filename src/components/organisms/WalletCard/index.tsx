import { Grid } from "@mui/material";
import React from "react";
import PortfolioCard from "../../molecules/PortfolioCard";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

interface cardProps {
  image: string;
  cryptoItem: string;
  group: string;
  price: string;
  profit?: string | undefined;
}

const customStyles = makeStyles({
  scroll: {
    height: "182x",
    overflowY: "scroll",
    width: "345px",
    padding: "10px",

    "&::-webkit-scrollbar": {
      width: "5px",
    },

    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px #FFFFFF",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#B4B4CF",
      borderRadius: "10px",
    },
  },
});

const WalletCard = () => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bitcoin, setBitcoin] = React.useState<cardProps[]>([]);

  axios.get(`http://localhost:3000/portfolioItems`).then((res) => {
    setBitcoin(res.data);
  });

  return (
    <div className={classes.scroll}>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
          width: "340px",
          height: "180px",
        }}
      >
        {bitcoin.map((value: cardProps) => {
          return (
            <Grid item>
              <PortfolioCard
                image={value.image}
                cryptoItem={value.cryptoItem}
                price={value.price}
                group={value.group}
                profit={value.profit}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default WalletCard;
