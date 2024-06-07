import React from "react";

import Intro from "./IntroOLD";
import Profile from "./Profile";
import { Container, Grid } from "@mui/material";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <Container maxWidth="xl" >
      <Grid container spacing={5} sx={{ padding: 3 }}>
        <Grid item xl={6} lg={8} xs={12}>
          <Intro />
        </Grid>
        <Grid item xl={6} lg={4} xs={12}>
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
