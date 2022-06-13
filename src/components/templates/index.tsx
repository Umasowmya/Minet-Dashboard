import React from "react";
import { Divider, Grid } from "@mui/material";

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
  return (
    <>
      <Grid container direction="column" sx={{ width: "90%" }}>
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
          height: "1350px",
          width: "1%",
          pt: 2,
          position: "absolute",
          left: "60px",
          top: "70px",
        }}
      >
        <Divider orientation="vertical" textAlign="left"></Divider>
      </Grid>

      <Grid
        sx={{
          height: "1px",
          width: "95%",
          pt: 2,
          position: "absolute",
          left: "80px",
          top: "68px",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>

      <Grid
        sx={{
          height: "1px",
          width: "95%",
          pt: 2,
          position: "absolute",
          left: "78px",
          top: "1400px",
        }}
      >
        <Divider textAlign="left"></Divider>
      </Grid>
    </>
  );
};

export default index;
