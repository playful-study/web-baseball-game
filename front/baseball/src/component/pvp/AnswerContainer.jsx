import React from 'react'
import styled from 'styled-components'

const StyledAnswerContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NumberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & > div {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FEAE6F;
    border-radius: 2em;
    margin: 1em;
  }
`;


/*
    정답 영역(pvp만)
    정답 데이터를 받아서 유지하는 부분
*/
const AnswerContainer = ({ answer }) => {
  return (
    <StyledAnswerContainer>
      <h3>나의 정답</h3>
      <NumberContainer>
        {
          answer.split('').map(number => 
            <div>
              <span>{number}</span>
            </div>
          )
        }
      </NumberContainer>
    </StyledAnswerContainer>
  )
}

export default AnswerContainer
