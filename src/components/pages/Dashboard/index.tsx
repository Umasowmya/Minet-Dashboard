import { Grid } from "@mui/material";
import React from "react";
import Template from "../../templates/index";
import Footer from "../../organisms/Footer/index";
import Navbar from "../../organisms/Navbar/index";
import SideBar from "../../organisms/SideBar/index";
import Typo from "./../../atoms/Typo/index";
import { KeyboardArrowRight } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import image from "../../../assets/navbar.png";
import symbol from "../../../assets/symbol.png";
import PortfolioCard from "../../organisms/Portfolio";
import InvestmentCard from "../../organisms/DiscoverCard";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const Dahboard = () => {
  return (
    <Template
      Navbar={<Navbar />}
      Sidebar={<SideBar />}
      Content={
        <>
          <Grid>
            <Grid container direction="column">
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "108px",
                  left: "104px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="Watchlist"
                  component="div"
                  variant="subtitle2"
                  width="120px"
                />
                <Typo
                  text="Discover access "
                  component="div"
                  variant="subtitle1"
                  width="126px"
                />
                <KeyboardArrowRight color="primary" />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "108px",
                  left: "860px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="Edit "
                  component="div"
                  variant="body1"
                  width="30px"
                />

                <CreateIcon sx={{ height: "15px", width: "15px" }} />
              </Grid>
              <Grid sx={{ position: "absolute", top: "100px", left: "920px" }}>
                <img src={image} height="30px" width="64px" />
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              sx={{
                position: "absolute",
                top: "180px",
                left: "120px",
              }}
            >
              <InvestmentCard />
            </Grid>

            <Grid container direction="column">
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "480px",
                  left: "104px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="My portfolio value"
                  component="div"
                  variant="subtitle2"
                  width="180px"
                />
              </Grid>
              <Grid sx={{ position: "absolute", top: "480px", left: "920px" }}>
                <img src={symbol} height="30px" width="64px" />
              </Grid>
            </Grid>

            <Grid
              sx={{
                position: "absolute",
                top: "540px",
                left: "104px",
              }}
            >
              <PortfolioCard />
            </Grid>

            <Grid container direction="column">
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "950px",
                  left: "104px",
                  alignItems: "center",
                }}
              >
                <Typo
                  text="10 coins (3 active)"
                  component="div"
                  variant="subtitle1"
                  width="180px"
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "950px",
                  left: "540px",
                }}
              >
                <ErrorOutlineIcon
                  sx={{ width: "15px", height: "15px", pr: 1 }}
                />
                <Typo
                  text="Click on currency name below to display
                                 it on the graph"
                  component="div"
                  variant="body1"
                  width="380px"
                />
              </Grid>
            </Grid>

            <Grid></Grid>
          </Grid>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Dahboard;
