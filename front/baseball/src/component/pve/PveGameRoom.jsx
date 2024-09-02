import React, { useEffect } from 'react'
import styled from 'styled-components'
import LevelContainer from './LevelContainer';
import PlayerContainer from './PlayerContainer';
import MemoPadContainer from './MemoPadContainer';
import ExitButton from '../tag/ExitButton';

const StylePveGameRoom = styled.div`
  display: flex;
  width: 80vw;
  height: 90vh;
  & > * {
    margin: 2em;
  }
`;

const LeftDiv = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;  
`;

const RightDiv = styled.div`
  width: 60%;
  height: 100%;
  padding: 2em;
  box-sizing: border-box;
`;

const InputAndLogDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #77D8D8;
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
      <RightDiv>
        <ExitButton/>
        <InputAndLogDiv>
          
        </InputAndLogDiv>
      </RightDiv>
    </StylePveGameRoom>
  )
}

export default PveGameRoom
