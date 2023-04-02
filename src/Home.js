import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchInput from './subComponents/SearchInput'
import DropdownInput from './subComponents/DropdownInput'
import CountryCard from './subComponents/CountryCard'


const MainContainer = styled.div`
background: ${props => props.theme.body};
height:100vh;
`
const SearchFunctionalityContainer = styled.div`
display: flex;
justify-content: space-between;
`


const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch('./data/datacountry.json');
    console.log(response);
    const data = await response.text();
    console.log(data);
}


fetchData();

  return (

  
    <MainContainer>
      <SearchFunctionalityContainer>
      <SearchInput/>
      <DropdownInput/>
      </SearchFunctionalityContainer>
      {data.map(country => (
        <CountryCard key={country.area} data={country} />
      ))}
    </MainContainer>
  

  )
}

export default Home