import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GlobalStyle from './globalStyles';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";



function App() {
  return (
    <>
    <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
      <Routes>
          <Route path="/" element={ <Home/> } />
      </Routes>
    </ThemeProvider>
   </>
    
  );
}

export default App;
