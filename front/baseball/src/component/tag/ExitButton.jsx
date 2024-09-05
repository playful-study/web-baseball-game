import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const StyledExitDiv = styled.div`

    width: 100%;
    display: flex;
    justify-content: end;
    padding: 1em;
    box-sizing: border-box;
    & > button {
        background-color: #FF4C4C;
        border: none;
        border-radius: 0.5em;
        width: 8.5em;
        height: 3em;
        color: #ffffff;
    }
    
`;


const ExitButton = ({isPvp}) => {
  const navigate = useNavigate();
  const moveToLobby = (isPvp) => {
    if(isPvp) {
      navigate('/lobby/pvp');
    } else {
      navigate('/lobby/pve')
    }
  }
  return (
    <StyledExitDiv>
        <button onClick={() => moveToLobby()}>나가기</button>
    </StyledExitDiv>
    
  )
}

export default ExitButton
