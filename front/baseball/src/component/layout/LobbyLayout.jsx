import React from 'react'
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import PvpLobby from '../pvp/PvpLobby';
import PveLobby from '../pve/PveLobby';
import RankingContainer from '../ranking/RankingContainer';

const StyledLobbyLayout = styled.div` 
  display: flex;
  padding: 1em;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  background-color: #EEF7FF;
`;

const LobbyLayout = () => {
  return (
    <StyledLobbyLayout>
        <Routes>
            <Route path='/pvp' element={<PvpLobby/>}/>
            <Route path='/pve' element={<PveLobby/>}/>
            <Route path='ranking' element={<RankingContainer/>}/>
        </Routes>
    </StyledLobbyLayout>
  )
}

export default LobbyLayout
