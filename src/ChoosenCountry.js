import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BorderButton from './subComponents/BorderButton';

const CountryWrapper = styled.div`
min-height: 100vh;
background: ${props => props.theme.body};
padding:5vw;

  @media (max-width: 50em){
  padding-inline: 8vw;
  padding-block:10vw;
  }
`
const BackIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: ${props => props.theme.text};
  transition: transform 0.2s ease-in-out;
`
const BackButton = styled.button`
width: 10vw;
height: 5vh;
border-radius: 0.5rem;
outline: none;
border: none;
box-shadow: 0px 0px 3px 0px grey;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
font-weight:600;
cursor: pointer;

 &:hover ${BackIcon} {
    transform: translateX(-10px);
  }
    @media (max-width: 50em){
    width:25vw;
    height:2.5rem;
    font-size:12px;
    }
`

const GridContainer = styled.div`
display: grid;
grid-template-areas:'image text';
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
padding-block: 5vw;
gap: 5vw;

  @media (max-width: 50em){
  grid-template-columns: 1fr;
  grid-template-areas:
  'image'
  'text';
  padding-block:10vw;
  place-items:center;
  text-align:center;
  }
`
const FlagImg = styled(motion.img)`
grid-area: image;
width: 40vw;
height:27vw;
box-shadow: 0px 0px 3px 0px grey;

@media (max-width: 50em){
  width:70vw;
  height:50vw;
}
`
const InfoContainer = styled.div`
grid-area: text;
h1{
color: ${props => props.theme.text};
padding-block: 1.5vw;
font-size: 2vw;

  @media (max-width: 50em){
  font-size:6vw;
  }
}
`

const GridWrapper = styled.div`
display: grid;
gap:5vw;
grid-template-areas: 'one two';

  @media (max-width: 50em){
  grid-template-areas: 
  'one'
  'two';
  }
`
const FlextTextContainer1 = styled.div`
grid-area: one;
display: flex;
flex-direction: column;
gap:1vw;

h4{
font-size: 1.1vw;
color: ${props => props.theme.text};

  @media (max-width: 50em){
  font-size:3.5vw;
  }
}

p{
display:inline;
color: ${props => props.theme.text};
font-size: 1.1vw;

  @media (max-width: 50em){
  font-size:3.5vw;
  }
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

  @media (max-width: 50em){
  font-size:3.5vw;
  }
}

p{
display:inline;
color: ${props => props.theme.text};
font-size: 1.1vw;

  @media (max-width: 50em){
  font-size:3.5vw;
  }
`
const BorderText = styled.div`
padding-top:3vw;
display: flex;
gap:0.7vw;
align-items:center;
flex-wrap:wrap;

@media (max-width: 50em){
  gap:2vw;
  }
  
h4{
font-size: 1.1vw;
color: ${props => props.theme.text};
@media (max-width: 50em){
font-size:4vw;
  }
}

p{
display:inline;
color: ${props => props.theme.text};
font-size: 1.1vw;

  @media (max-width: 50em){
  font-size:3.5vw;
  }

`

const backIc =
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>

const MapPin = styled.svg`
  width: 20px;
  height: 18px;
  fill: ${props => props.theme.text};

  @media (max-width: 40em){
  width:15px;
  height:15px;
}
`

const pin =
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>


const ChoosenCountry = ({setBorderCountry}) => {
const {state} = useLocation();
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state.data.name)}`;

const handleClickBorder = (border) => {
setBorderCountry(border);
}

return (
 
    <CountryWrapper>
       <Link to='/'><BackButton><BackIcon>{backIc}</BackIcon> Back</BackButton></Link> 
        <GridContainer>
            <FlagImg src={state.data.flags.png} alt={state.data.name}
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5 }} />
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
                        <div>
                        <h4>Google Maps:</h4>
                        <a href={mapLink} target="_blank" rel="noopener noreferrer"><MapPin>{pin}</MapPin></a>
                        </div>                               
                    </FlextTextContainer2>
                </GridWrapper>
                <BorderText>
                        <h4>Borders:</h4>
                        {state.data.borders ? (
                        state.data.borders.map((border) => (
                        <Link key={border} to={`/bordercountry/${border}`} onClick={()=>handleClickBorder(border)}>
                        <BorderButton whileHover={{scale:1.1}}>{border}</BorderButton>
                        </Link>
                        ))
                        ) 
                        : <p> No shared borders</p>}
                </BorderText>
            </InfoContainer>
        </GridContainer>
    </CountryWrapper>
  
    
  );
};

export default ChoosenCountry;
