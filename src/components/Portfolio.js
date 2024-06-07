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
import {  Grid } from "@mui/material";
import { ColorModeContext } from "../ColorModeContext";
import { useTheme } from '@mui/material/styles';


const Portfolio = () => {
  const theme = useTheme();


  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: "black", textAlign: "center", textDecoration: "none" }}
      >
        Projects
      </Typography>
      <Box sx={{ gap: 2 }}>
        <Grid container>
          {projectsData.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card
                key={project.id}
                sx={{ maxWidth: 450, background: "", m: 1,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover' : {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  }
                 }}
              >
                <CardHeader
                  title={project.title}
                  sx={{
                    bgcolor: 'primary',
                    color: theme.palette.text.primary,
                  }}
                />
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="150"
                  image={project.image}
                />
                <CardContent sx={{ flexGrow: 1, 
                transition: 'background-color 0.3s',
                '&:hover' : {
                  backgroundColor: theme.palette.action.hover,

                  } }}>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    {project.tags.map((tag, index) => (
                      <Chip key={index} label={tag.label} icon={tag.icon} variant="outlined"/>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-start", mt: "auto" }}>
                  {project.link && (
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mb: 2 }}
                      size="small"
                      href={project.link}
                    >
                      Visit
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mb: 2 }}
                      size="small"
                      href={project.github}
                    >
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
