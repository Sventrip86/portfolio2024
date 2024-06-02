import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import RollerSkatingIcon from "@mui/icons-material/RollerSkating";
import AlbumIcon from "@mui/icons-material/Album";
import WineBarIcon from '@mui/icons-material/WineBar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Portfolio = () => {
  return (
    <Paper sx={{}}>
        <Box
        sx={{
          p: 3,
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
          <Card sx={{ maxWidth: 445, background: '', }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Box>
    
    </Paper>
   
  )
}

export default Portfolio