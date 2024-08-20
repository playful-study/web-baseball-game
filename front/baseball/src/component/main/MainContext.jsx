import React from 'react'
import styled from 'styled-components'
import UserDiv from './UserDiv';

const StyledMainContext = styled.div`

`;

const MainContext = () => {
  return (
    <StyledMainContext>
      <UserDiv/>
    </StyledMainContext>
  )
}

export default MainContext
