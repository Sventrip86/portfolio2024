import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import me from "../assets/me.png";
import profile from "../assets/profile.jpg";
import Chip from "@mui/material/Chip";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import RollerSkatingIcon from "@mui/icons-material/RollerSkating";
import AlbumIcon from "@mui/icons-material/Album";
import WineBarIcon from '@mui/icons-material/WineBar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MailIcon from '@mui/icons-material/Mail';
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CreateIcon from '@mui/icons-material/Create';

const Profile = () => {
  return (
    <Paper elevation={8}>
      <Box
        sx={{
          p: 3,
          mb: 2,
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Fabrizio Sebis"
            src={me}
            sx={{ width: { xs: 100, md: 150 }, height: { xs: 100, md: 150 }, border: "solid 1px" }} 
          />
          <Typography
            variant="h5"
            color="inherit"
            gutterBottom
            sx={{ m: "7px" }}
          >
            Fabrizio Sebis
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", m: "5px", fontWeight: 500 }} 
          >
            {" "}
            Senior IT Support | Tech Blogger | Web Development Enthusiast |
            Longtime Cybersecurity Lover | Open to New Opportunities
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', color: '#808080', mb: 2 }}>
          <LocationOnOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Cagliari, Italy</Typography>
          <RecordVoiceOverOutlinedIcon sx={{ mx: 1 }} />
          <Typography variant="body2">Italian / English</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#808080', gap:2 }}>
     
          <Button
            variant="contained"
            color="primary"
            startIcon={<MailIcon />}
            href="mailto:info@fabriziosebis.com"
            sx={{ mb: 2 }}
          >
            Contact Me
          </Button>
          <Button
            variant="contained"
            color="success"
            startIcon={<DownloadIcon />}
            href="/path-to-resume.pdf"
            download
            sx={{ mb: 2 }}
          >
            Download Resume
          </Button>
          </Box>

        </Container>
        <Paper
          sx={{
            backgroundColor: "#fffff",
            p: 2,
            borderRadius: "10px",
            mt: 2
          }}
          elevation={4}
        >
          <Typography variant="h6"
            color="inherit" sx={{ pb: 1,  }}>INTRESTS</Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ justifyContent: 'center' }}>
            <Chip icon={<RollerSkatingIcon/>} label="Roller Skating" variant="outlined"/>
            <Chip icon={<AlbumIcon color="black" />} label="Vinyl" variant="outlined" />
            <Chip icon={<MusicNoteIcon />} label="Live Music" variant="outlined" />
            <Chip icon={<WineBarIcon  color="error"/>} label="Wine" variant="outlined" />
            <Chip icon={<LocalFloristIcon color="success" />} label="Gardening" variant="outlined" />
            <Chip icon={<AutoStoriesIcon color="black" />} label="Reading" variant="outlined" />
            <Chip icon={<CreateIcon color="black" />} label="Writing" variant="outlined" />


          </Stack>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Profile;
