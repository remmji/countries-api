import React from 'react'
import styled from 'styled-components'


const FormSearch = styled.form`
padding-inline: 5vw;
padding-block: 3vw;
background: ${props => props.theme.body};
`
const ContinentDropdown = styled.select`
width: 14vw;
height: 6vh;
border-radius: 0.5rem;
outline: none;
border: none;
background: ${props => props.theme.elementColor};
box-shadow: 0px 0px 3px 0px grey;
padding-inline: 1rem;
color: ${props => props.theme.text};
font-weight:600;

  @media (max-width: 40em){
  width: 40vw;
  }
`



const handleSubmit = (e) => {
    e.preventDefault();
}

const DropdownInput = ({setContinent}) => {

   const handleSelectChange = (event) => {
    setContinent(event.target.value);
  }

  return (
    <FormSearch onSubmit={handleSubmit}>
        <label htmlFor='continent-dropdown'>
        <ContinentDropdown name='continent' id='continent-dropdown' onChange={handleSelectChange}>
          <option value=''>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Australia/Oceania</option>
        </ContinentDropdown>
        </label>
    </FormSearch>
  )
}

export default DropdownInput