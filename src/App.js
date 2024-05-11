import './App.css';
import Nav from './components/Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  yellow } from '@mui/material/colors';
import Intro from './components/Intro';


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
<Nav></Nav>
<Intro/>
</ThemeProvider>
    </>
  )
}

export default App;
