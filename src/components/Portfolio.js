import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import projectsData from "../utils/projectsData";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import { Container, Grid } from "@mui/material";


const Portfolio = () => {

//   const [projectIndex, setProjectIndex] = useState(0);

//   const handleNext = () => {
//     setProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length); // restart to 0 when reaches the last index
//   };

//   const handlePrevious = () => {
//     setProjectIndex(
//       (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
//     ); // preventing negative index
//   };

//   const currentProject = projectsData[projectIndex];

  return (
    // <Paper sx={{background:'#F9F9F7'}}>
    <>

    <Typography variant="h3" gutterBottom sx={{color: 'black', textAlign: 'center', textDecoration: 'underline'}}>Projects</Typography>
    <Box sx={{ p: 4 }}>
      
      <Grid container>
        {projectsData.map( (project) => (
                 <Grid item key={project.id} xs={12} sm={6} md={4}>

             <Card
            key={project.id}
      sx={{ maxWidth: 450, background: '', m: 1 }}
          >
            <CardHeader title={project.title}  sx={{ background: '#ffeb3b' }}/>
            <CardMedia
              component="img"
              alt={project.title}
              height="150"
              image={project.image}
            />
              <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {project.tags.map((tag, index) => (
                  <Chip key={index} label={tag.label} icon={tag.icon} />
                ))}
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-start', mt: 'auto' }}>              
            {project.link && (
                <Button variant="contained" color="primary" sx={{ mb: 2 }} size="small" href={project.link}>
                  Visit
                </Button>
              
              )}
              {project.github && (
                <Button variant="contained" color="primary" sx={{ mb: 2 }} size="small" href={project.github}>
                  GitHub
                </Button>
              )}
            </CardActions>
          </Card>
          </Grid>


           
            ))}
        
     </Grid>
    </Box>
    </>
  );
};

export default Portfolio;
