import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import projectsData from '../utils/projectsData'

import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from "@mui/material/CardHeader";

const Portfolio = () => {

    const [projectIndex, setProjectIndex] = useState(0)

    const handleNext = () => {
        setProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length); // restart to 0 when reaches the last index
      };
    
      const handlePrevious = () => {
        setProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length); // preventing negative index
      };

      const currentProject = projectsData[projectIndex]


  return (
    // <Paper sx={{background:'#F9F9F7'}}>
        <Box
        sx={{
          p: 1,
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <Button onClick={handlePrevious} variant="contained" color="primary" sx={{ mb: 2 }}>Prev</Button>
        <Box
        sx={{
          p: 4,
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          
        

        }}
      >
        
             <Card key={currentProject.id}sx={{ minWidth: 450, background: '', height:370}} >
                <CardHeader
                title={currentProject.title}
               
             />
             <CardMedia
               component="img"
               alt={currentProject.title}
               height="140"
               image={currentProject.image}
             />
             <CardContent>
              
               <Typography variant="body2" color="text.secondary">
                {currentProject.description}
               </Typography>
               <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {currentProject.tags.map((tag, index) => (
                  <Chip key={index} label={tag} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              {currentProject.link && <Button size="small" href={currentProject.link}>Visit</Button>}
              {currentProject.github && <Button size="small" href={currentProject.github}>GitHub</Button>}
            </CardActions>
          </Card>
        
      </Box>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleNext}>Next</Button>
      </Box>
    // </Paper>
   
  )
}

export default Portfolio