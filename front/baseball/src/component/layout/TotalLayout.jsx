import React from 'react';
import styled from "styled-components";
import MainLayout from './MainLayout';
import LogoNavbar from '../navbar/LogoNavbar';
import Footer from '../footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom'; // useLocation 훅 추가
import GameLayout from './GameLayout';
import LinkNavbar from '../navbar/LinkNavbar';
import LobbyLayout from './LobbyLayout';
import ErrorContainer from '../error/ErrorContainer';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box; /* padding과 border를 너비에 포함 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
  background-color: #ffffff;
`;

const TotalLayout = () => {
  const location = useLocation(); // 현재 위치 가져오기

  const hideNavbar = location.pathname === '/gameRoom'; // 현재 경로가 '/gameRoom'인지 확인

  return (
    <StyledLayout>
      {!hideNavbar && <LogoNavbar />} {/* /gameRoom 경로가 아니면 LogoNavbar 보여줌 */}
      {!hideNavbar && <LinkNavbar />} {/* /gameRoom 경로가 아니면 LinkNavbar 보여줌 */}
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/lobby/*' element={<LobbyLayout />} />
        <Route path='/gameRoom' element={<GameLayout />} />
        {/* 모든 유효하지 않은 경로는 에러페이지로 이동하도록 */}
        <Route path='*' element={<ErrorContainer />} />
      </Routes>
      <Footer />
    </StyledLayout>
  );
}

export default TotalLayout;
