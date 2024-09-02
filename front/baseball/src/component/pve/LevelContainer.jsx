import React from 'react'
import styled from 'styled-components';

const StyledLevelContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const LevelContainer = ({ level }) => {

  const koLevel = level === 'Hard' ? '어려움' : level === 'Easy' ? '쉬움' : '보통';
  return (
    <StyledLevelContainer>
      <h2>난이도 - {koLevel}</h2>
    </StyledLevelContainer>
  )
}

export default LevelContainer
