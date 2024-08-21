import React from 'react'
import styled from 'styled-components'
import notFound from '../../img/not_found.png';
import StyledA from '../tag/StyledA';
import { useNavigate } from 'react-router-dom';

const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-color: #EEF7FF;
  padding: 1em;

  & > img {
    width: 50%;
  }
`;

const ErrorContainer = () => {
  const navigate = useNavigate();
  const moveBack = () => {
    navigate(-1);
  }

  return (
    <StyledErrorContainer>
      <img src={notFound}/>
      <h2><StyledA content='이전 페이지로 돌아가기' click={() => moveBack()}/></h2>
    </StyledErrorContainer>
  )
}

export default ErrorContainer
