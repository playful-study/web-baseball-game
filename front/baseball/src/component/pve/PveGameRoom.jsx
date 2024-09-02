import React, { useEffect } from 'react'
import styled from 'styled-components'
import LevelContainer from './LevelContainer';
import PlayerContainer from './PlayerContainer';
import MemoPadContainer from './MemoPadContainer';

const StylePveGameRoom = styled.div`
  width: 80vw;
  height: 90vh;
`;

const LeftDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`;

const PveGameRoom = ({ data }) => {

  //
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <StylePveGameRoom>
      <LeftDiv>
        <LevelContainer level={data?.level}/>
        <PlayerContainer/>
        <MemoPadContainer/>
      </LeftDiv>
    
    </StylePveGameRoom>
  )
}

export default PveGameRoom
