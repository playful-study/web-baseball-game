import React from 'react'
import styled from "styled-components";
import MainLayout from './MainLayout';
import LogoNavbar from '../navbar/LogoNavbar';
import Footer from '../footer/Footer';
import { Route, Routes } from 'react-router-dom';
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
  return (
    <StyledLayout>
      <LogoNavbar/>
      <LinkNavbar/>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path='/lobby/*' element={<LobbyLayout/>}/>
        <Route path='/gameRoom' element={<GameLayout/>}/>
        {/* 모든 유효하지 않은 경로는 에러페이지로 이동하도록 */}
        <Route path='*' element={<ErrorContainer/>}/>
      </Routes>
      <Footer/>
    </StyledLayout>
  )
}

export default TotalLayout


