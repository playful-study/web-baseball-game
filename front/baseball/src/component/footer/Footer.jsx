import React from 'react'
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0E201F;
    width: 100vw;
    height: 240px;

    & > * {
        color: #F0F0F0;
    }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h2>개발자: 김관현, 이준호</h2>
    </StyledFooter>
  )
}

export default Footer;
