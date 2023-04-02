import React from 'react'
import styled from 'styled-components'




const Card = styled.div`
width: 15vw;
height: 40vh;
border-radius: 0.5rem;
outline: none;
border: none;
box-shadow: 0px 0px 10px 1px lightgray;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
font-weight:600;
`

const FlagImage = styled.img`
width: 100%;
`

const CountryName = styled.h3`
color: ${props => props.theme.text};
`

const CountryInfoContainer = styled.div`

`


const CountryCard = ({props}) => {
    const {
    name,
    flags: { png },
    population,
    capital,
    area,
    region,
  } = props

  return (
     <Card key={area}>
      <FlagImage src={png} alt={name} />
      <CountryName>{name}</CountryName>
      <CountryInfoContainer>
        <h5>Population:</h5>
        <p>{population}</p>
        <h5>Region:</h5>
        <p>{region}</p>
        <h5>Capital:</h5>
        <p>{capital}</p>
      </CountryInfoContainer>
    </Card>
  )
}

export default CountryCard