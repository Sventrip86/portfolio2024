import "./App.css";
import Nav from "./components/Nav";

import { Outlet, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import {ColorModeProvider} from "./ColorModeContext";



const App = () => {
  return (
    <>
    <ColorModeProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            height: "100vh",
            alignContent: 'stretch '
            
          }}
        >
          <Nav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              paddingTop: "64px", // Adjust this value if your AppBar height is different
              overflowY: "auto",
              
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
        </ColorModeProvider>
    </>
  );
};

export default App;
