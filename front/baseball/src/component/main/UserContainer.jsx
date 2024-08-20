import React, { useContext } from 'react'
import styled from 'styled-components'

const StyledUserDiv = styled.div`
    display: flex;
    flex-direction: column;
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
        <UserContainer/>
    </StyledUserDiv>
  );
}

export default UserContainer
