import React from 'react'
import styled from 'styled-components'

const StyledExitDiv = styled.div`

    & > button {
        background-color: #FF4C4C;
        width: 3em;
    }
    
`;


const ExitButton = () => {
  return (
    <StyledExitDiv>
        <button>나가기</button>
    </StyledExitDiv>
    
  )
}

export default ExitButton
