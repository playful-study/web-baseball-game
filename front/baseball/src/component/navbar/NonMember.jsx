import React, { Component, useState } from 'react'
import styled from 'styled-components';
import StyledA from '../tag/StyledA';
import LoginModal from '../member/LoginModal';

const StyledDiv = styled.div`
    padding: 0.5em;
`; 

const NonMember = () => {

  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignup, setClickSignup] = useState(false);
  const toggle = (state) => {
    console.log(`clickLogin = ${clickLogin}`);
    console.log(`clickSignup = ${clickSignup}`);
    return state == true ? false : true;
  }

  return (
    <StyledDiv>
        <StyledA content="로그인" click={() => setClickLogin(true)}/>
        <StyledA content="회원가입" click={() => setClickSignup(true)}/>

        {clickLogin &&  <LoginModal closeModal={setClickLogin}/>}
        {clickSignup && <></>}
    </StyledDiv>
  )
}

export default NonMember;
