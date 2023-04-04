import React, { useState } from 'react'
import styled from 'styled-components'


const FormSearch = styled.form`
padding-inline: 5vw;
padding-block: 3vw;
background: ${props => props.theme.body};
`
const FindCountryInput = styled.input`
width: 30vw;
height: 6vh;
border-radius: 0.5rem;
outline: none;
border: none;
box-shadow: 0px 0px 10px 1px grey;
padding-inline: 2rem;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
font-weight:600;
`

const handleSubmit = (e) => {
    e.preventDefault();
}

const SearchInput = ({searchCountry,setSearchCountry}) => {

  return (
    <FormSearch onSubmit={handleSubmit}>
        <label htmlFor='search-country'>
            <FindCountryInput
            type='search'
            name='search-country' 
            placeholder='Search country...'
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}/>
        </label>
    </FormSearch>
  )
}

export default SearchInput