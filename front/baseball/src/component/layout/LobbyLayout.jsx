import React from 'react'
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import PvpLobby from '../pvp/PvpLobby';
import PveLobby from '../pve/PveLobby';
import RankingContainer from '../ranking/RankingContainer';
import ErrorContainer from '../error/ErrorContainer';

const StyledLobbyLayout = styled.div` 
  display: flex;
  padding: 1em;
  justify-content: center;
  width: 100vw;
  max-width: 100vw; /* 최대 너비를 뷰포트 너비로 제한 */
  height: 90vh;
  background-color: #EEF7FF;
  box-sizing: border-box; /* padding과 border를 너비에 포함 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
`;

const LobbyLayout = () => {
  return (
    <StyledLobbyLayout>
        <Routes>
            <Route path='/pvp' element={<PvpLobby/>}/>
            <Route path='/pve' element={<PveLobby/>}/>
            <Route path='/ranking' element={<RankingContainer/>}/>
            {/* 모든 유효하지 않은 경로는 에러페이지로 이동하도록 */}
        <Route path='*' element={<ErrorContainer/>}/>
        </Routes>
    </StyledLobbyLayout>
  )
}

export default LobbyLayout
