import React from "react";
import { Divider, Grid } from "@mui/material";
import { customStyles } from "../../theme";

interface Props {
  VerticalHeader: React.ReactNode;
  HorizontalHeader: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}

const index = ({
  VerticalHeader,
  HorizontalHeader,
  Content,
  Footer,
}: Props) => {
  const classes = customStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item sx={{ position: "absolute", left: "2%" }}>
          {VerticalHeader}
        </Grid>
        <Grid item sx={{ position: "absolute", top: "3%" }}>
          {HorizontalHeader}
        </Grid>
        <Grid>{Content}</Grid>
        {Footer}
      </Grid>

      <Grid
        sx={{
          height: "1290px",
          width: "1%",
          pt: 2,
          position: "absolute",
          left: "75px",
          top: "70px",
        }}
      >
        <Divider orientation="vertical" textAlign="left"></Divider>
      </Grid>

      <Grid
        sx={{
          height: "1px",
          width: "100%",
          pt: 2,
          position: "absolute",
          left: "93px",
          top: "68px",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>

      <Grid
        sx={{
          height: "1px",
          width: "100%",
          pt: 2,
          position: "absolute",
          left: "93px",
          top: "1350px",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>
    </>
  );
};

export default index;
