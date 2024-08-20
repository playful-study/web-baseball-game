import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid #0E201F;
  border-radius: 0.5em;
  width: 6em;
  height: 2em;

  &:focus {
    border-color: #0079ff; 
    border-radius: 0.5em;
  }
`;
const CustomInput = ({type, id, value, placeholder}) => {

  return (
    <StyledInput type={type} id={id} name={id} value={value} placeholder={placeholder}/>
      
  )
}

export default CustomInput

