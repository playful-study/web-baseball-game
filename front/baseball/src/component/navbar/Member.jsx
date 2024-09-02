import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import StyledA from '../tag/StyledA';
import { useContext } from 'react';
import { logout, UserContext } from '../../context/UserContext';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';

const StyledMemberDiv = styled.div`
    padding: 0.5em;
`;

const Member = () => {
  const { logout } = useContext(UserContext);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  }, [])


  const removeCookie = () => {
    if(isFetching) {
      alert('로그아웃 중입니다');
      return;
    }

    setIsFetching(true)
    //axios 통신 보내기
    axios.get('/logout')
    .then(res => {
      console.log(res);
      return res.data;
    })
    .then(data => {
      alert('로그아웃 완료');
      logout();
      navigate('/');
    })
    .catch(err => {
      console.log(err);
      alert(err);
    })
    .finally(() => {
      setIsFetching(false);
    });
  }
  return (
    <StyledMemberDiv>
      <StyledA click={() => removeCookie()} content="로그아웃" />
      {/* <StyledA click={() => logout()} content="로그아웃" /> */}
      <StyledA content="마이페이지"/>
    </StyledMemberDiv>
  )
}

export default Member
