import { Grid } from "@mui/material";
import React from "react";
import Typo from "../../atoms/Typo/index";
import Buttons from "../../atoms/Buttons/Buttons";
import { KeyboardArrowDown } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

var customStyles = makeStyles({
  footerElement: {
    width: "83px",
    height: "22px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#0052FF",
  },

  footerElement2: {
    width: "83px",
    height: "22px",
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#343446",
  },

  footer: {
    position: "absolute",
    top: "1450px",
    left: "80px",
  },
});
const index = () => {
  const classes = customStyles();
  return (
    <Grid
      container
      direction="row"
      spacing={5}
      className={classes.footer}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Typo
          variant="body2"
          className={classes.footerElement}
          component="div"
          text="DashBoard"
        />
      </Grid>

      <Grid item>
        <Typo
          variant="body2"
          className={classes.footerElement}
          component="div"
          text="Careers"
        />
      </Grid>

      <Grid item>
        <Typo
          variant="body2"
          className={classes.footerElement}
          width="150px"
          component="div"
          text="Legacy and Privacy"
        />
      </Grid>

      <Grid item>
        <Typo
          variant="body2"
          width="120px"
          className={classes.footerElement2}
          component="div"
          text="© 2021 Minet"
        />
      </Grid>

      <Grid item>
        <Buttons
          variant="outlined"
          endIcon={<KeyboardArrowDown />}
          sx={{
            position: "absolute",
            left: "75%",
            borderColor: "#E8E8F7",
            color: "black",
          }}
          children="English"
        />
      </Grid>

      <Grid item>
        <Buttons
          variant="outlined"
          sx={{
            position: "absolute",
            left: "85%",
          }}
          children="Need Help"
        />
      </Grid>
    </Grid>
  );
};

export default index;
