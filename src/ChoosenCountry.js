import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


const CountryWrapper = styled.div`
height: 100vh;
background: ${props => props.theme.body};
padding:5vw;
`
const BackButton = styled.button`
width: 10vw;
height: 5vh;
border-radius: 0.5rem;
outline: none;
border: none;
box-shadow: 0px 0px 10px 1px lightgray;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
font-weight:600;
`

const GridContainer = styled.div`
display: grid;
grid-template-areas:'image text';
grid-template-columns: 1fr 1fr;
padding-block: 5vw;
gap: 5vw;
`
const FlagImg = styled.img`
grid-area: image;
width: 40vw;
height:25vw;
box-shadow: 0px 0px 10px 1px lightgray;
`
const InfoContainer = styled.div`
grid-area: text;
`

const ChoosenCountry = () => {
const {state} = useLocation();

  return (

    <CountryWrapper>
        <BackButton>Back</BackButton>
        <GridContainer>
            <FlagImg src={state.data.flags.png} alt={state.data.name}/>
            <InfoContainer>
                sdfsf
            </InfoContainer>
        </GridContainer>
    </CountryWrapper>
    
    
  );
};



export default ChoosenCountry;