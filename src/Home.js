import React from 'react'
import styled from 'styled-components'
import SearchInput from './subComponents/SearchInput'
import DropdownInput from './subComponents/DropdownInput'


const MainContainer = styled.div`
background: ${props => props.theme.body};
height:100vh;
`
const SearchFunctionalityContainer = styled.div`
display: flex;
justify-content: space-between;
`


const Home = () => {
  return (

  
    <MainContainer>
      <SearchFunctionalityContainer>
      <SearchInput/>
      <DropdownInput/>
      </SearchFunctionalityContainer>
    </MainContainer>
  

  )
}

export default Home