import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import AnswerContainer from './AnswerContainer';
import PlayerContainer from '../pve/PlayerContainer';

const StyledPvpGameRoom = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: hotpink;
  display: flex;
`;

const LeftDiv = styled.div`
  width: 45%;
  height: 100%;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const RightDiv = styled.div`
  width: 55%;
`;
/*

*/
const PvpGameRoom = ({ data }) => {
  const[showAnswerInput, setshowAnswerInput] = useState(false);
  const [answer, setAnswer] = useState("123456");
  const [roomData, setRoomData] = useState({});
  useEffect(()=> {

  }, []);

  return (
    <StyledPvpGameRoom>
      <LeftDiv>
        <AnswerContainer answer={answer}/>
        <PlayerContainer/>
      </LeftDiv>
      <RightDiv>

      </RightDiv>
    </StyledPvpGameRoom>
  )
}

export default PvpGameRoom
