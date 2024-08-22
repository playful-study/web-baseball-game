import React from 'react'
import styled from 'styled-components'

const StyledGameRuleContainer = styled.div`
    background-color: #0079ff;
    width: 100vw;
    height: 100vh;
    padding: 1em;

    & > * {
        color: #ffffff;
    }
`;

const GameRuleContainer = () => {
  return (
    <StyledGameRuleContainer>
      <h1>게임 설명</h1>
    </StyledGameRuleContainer>
  )
}

export default GameRuleContainer
