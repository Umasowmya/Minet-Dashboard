import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import Asset from "../../molecules/Assets/index";
import { GetDiscoverItems } from "../../../service/index";

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
    GetDiscoverItems().then((res) => {
      setBitcoin(res.data);
    });
  }, []);

  return (
    <div className={classes.scroll} role="Discover">
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
