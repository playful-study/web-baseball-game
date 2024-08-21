import React from 'react'
import styled from "styled-components";
import { Route, Routes } from 'react-router-dom';
import PvpLobby from '../pvp/PvpLobby';
import PveLobby from '../pve/PveLobby';

const StyledLobbyLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EEF7FF;
`;

const LobbyLayout = () => {
  return (
    <StyledLobbyLayout>
        <Routes>
            <Route path='/pvp' element={<PvpLobby/>}/>
            <Route path='/pve' element={<PveLobby/>}/>
        </Routes>
    </StyledLobbyLayout>
  )
}

export default LobbyLayout
