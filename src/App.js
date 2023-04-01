import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GlobalStyle from './globalStyles';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes";
import { useState } from "react";
import Header from "./components/Header";

function App() {

const [theme,setTheme] = useState(lightTheme);

const handleTheme = () =>{
  if (theme == lightTheme){
    setTheme(darkTheme);
  }
  if (theme == darkTheme){
  setTheme(lightTheme);
  }
}


  return (
    <>
    <GlobalStyle/>
  
    <ThemeProvider theme={theme}>
      <Header handleTheme={handleTheme} />
      <Routes>
          <Route path="/" element={ <Home/> } />
      </Routes>
    </ThemeProvider>
   </>
    
  );
}

export default App;
