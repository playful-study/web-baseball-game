import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import LevelContainer from './LevelContainer';
import PlayerContainer from './PlayerContainer';
import MemoPadContainer from './MemoPadContainer';
import ExitButton from '../tag/ExitButton';
import PredictValueInput from '../tag/PredictValueInput';
import PlayLog from '../tag/PlayLog';
import { UserContext } from '../../context/UserContext';


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

const TitleH1 = styled.h1`
  text-align: center;
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
  display: flex; /* Flexbox 사용 */
  flex-direction: column;
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
`;

const PveGameRoom = ({ data }) => {

  const { user } = useContext(UserContext);
  const [playLog , setLog] = useState([]);
  //
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <TitleH1>연습모드</TitleH1>
      <StylePveGameRoom>
      <LeftDiv>
        <LevelContainer level={data?.level}/>
        <PlayerContainer/>
        <MemoPadContainer/>
      </LeftDiv>
      <RightDiv>
        <ExitButton isPvp={data?.isPvp}/>
        <InputAndLogDiv setLog={setLog}>
          <PredictValueInput level={data?.level}/>
          <PlayLog player={user} logs={playLog}/>
        </InputAndLogDiv>
      </RightDiv>
    </StylePveGameRoom>
    </div>
  )
}

export default PveGameRoom
