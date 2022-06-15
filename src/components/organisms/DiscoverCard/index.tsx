import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import axios from "axios";
import Asset from "../../molecules/Assets/index";

interface assetsProps {
  cryptoImage: string;
  cryptoItem: string;
  price: string;
  graph: string;
}

const customStyles = makeStyles({
  scroll: {
    width: "840px",
    height: "284px",
  },
});

const DiscoverCard = () => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bitcoin, setBitcoin] = React.useState<assetsProps[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    axios.get(`http://localhost:3000/discoverItems`).then((res) => {
      setBitcoin(res.data);
    });
  }, []);

  return (
    <div className={classes.scroll}>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{
          width: "1000px",
          height: "320px",
          display: "flex",
        }}
      >
        {bitcoin.map((value: assetsProps) => {
          return (
            <Grid item sx={{ p: 1 }}>
              <Asset
                cryptoImage={value.cryptoImage}
                cryptoItem={value.cryptoItem}
                price={value.price}
                graph={value.graph}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default DiscoverCard;
