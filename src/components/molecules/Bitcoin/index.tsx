import React from "react";
import { Button, Grid } from "@mui/material";
import { customStyles } from "../../../theme";
import Typo from "../../atoms/Typo/index";
import { borderColor } from "@mui/system";
import { BorderVertical } from "@mui/icons-material";

interface coinProps {
  image: string;
  title: string;
  price: string;
}

const index = ({ image, title, price }: coinProps) => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);

    const border = () => {
      var borderval;
      flag
        ? (borderval = "2px solid #0052FF")
        : (borderval = "2px solid #FFFFF");
      return borderval;
    };

    return border;
  };

  var p;

  return (
    <Button
      onClick={() => {
        p = handleClick;
      }}
      sx={{ textTransform: "none", border: { p } }}
    >
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <img src={image} alt="explore" width="56px" height="56px" />
        </Grid>
        <Grid item>
          <Typo
            variant="body1"
            text={title}
            component="div"
            className={classes.coinName}
          />
        </Grid>
        <Grid item>
          <Typo
            variant="body1"
            text={price}
            component="div"
            className={classes.coinName}
            width="120px"
          />
        </Grid>
      </Grid>
    </Button>
  );
};

export default index;
