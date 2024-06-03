import React from "react";

import Intro from "./Intro";
import Profile from "./Profile";
import { Container, Grid } from "@mui/material";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item xl={6} lg={8} xs={12}>
          <Intro />
        </Grid>
        <Grid item xl={6} lg={4}>
          <Profile />
        </Grid>
        <Grid item  xs={12}>
          
          <Portfolio />
        </Grid>
 
      
      </Grid>
    </Container>
  );
};

export default Home;
