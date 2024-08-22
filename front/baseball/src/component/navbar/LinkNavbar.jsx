import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import RankingBar from './RankingBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledLinkNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 80px;
  padding: 1em;
  background-color: #ffffff; /* Navbar 배경색 */
  position: relative; /* 자식 요소가 부모 기준으로 위치될 수 있도록 설정 */
  box-sizing: border-box;

  @media (max-width: 500px) {
    justify-content: end;
    margin-right: 1em;
    align-items: center;
  }
`;

const StyledLinkDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 500px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 100%; /* Navbar 바로 아래에 위치 */
    left: 0;
    width: 100%;
    height: fit-content;
    padding: 1em;
    z-index: 999; /* 다른 요소 위에 표시되도록 설정 */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.4em;
  padding: 0.5em;
  color: #0e201f;
  margin: 0.3em;

  &.active {
    font-weight: bold;
    color: #ffffff; /* 활성화된 링크의 색상 */
    background-color: #007bff;
    padding: 1em;
  }

  @media (max-width: 500px) {
    font-size: 1.5em;
    padding: 1em 0;
    margin-right: 0;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 2em;
  color: #0e201f;
  margin-right: 1em;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 501px) {
    display: none;
  }
`;

const LinkNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  if (!location.pathname.startsWith('/gameRoom')) {
    return (
      <StyledLinkNavbar>
        <MenuIcon icon={faBars} onClick={toggleMenu} />
        <StyledLinkDiv isMenuOpen={isMenuOpen}>
          <StyledNavLink
            to="/lobby/pvp"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={toggleMenu} // 메뉴 클릭 시 닫기
          >
            PVP
          </StyledNavLink>
          <StyledNavLink
            to="/lobby/pve"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={toggleMenu} // 메뉴 클릭 시 닫기
          >
            PVE
          </StyledNavLink>
          <StyledNavLink
            to="/lobby/ranking"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={toggleMenu} // 메뉴 클릭 시 닫기
          >
            랭킹보기
          </StyledNavLink>
        </StyledLinkDiv>
        <RankingBar />
      </StyledLinkNavbar>
    );
  } else {
    return null;
  }
};

export default LinkNavbar;
