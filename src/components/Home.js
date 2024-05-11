import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import me from '../assets/me.png'

const Home = () => {
  return (
    <Paper
    sx={{
      position: 'relative',
      backgroundColor: 'grey.400',
      color: '#fff',
      mb: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    paddingTop: '64px',   
    marginTop: '80px', 
    marginLeft: '30px', 
    marginRight: '200px' }}
  >
    {/* Increase the priority of the hero background image */}
    {<img style={{ display: 'none' }} src={me}  />}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      }}
    />
    <Grid container>
      <Grid item md={6}>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
       Hi I'm Fabs
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
desc          </Typography>
          <Link variant="subtitle1" href="#">
link          </Link>
        </Box>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default Home