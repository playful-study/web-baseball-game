import React, { Component } from 'react'
import styled from 'styled-components'
import logo from "../../img/logo.png"
import { useNavigate } from "react-router-dom";

const CustomLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 

const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 0.5em;
`;

const CustomDiv = styled.div`  
  & > span {
    font-size: 1.3em;
    color: #0E201F;
  }
`;



const StyledLogo = () => {

    const navigate = useNavigate();
    const moveToMain = () => {
      navigate('/');
    }
    
    return (
      <CustomLogo onClick={() => moveToMain()}>
        <StyledImg src ={logo}/>
        <CustomDiv>
          <span>
            숫자 야구
          </span>
          <br/>
          <span>
            게임 사이트
          </span>
        </CustomDiv>
      </CustomLogo>
    )
}

export default StyledLogo;