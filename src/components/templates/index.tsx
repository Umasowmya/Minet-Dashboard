import React from "react";
import { Grid } from "@mui/material";
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
  );
};

export default index;
