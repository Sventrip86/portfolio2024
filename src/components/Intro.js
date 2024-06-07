import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";

const Intro = () => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <Paper elevation={3} sx={{ p: 4, mb: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          <WavingHandOutlinedIcon sx={{ fontSize: "35px", mr: 1 }} /> Hi, I'm Fabs,
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          I've been in love with IT since I can remember and have always believed that understanding code gives you superpowers.
        </Typography>
        <Collapse in={moreInfo} timeout="auto" unmountOnExit>
          <Typography variant="h6" color="inherit" paragraph>
          I'm  a Senior IT Specialist with a passion for web development, blogging, and cybersecurity. With over a decade of experience in the tech industry, I've refined my skills in various areas, from troubleshooting complex IT issues to developing interactive web applications. </Typography>
          <Typography variant="h6" color="inherit" paragraph>
          My IT journey started young, driven by my curiosity and a desire to understand how computers work. Over the years, I've expanded my expertise and shared my knowledge through tech blogs and collaborative projects.</Typography>
          <Typography variant="h6" color="inherit" paragraph>
          When I'm away from the monitors, you can find me enjoying live music, exploring on my inline skates, or getting lost in a good book. Based in Cagliari, Italy, I'm always open to new opportunities and collaborations. </Typography>
        </Collapse>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setMoreInfo(!moreInfo)}
          sx={{ mt: 2 }}
        >
          {moreInfo ? "Show less" : "Read more"}
        </Button>
      </Box>
    </Paper>
  );
};

export default Intro;
