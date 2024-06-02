import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import battoro from '../assets/projects/battoro.PNG'
import blog from '../assets/projects/blog.PNG'
import fradis from '../assets/projects/fradis.jpg'
import lacasa from '../assets/projects/lacasa.PNG'
import projectsData from '../utils/projectsData'

import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Portfolio = () => {

    const [projectIndex, setProjectIndex] = useState(0)

    const handleNext = () => {
        setProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
      };
    
      const handlePrevious = () => {
        setProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
      };

      const currentProject = projectsData[projectIndex]
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
        <Button onClick={handlePrevious}>Prev</Button>
        <Box
        sx={{
          p: 3,
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        
             <Card key={currentProject.id}sx={{ maxWidth: 445, background: '', }}>
             <CardMedia
               component="img"
               alt={currentProject.title}
               height="140"
               image={currentProject.image}
             />
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 {currentProject.title}
               </Typography>
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
      <Button onClick={handleNext}>Next</Button>
      </Box>
    </Paper>
   
  )
}

export default Portfolio