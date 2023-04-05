import styled from 'styled-components'
import { motion } from 'framer-motion'

const BorderButton = styled(motion.button)`
width: 4vw;
height:2vw;
outline: none;
border: none;
box-shadow: 0px 0px 3px 0px grey;
background: ${props => props.theme.elementColor};
color: ${props => props.theme.text};
cursor: pointer;
font-size:12px;
border-radius: 0.5rem;

 @media (max-width: 50em){
  width:12vw;
  height:5vw;
  font-size:2.5vw;
  }
`

export default BorderButton