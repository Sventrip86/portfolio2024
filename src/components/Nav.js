import React from 'react'
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


const Nav = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawerWidth = 240;

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
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
                  <ListItemText primary={item.name}  />
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
    </Toolbar>
  </AppBar>
  <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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