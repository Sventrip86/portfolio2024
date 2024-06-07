import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import { Container } from 'react-bootstrap';
import { ColorModeContext } from '../ColorModeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleMode } = useContext(ColorModeContext);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Container>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Fabs.
        </Typography>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href="https://blog.fabriziosebis.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <ListItemText
                  primary="Blog"
                  sx={{
                    fontSize: 30,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }}
                />
              </a>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Container>
  );

  return (
    <div className='nav-container'>
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            Fabs.
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <a href="https://blog.fabriziosebis.com" target="_blank" rel="noopener noreferrer" className="nav-link">
              Blog
            </a>
          </Box>
          <IconButton onClick={toggleMode} aria-label={mode === 'light' ? 'dark mode' : 'light mode'}>
            {mode === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton aria-label='GitHub' sx={{ ml: 3 }} href="https://github.com/sventrip86" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default Nav;
