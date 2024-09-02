import React from 'react'
import styled from 'styled-components'
import MyCkEditor from '../tag/MyCkEditor';

const StyledMemoPadContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 3em;

  // MyCkEditor의 width를 100%로 수정
  & .main-container {
    width: 100%;
  }

  & > h3 {
    margin: 1em;
  }
`;
const MemoPadContainer = () => {
  return (
    <StyledMemoPadContainer>
      <h3>메모장</h3>
      <MyCkEditor/>
    </StyledMemoPadContainer>
  )
}

export default MemoPadContainer

