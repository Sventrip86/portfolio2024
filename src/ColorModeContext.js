import { createContext,  useState } from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { yellow } from "@mui/material/colors";



// creazione context del tema
const ColorModeContext = createContext();

// creazione del provider del context con state 
const ColorModeProvider = ({children}) =>{
    const [mode, setMode] = useState('light')

    //funzione che verifica mode chiamata da un onChange
    const toggleMode = () => {
        setMode( (mode) => (
            mode === 'light' ? 'dark' : 'light'
        ))
    }

    // creazione del tema

      const theme = createTheme({
        palette: {
          mode,
            primary: yellow,
            secondary: {
              main: '#607d8b',
            },
          },
        typography: {
          fontFamily: [
            'Poppins'
          ]
        }
        
      });
      


    return(
        <ColorModeContext.Provider value={{mode, toggleMode}}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )

}

export { ColorModeContext, ColorModeProvider };

