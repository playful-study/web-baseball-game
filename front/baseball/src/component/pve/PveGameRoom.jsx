import React from 'react'
import styled from 'styled-components'
import LevelContainer from './LevelContainer';

const StylePveGameRoom = styled.div`

`;

const LeftDiv = styled.div`

`;

const PveGameRoom = ({ roomId }) => {
  return (
    <StylePveGameRoom>
      <LeftDiv>
        <LevelContainer/>
      </LeftDiv>
      피비이
    </StylePveGameRoom>
  )
}

export default PveGameRoom
