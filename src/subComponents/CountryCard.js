import React from 'react'
import styled from 'styled-components'




const Card = styled.div`
width: 18vw;
height: 24vw;
border-radius: 0.5rem;
outline: none;
border: none;
box-shadow: 0px 0px 10px 1px lightgray;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
font-weight:600;
border-radius: 0.5rem;
cursor: pointer;
`

const FlagImage = styled.img`
width: 100%;
height:45%;
border-top-right-radius: 0.5rem;
border-top-left-radius: 0.5rem;
`

const CountryName = styled.h3`
color: ${props => props.theme.text};
padding-inline: 1.5vw;
padding-top: 1vw;
font-size: 1.3vw;
`

const CountryInfoContainer = styled.div`
padding: 1.5vw;
display: flex;
flex-direction:column;
gap:0.5vw;

h4{
font-size: 1vw;
}

p{
display:inline;
color: ${props => props.theme.input};
font-size: 1vw;
}
`


const CountryCard = ({data}) => {
    const {
    name,
    flags: { png },
    population,
    capital,
    numericCode,
    region,
  } = data

  return (
     <Card key={numericCode}>
      <FlagImage src={png} alt={name} />
      <CountryName>{name}</CountryName>
      <CountryInfoContainer>
        <div>
        <h4>Population:</h4>
        <p> {population}</p>
        </div>
        <div>
        <h4>Region:</h4>
        <p> {region}</p>
        </div>
        <div>
        <h4>Capital:</h4>
        <p> {capital}</p>
        </div>
      </CountryInfoContainer>
    </Card>
  )
}

export default CountryCard