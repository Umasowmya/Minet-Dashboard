import React from "react";
import { customStyles } from "../../../theme/index";
import { Grid } from "@mui/material";
import CustomGrid from "../../molecules/Bitcoin/index";
import axios from "axios";

interface bitcoinProps {
  image: string;
  title: string;
  price: string;
}

const index = () => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bitcoin, setBitcoin] = React.useState<bitcoinProps[]>([]);

  axios.get(`http://localhost:3000/cryptoGrids`).then((res) => {
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
