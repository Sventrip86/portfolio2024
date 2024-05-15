import React from 'react'


import Intro from './Intro'
import { Container,  Box, Grid } from '@mui/material'


  

const Home = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={5}>
  <Grid item lg={8}>
  <Intro/>  </Grid>
  <Grid item lg={4}>
  <Intro/> 
  </Grid>
  <Grid item lg={5}>
  <Intro/>
  </Grid>
  <Grid item lg={7}>
  <Intro/>
  </Grid>
</Grid>
        

    

    </Container>

  )
}

export default Home