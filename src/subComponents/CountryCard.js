import React from 'react'
import styled from 'styled-components'
import {data} from '../data/data.json'



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



const CountryCard = () => {
  return (
    <Card>

    </Card>
  )
}

export default CountryCard