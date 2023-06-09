import React from 'react'
import styled from 'styled-components'
import SearchInput from './subComponents/SearchInput'
import DropdownInput from './subComponents/DropdownInput'
import CountryCard from './subComponents/CountryCard'


const MainContainer = styled.div`
background: ${props => props.theme.body};
min-height:100vh;
`
const SearchFunctionalityContainer = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 40em){
  flex-direction: column;
  align-items: center;
}
`
const CardWrapper = styled.div`
padding-inline: 5vw;
gap: 6vw;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding-bottom: 5vw;

@media (max-width: 40em){
  grid-template-columns: 1fr;
  place-items: center;
  padding-block: 4vw;
}
`

const Home = ({data, searchCountry, setSearchCountry, continent, setContinent}) => {

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