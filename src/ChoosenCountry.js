import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
box-shadow: 0px 0px 10px 1px grey;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
font-weight:600;
cursor: pointer;
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
box-shadow: 0px 0px 10px 1px grey;
`
const InfoContainer = styled.div`
grid-area: text;

h1{
color: ${props => props.theme.text};
padding-block: 1.5vw;
font-size: 2vw;
}
`

const GridWrapper = styled.div`
display: grid;
gap:5vw;
grid-template-areas: 'one two'
;`
const FlextTextContainer1 = styled.div`
grid-area: one;
display: flex;
flex-direction: column;
gap:1vw;

h4{
font-size: 1.1vw;
color: ${props => props.theme.text};
}

p{
display:inline;
color: ${props => props.theme.text};
font-size: 1.1vw;
`

const FlextTextContainer2 = styled.div`
grid-area: two;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap:1vw;

h4{
font-size: 1.1vw;
color: ${props => props.theme.text};
}

p{
display:inline;
color: ${props => props.theme.text};
font-size: 1.1vw;
`
const BorderText = styled.div`
padding-top:5vw;
h4{
font-size: 1.1vw;
color: ${props => props.theme.text};
}

p{
display:inline;
color: ${props => props.theme.text};
font-size: 1.1vw;
`
const ChoosenCountry = () => {
const {state} = useLocation();

  return (

    <CountryWrapper>
       <Link to='/'><BackButton>Back</BackButton></Link> 
        <GridContainer>
            <FlagImg src={state.data.flags.png} alt={state.data.name}/>
            <InfoContainer>
                <h1>{state.data.name}</h1>
                <GridWrapper>
                    <FlextTextContainer1>
                        <div>
                        <h4>Native Name:</h4>
                        <p> {state.data.nativeName}</p>
                        </div>
                        <div>
                        <h4>Population:</h4>
                        <p> {state.data.population.toLocaleString()}</p>
                        </div>
                        <div>
                        <h4>Region:</h4>
                        <p> {state.data.region}</p>
                        </div>
                        <div>
                        <h4>Sub Region:</h4>
                        <p> {state.data.subregion}</p>
                        </div>
                        <div>
                        <h4>Capital:</h4>
                        <p> {state.data.capital}</p>
                        </div>                 
                    </FlextTextContainer1>
                    <FlextTextContainer2>
                        <div>
                        <h4>Top Level Domain:</h4>
                        <p> {state.data.topLevelDomain}</p>
                        </div>
                        <div>
                        <h4>Currencies:</h4>
                        <p> {state.data.currencies.map(currency => currency.name).join(', ')}</p>
                        </div>
                        <div>
                        <h4>Languages:</h4>
                        <p> {state.data.languages.map(language => language.name).join(', ')}</p>
                        </div>
                        <div>
                        <h4>Timezones:</h4>
                        <p> {state.data.timezones.map(timezone =>timezone).join(', ')}</p>
                        </div>                 
                    </FlextTextContainer2>
                </GridWrapper>
                <BorderText>
                        <h4>Borders:</h4>
                        {state.data.borders?
                        <p> {state.data.borders.map(borders =>borders).join(', ')}</p>: <p> No borders</p>}
                </BorderText>
            </InfoContainer>
        </GridContainer>
    </CountryWrapper>
    
    
  );
};



export default ChoosenCountry;