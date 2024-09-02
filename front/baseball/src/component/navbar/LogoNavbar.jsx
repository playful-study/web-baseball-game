import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import NonMember from './NonMember';
import StyledLogo from '../tag/StyledLogo';
import Member from './Member';
import { user, UserContext } from '../../context/UserContext';

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
  // UserContext에서 사용자 정보 가져오기
  const { user } = useContext(UserContext);

  return (
    <StyledLogoNavbar>
      <StyledLogo />
      {/* 회원이면 로그아웃, 마이페이지로 아니면 로그인, 회원가입으로 */}
      {user ? <Member /> : <NonMember />}
    </StyledLogoNavbar>
  );
}

export default LogoNavbar;
