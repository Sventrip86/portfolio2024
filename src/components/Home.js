import React from "react";

import Intro from "./Intro";
import Profile from "./Profile";
import { Container, Grid } from "@mui/material";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item lg={8}>
          <Intro />{" "}
          <Portfolio />
        </Grid>
        <Grid item lg={4}>
          <Profile />
        </Grid>
        <Grid item lg={5}>
          
        </Grid>
      
      </Grid>
    </Container>
  );
};

export default Home;
