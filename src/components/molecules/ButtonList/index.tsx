import { Button, Grid } from "@mui/material";
import React from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { EXTRA_COLORS } from "../../../theme";

const customStyles = makeStyles({
  highlight: {
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
});

interface Props {
  buttonval: string;
  border: string;
  background: string;
}

const ButtonList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bitcoin, setBitcoin] = React.useState<Props[]>([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    axios.get(`http://localhost:3000/buttonList`).then((res) => {
      setBitcoin(res.data);
    });
  }, []);

  const classes = customStyles();
  return (
    <Grid container direction="row" sx={{ display: "flex" }}>
      <KeyboardArrowLeft />

      {bitcoin.map((value: Props) => {
        return (
          <Button
            variant="outlined"
            sx={{
              background: value.background,
              textTransform: "none",
              border: value.border,
              color: "black",
              mr: 2,
              width: "100px",
            }}
            className={classes.highlight}
          >
            {value.buttonval}
          </Button>
        );
      })}

      <KeyboardArrowRight />
    </Grid>
  );
};

export default ButtonList;
