import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import RankingBar from './RankingBar';

const StyledLinkNavbar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
`;

const StyledLinkDiv = styled.div`
    display: inline-flex;
    
    height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.8em;
  padding: 0.5em;
  color: #000;
  margin-right: 1.2em;

  &.active {
    font-weight: bold;
    color: #ffffff; /* 활성화된 링크의 색상 */
    background-color: #007BFF;
  }
`;

const LinkNavbar = () => {
  const location = useLocation();

  if (!location.pathname.startsWith('/gameRoom')) {
    return (
        <StyledLinkNavbar>
            <StyledLinkDiv>
                <StyledNavLink 
                    to="/lobby/pvp" 
                    isActive={() => location.pathname.startsWith('/lobby')}
                    activeClassName="active"
                >
                    PVP
                </StyledNavLink>
                <StyledNavLink 
                    to="/lobby/pve" 
                    isActive={() => location.pathname.startsWith('/lobby')}
                    activeClassName="active"
                >
                    PVE
                </StyledNavLink>
                <StyledNavLink 
                    to="/lobby/ranking" 
                    isActive={() => location.pathname.startsWith('/lobby')}
                    activeClassName="active"
                >
                    랭킹보기
                </StyledNavLink>
            </StyledLinkDiv>
          
          <RankingBar/>
        </StyledLinkNavbar>
    )
  } else {
    return null;
  }

};

export default LinkNavbar;
