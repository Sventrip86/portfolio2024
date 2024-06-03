import React, { useState } from 'react'
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
import './Nav.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { ColorModeContext} from '../ColorModeContext'
import { Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';


const Nav = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { mode, toggleMode } = useContext(ColorModeContext);

    const drawerWidth = 240;

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact me', path: '/contact' },
];


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
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.name}  sx={{
                  fontSize: 30,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}  />
                </ListItemButton>
              </ListItem>
            ))}
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
<MenuIcon/>
      </IconButton>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
      >
        Fabs.
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} className="nav-link">
            {item.name}
          </Link>
        ))}
      </Box>
      {/* switch to change dark or light mode */}

      {mode === 'light' ? <IconButton onClick={toggleMode} aria-label='light'><WbSunnyIcon /></IconButton> : <IconButton onClick={toggleMode} aria-label='light'><DarkModeIcon/></IconButton>}
{/* 
      <Button onClick={toggleMode} variant="contained">
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button> */}
          <IconButton aria-label='light' sx={{ml: 3}}><GitHubIcon/></IconButton>
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
      </nav></div>
  )
}

export default Nav