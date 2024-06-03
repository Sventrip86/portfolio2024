import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";



import Button from "@mui/material/Button";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";

const Intro = () => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
      <Box
        sx={{
          p: 4, 
          mb: 2
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          <WavingHandOutlinedIcon sx={{ fontSize: "35px" }} /> Hi I'm Fabs,
        </Typography>
        <Typography variant="h6" color="inherit" paragraph>
          I've been in love with IT since I can remember and have always
          believed that understanding code gives you superpowers.
          {moreInfo &&
            ` Currently, I'm focused on web development using React. When I am not at the PC, I am probably listening to music, reading, or writing about it, and if the sun is shining, I prefer to move with my inline skates. I am based in Cagliari. Want to work with me or hire me?`}
        </Typography>
        <Button onClick={() => setMoreInfo(!moreInfo)}>
          {moreInfo ? "Show less" : "Read more"}
        </Button>
      </Box>
  );
};

export default Intro;
