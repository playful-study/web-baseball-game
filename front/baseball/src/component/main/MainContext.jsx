import React from 'react'
import styled from 'styled-components'
import UserContainer from './UserContainer';

const StyledMainContext = styled.div`

`;

const MainContext = () => {
  return (
    <StyledMainContext>
      <UserContainer/>
    </StyledMainContext>
  )
}

export default MainContext
