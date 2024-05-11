import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import me from '../assets/me.png'


import Button  from '@mui/material/Button';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';

const Intro = () => {

  const [moreInfo, setMoreInfo] = useState(false)

  return (

    <Paper
    sx={{
      position: 'relative',
      backgroundColor: 'grey.100',
      color: '#fff',
      mb: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    paddingTop: '0px',   
    marginTop: '100px', 
    marginLeft: '30px', 
    marginRight: '30px',
  borderRadius: '10px' }}
  >

    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
        borderRadius: '10px'
      }}
    />

    <Grid container>
   
      <Grid item md={10}>

        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 5 },
            pr: { md: 0 },
          }}
        >

          <Typography component="h1" variant="h3" color="inherit" gutterBottom>

          <WavingHandOutlinedIcon sx={{fontSize:'40px'}}/> Hi I'm Fabs,  
          </Typography>
          <Typography variant="h6" color="inherit" paragraph>
I've been in love with IT since I can remember and have always believed that understanding code gives you superpowers. 
{moreInfo && ` Currently, I'm focused on web development using React. When I am not at the PC, I am probably listening to music, reading, or writing about it, and if the sun is shining, I prefer to move with my inline skates. I am based in Cagliari. Want to work with me or hire me?`}
</Typography>
<Button onClick={() => setMoreInfo(!moreInfo)}>
  {moreInfo ? 'Show less' : 'Read more'}
</Button>

        </Box>
      </Grid>
    </Grid>
  </Paper>
  )
}

export default Intro