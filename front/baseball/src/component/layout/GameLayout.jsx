import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
    const { roomId, isPvp } = location.state || {}; // 기본값 설정

    return (
        <StyledGameLayout>
            <h1>게임룸 내부</h1>
            <p>방 번호: {roomId}</p>
            <p>PvP 모드: {isPvp ? '예' : '아니오'}</p>
        </StyledGameLayout>
    );
};

export default GameLayout;
