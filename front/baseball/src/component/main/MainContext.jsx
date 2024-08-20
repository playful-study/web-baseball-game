import React from 'react'
import styled from 'styled-components'
import UserContainer from './UserContainer';
import GameRuleContainer from './GameRuleContainer';

const StyledMainContext = styled.div`

`;

const MainContext = () => {
  return (
    <StyledMainContext>
      <UserContainer/>
      <GameRuleContainer/>
    </StyledMainContext>
  )
}

export default MainContext
