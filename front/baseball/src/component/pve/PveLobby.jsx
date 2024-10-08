import React, { useState } from 'react'
import styled from 'styled-components';
import DifficultyLevelRadioBox from '../tag/DifficultyLevelRadioBox';
import axios from '../../axios';
import { useNavigate }  from 'react-router-dom';

const StyledPveLobbyDiv = styled.div`
  margin: auto;
  width: 40%;
  min-width: 550px;
  height: 70%;
  padding: 3em;
  background-color: #c1eaec;
  overflow-y: scroll;
  overflow-x: hidden;

  /* Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 10px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 트랙(배경) */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a3e1e4; /* 스크롤바의 색상 */
    border-radius: 10px; /* 스크롤바의 둥근 모서리 */
    border: 2px solid #c1eaec; /* 스크롤바 주위에 여백 추가 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #92dfe3; /* 스크롤바에 마우스가 올라갔을 때 색상 */
  }
`;

const StyledRuleContainer = styled.div`
  background-color: #ffffff;
  padding: 0.8em 0.5em;
  border-radius: 1.3em;
  margin-bottom: 3em;

  & li {
    margin: 0.5em;
    font-size: 1.2em;
  }
`;

const StyledButtonContainer = styled.div`
  justify-content: center;
  width: 60%;
  height: 100px;
  margin: auto;

  & > button {
    color: #ffffff;
    font-size: 1.2em;
    font-weight: 600;
    border: 1px solid #0079ff;
    border-radius: 0.5em;
    background-color: #0079ff;
    width: 100%;
    min-height: 50%;
    max-height: 60%;
  }
`;

const PveLobby = () => {

  const navigate = useNavigate();
  const [level, setLevel] = useState(null);
  const [isFetching, setFetching] = useState(false);
  

  const handleLevel = (value) => {
    setLevel(value);
    console.log(`level = ${level}`);
  };

  const createPveRoom = (e) => {
    if(!level) {
      alert('난이도를 선택해주세요.');
      return;
    }

    if(isFetching) {
      alert('방 생성중입니다.');
      return;
    }


    //서버 연동 후 받은 데이터를 가지고 /gameRoom으로 이동 새 창으로 이동할까?
    // axios.post('')
    navigate('/gameRoom', {state: {"roomId": 1, "isPvp": false, "level": level}})
  
  }

  return (
    <StyledPveLobbyDiv>
      <h2>게임 규칙</h2>
      <StyledRuleContainer>
        <ul>
          <li>연습모드에서는 공격만 가능합니다.(수비 불가)</li>
          <li>PVE 모드는 승률에 영향을 미치지 않습니다.</li>
          <li>
            모든 난이도에서 정답과 예측값은 중복을 허용하지 않습니다.
          </li>
          <span>(정답이 '141'일 수 없고, 예측값을 '141'로 작성할 수 없습니다.)</span>
        </ul>
      </StyledRuleContainer>
      <h2>난이도</h2>
      <DifficultyLevelRadioBox onChange={handleLevel}/>
      <StyledButtonContainer>
        <button onClick={(e) => createPveRoom(e)}>시작</button>  
      </StyledButtonContainer>
    </StyledPveLobbyDiv>
  )
}

export default PveLobby
