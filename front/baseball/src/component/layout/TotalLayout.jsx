import React from 'react'
import styled from "styled-components";
import MainLayout from './MainLayout';
import LogoNavbar from '../navbar/LogoNavbar';
import Footer from '../footer/Footer';
import { Route, Routes } from 'react-router-dom';
import GameLayout from './GameLayout';
import LinkNavbar from '../navbar/LinkNavbar';


const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  
`;

const TotalLayout = () => {
  return (
    <StyledLayout>
      <LogoNavbar/>
      <LinkNavbar/>
      <Routes>
        <Route path='*' element={<MainLayout/>}/>
        <Route path='/gameRoom' element={<GameLayout/>}/>
      </Routes>
      <Footer/>
    </StyledLayout>
  )
}

export default TotalLayout


