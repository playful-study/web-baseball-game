import React, { Component, useEffect } from 'react'
import styled from "styled-components";

import NonMember from './NonMember';
import StyledLogo from '../tag/StyledLogo';

const StyledLogoNavbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 120px;
    background-color: #ffffff;
    border-bottom: 0.5px solid #0E201F;
`;



const LogoNavbar = () => {
  return (
    <StyledLogoNavbar>
      <StyledLogo/>
        {/*회원이면 로그아웃, 마이페이지로 아니면 로그인, 회원가입으로 */}
      <NonMember/>
    </StyledLogoNavbar>
  )
}

export default LogoNavbar
