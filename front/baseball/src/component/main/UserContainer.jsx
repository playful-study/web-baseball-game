import React, { useContext } from 'react'
import styled from 'styled-components'
import UserSpan from './UserSpan';

const StyledUserDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFF5;
    width: 100vw;
    height: 250px;
    margin-top: 1em;
`;

const UserContainer = () => {

  return (
    <StyledUserDiv>
        <UserSpan/>
    </StyledUserDiv>
  );
}

export default UserContainer
