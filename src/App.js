import './App.css';
import Nav from './components/Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  yellow } from '@mui/material/colors';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFEE59',
    },
    secondary: yellow,
  },
});

const App = () => {
  return (
    <>
     <ThemeProvider theme={theme}>
<Nav/>
<Routes>

<Route path='/' element={<Outlet/>} />
  <Route index element={<Home/>} />  
  <Route path='about' element={<About/>} />

</Routes>

</ThemeProvider>
    </>
  );
};

export default App;
