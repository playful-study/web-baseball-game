import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PvpGameRoom from '../pvp/PvpGameRoom';
import PveGameRoom from '../pve/PveGameRoom';

const StyledGameLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EEF7FF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameLayout = () => {
    const location = useLocation();
    const { roomId, isPvp, level } = location.state; // 기본값 설정
    const data = {roomId, level}; //이 부분이 걸린다...
    return (
        <StyledGameLayout>
            {isPvp ? <PvpGameRoom data={data}/> : <PveGameRoom data={data}/>}
        </StyledGameLayout>
    );
};

export default GameLayout;
