import React, { useEffect } from 'react'
import styled from 'styled-components'
import LevelContainer from './LevelContainer';
import PlayerContainer from './PlayerContainer';
import MemoPadContainer from './MemoPadContainer';
import ExitButton from '../tag/ExitButton';
import PredictValueInput from '../tag/PredictValueInput';

const StylePveGameRoom = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  & > * {
    margin: 2em;
  }

  @media (max-width: 1100px) {
    //일렬로 정렬
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
  box-sizing: border-box;
  margin-bottom: 2em;

`;

const InputAndLogDiv = styled.div`
  width: 100%;
  height: 80%;
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
          <PredictValueInput level={data?.level}/>
          
        </InputAndLogDiv>
      </RightDiv>
    </StylePveGameRoom>
  )
}

export default PveGameRoom
