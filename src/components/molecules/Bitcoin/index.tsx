import React from "react";
import { Button, Grid } from "@mui/material";
import { customStyles } from "../../../theme";
import Typo from "../../atoms/Typo/index";
import { borderColor } from "@mui/system";
import { BorderVertical } from "@mui/icons-material";
import tick from "../../../assets/tick.png";

interface coinProps {
  image: string;
  title: string;
  price: string;
}

const index = ({ image, title, price }: coinProps) => {
  const classes = customStyles();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [flag, setFlag] = React.useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [border, setBorder] = React.useState("2px solid #FFFFF");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tickval, setTickval] = React.useState("");

  const handleClick = () => {
    setFlag(!flag);
    setBorder(flag ? "2px solid #0052FF" : "2px solid #FFFFF");
    setTickval(flag ? tick : "");
  };

  return (
    <Button
      onClick={handleClick}
      sx={{ textTransform: "none", border: { border } }}
    >
      <Grid
        container
        alignItems="center"
        direction="column"
        sx={{ position: "relative" }}
      >
        <Grid sx={{ position: "absolute", right: "1%", top: "1%" }}>
          <img src={tickval} alt="" />
        </Grid>

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
