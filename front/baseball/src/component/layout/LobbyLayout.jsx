import React from 'react'
import styled from "styled-components";
import LinkNavbar from '../navbar/LinkNavbar';
import { Route, Routes } from 'react-router-dom';
import PvpLobby from '../pvp/PvpLobby';
import PveLobby from '../pve/PveLobby';

const StyledLobbyLayout = styled.div`

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
