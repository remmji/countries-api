import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchInput from './subComponents/SearchInput'
import DropdownInput from './subComponents/DropdownInput'
import CountryCard from './subComponents/CountryCard'


const MainContainer = styled.div`
background: ${props => props.theme.body};
height:auto;
`
const SearchFunctionalityContainer = styled.div`
display: flex;
justify-content: space-between;
`
const CardWrapper = styled.div`
padding-inline: 5vw;
display: flex;
justify-content: space-around;
gap: 6vw;
flex-wrap: wrap;
padding-bottom: 5vw;
`

const Home = () => {
  const [data, setData] = useState([]);
  const [searchCountry,setSearchCountry] = useState('');
  const [continent,setContinent] = useState('');

  useEffect(() => {
      const fetchData = async () => {
      const response = await fetch('datacountry.json');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);




  return (

  
    <MainContainer>
      <SearchFunctionalityContainer>
      <SearchInput searchCountry={searchCountry} setSearchCountry={setSearchCountry}/>
      <DropdownInput setContinent={setContinent}/>
      </SearchFunctionalityContainer>
      <CardWrapper>
      {data.map(country => (
        <CountryCard key={country.numericCode} data={country} searchCountry={searchCountry} continent={continent} />
      ))}
      </CardWrapper>
    </MainContainer>
  

  )
}

export default Home