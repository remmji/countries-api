import React from 'react'
import styled from 'styled-components'


const MainContainer = styled.div`
background: ${props => props.theme.body};
height:100vh;
`


const Home = () => {
  return (


    <MainContainer>
      Home
    </MainContainer>


  )
}

export default Home