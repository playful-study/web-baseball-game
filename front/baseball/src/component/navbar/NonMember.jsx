import React, { Component } from 'react'
import styled from 'styled-components';
import StyledA from '../tag/StyledA';

const StyledDiv = styled.div`
    padding: 0.5em;
`; 

const NonMember = () => {
  return (
    <StyledDiv>
        <StyledA content="로그인"/>
        <StyledA content="회원가입"/>
    </StyledDiv>
  )
}

export default NonMember;
