import "./App.css";
import Nav from "./components/Nav";

import { Outlet, Route, Routes, Link } from "react-router-dom";
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
            height: "100vh",
          }}
        >
          <Nav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              
            }}
          >
            <Routes>
              <Route path="/" element={<Outlet />} />
              <Route index element={<Home />} />
            </Routes>
          </Box>
          <Footer sx={{ mt: "auto" }}/>
        </Box>
        </ColorModeProvider>
    </>
  );
};

export default App;
