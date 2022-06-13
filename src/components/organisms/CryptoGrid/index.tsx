import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CustomGrid from "../../molecules/Bitcoin/index";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

interface bitcoinProps {
  image: string;
  title: string;
  price: string;
}

var customStyles = makeStyles({
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
  },
});

const index = () => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bitcoin, setBitcoin] = React.useState<bitcoinProps[]>([]);

  axios.get(`http://localhost:3000/cryptoItems`).then((res) => {
    setBitcoin(res.data);
  });

  return (
    <div className={classes.scroll}>
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

export default index;
