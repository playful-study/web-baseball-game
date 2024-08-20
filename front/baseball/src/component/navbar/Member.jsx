import React from 'react'
import styled from "styled-components";
import StyledA from '../tag/StyledA';

const StyledMemberDiv = styled.div`
    padding: 0.5em;
`;

const Member = () => {
  return (
    <StyledMemberDiv>
      <StyledA content="로그아웃" />
      <StyledA content="마이페이지"/>
    </StyledMemberDiv>
  )
}

export default Member
