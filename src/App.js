import "./App.css";
import Nav from "./components/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { Outlet, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFEE59",
    },
    secondary: yellow,
  },
  typography: {
    fontFamily: [
      'Poppins'
    ]
  }
  
});







const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Nav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              paddingTop: "64px", // Adjust this value if your AppBar height is different
            }}
          >
            <Routes>
              <Route path="/" element={<Outlet />} />
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Box>
          <Footer/>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
