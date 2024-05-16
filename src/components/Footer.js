import { Box, Typography, Grid, IconButton } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';



const Footer = () => {
  return (
    <Box 
    component="footer" 
    sx={{ 
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,238,89,1) 70%)',
      py: 2, 
      px: 3,
      mt: 'auto'
    }}
  >
    <Grid container spacing={3} justifyContent="space-between" alignItems="center">
      <Grid item xs={12} sm={4} >
        <Typography variant="body2" sx={{fontFamily: 'poppins'}}>
        Made with ❤️ + ☕ and a lot of JSX.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box textAlign={{ xs: 'center', sm: 'right' }}>
          
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <XIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  </Box>

  )
}

export default Footer