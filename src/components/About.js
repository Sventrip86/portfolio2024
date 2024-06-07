import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          I am Fabrizio Sebis, a Senior IT Specialist with a passion for web development, blogging, and cybersecurity. With over a decade of experience in the tech industry, I have honed my skills in various domains, from troubleshooting complex IT issues to developing interactive web applications.
        </Typography>
        <Typography variant="body1" paragraph>
          My journey in IT began at a young age, fueled by curiosity and a desire to understand how things work. Over the years, I have expanded my expertise and shared my knowledge through tech blogs, workshops, and collaborative projects.
        </Typography>
        <Typography variant="body1" paragraph>
          When I'm not immersed in technology, you can find me enjoying live music, exploring the world on my inline skates, or indulging in a good book. Based in Cagliari, Italy, I am always open to new opportunities and collaborations.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
