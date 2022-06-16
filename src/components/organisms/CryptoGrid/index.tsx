import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CustomGrid from "../../molecules/Bitcoin/index";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { GetCryptoItems } from "../../../service/index";

interface bitcoinProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

const customStyles = makeStyles({
  scroll: {
    height: "325x",
    overflowY: "scroll",
    width: "650px",

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

    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

const CryptoComponent = () => {
  const classes = customStyles();

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bitcoin, setBitcoin] = React.useState<bitcoinProps[]>([]);

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    // axios.get(`http://localhost:3000/cryptoItems`).then((res) => {
    //   setBitcoin(res.data);
    // });
    GetCryptoItems().then((res) => {
      setBitcoin(res.data);
    });
  }, []);

  return (
    <div className={classes.scroll} role="CryptoGrid">
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
          width: "620px",
          height: "280px",
        }}
      >
        {bitcoin.map((value: bitcoinProps) => {
          return (
            <Grid item>
              <CustomGrid
                id={value.id}
                image={value.image}
                title={value.title}
                price={value.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CryptoComponent;
