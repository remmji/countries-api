import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GlobalStyle from './globalStyles';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Themes";
import { useState,useEffect } from "react";
import Header from "./components/Header";
import ChoosenCountry from "./ChoosenCountry";
import BorderCountryComp from "./BorderCountryComp";



function App() {
  const [theme,setTheme] = useState(lightTheme);
  const [data, setData] = useState([]);
  const [searchCountry,setSearchCountry] = useState('');
  const [continent,setContinent] = useState('');
  const [borderCountry,setBorderCountry] = useState('');

  useEffect(() => {
      const fetchData = async () => {
      const response = await fetch('datacountry.json');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

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
          <Route path="/" element={ <Home data={data} searchCountry={searchCountry} setSearchCountry={setSearchCountry} continent={continent} setContinent={setContinent} /> } />
          <Route path={`/country`} element={ <ChoosenCountry borderCountry={borderCountry} setBorderCountry={setBorderCountry}/> } />
          <Route path={`/bordercountry/${borderCountry}`} element={ <BorderCountryComp data={data} borderCountry={borderCountry} setBorderCountry={setBorderCountry}/>}/>
      </Routes>
    </ThemeProvider>
   </>
    
  );
}

export default App;
