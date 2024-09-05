import React, { useState } from 'react'
import axios from '../../axios';
import styled from 'styled-components';

const StyledInputDiv = styled.div`
    width: 100%;
    height: 20%;
    border-bottom: 2px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    & > form {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    & input[type=text] {
      box-sizing: border-box;
      width: 85%;
      height: 30%;
      padding-right: 3em; /* 버튼이 들어갈 공간 확보 */
      position: relative;
      border: none;
      border-radius: 1em;
      padding: 1em;
    }

    & input[type=submit] {
      position: relative; /* submit 버튼을 relative로 설정 */
      margin-left: -3em; /* 텍스트 입력란의 padding-right와 일치시켜 overlap 방지 */
      height: 30%; /* submit 버튼 크기 설정 */
      width: auto;
      background-color: transparent; /* 배경 투명하게 */
      border: none; /* 기본 border 제거 */
      cursor: pointer; /* 커서 스타일 변경 */
    }
`;

const PredictValueInput = ({level}) => {

  const [predictValue, setPredictValue] = useState('');
  const getLength = (level) => {
    if(level === 'Hard') return 6;
    if(level === 'Medium') return 5;
    return 4;
  }

  const isDigit = (length) => {    
    const regex = new RegExp(`^\\d{${length}}$`); // 동적으로 정규식 생성
    const isDigitNumber = regex.test(predictValue);
    if (!isDigitNumber) {
        return true;
    }
    return false;
  }

  const isDuplicate = () => {
    const inputArray = predictValue.split('');
    const uniqueNumbers = new Set(inputArray);

    if (uniqueNumbers.size !== inputArray.length) {
        return true;
    }
    return false;
  }

  const predict = (e) => {
    e.preventDefault();

    const length = getLength(level);
    if(isDigit(length)) {
      alert(`입력은 ${length}자리 숫자를 입력해야 합니다.`);
      return; 
    }

    //중복되는 숫자 있으면 종료
    if(isDuplicate()) {
      alert('중복된 숫자가 있습니다. 다시 입력해주세요.');
      return;
    }

    //서버 연동 후 답 가져오기
    //axios('')
  }
  return (
    <StyledInputDiv>
      <form onSubmit={(e) => predict(e)}>
        <input
            type="text" 
            id="predictValue" 
            placeholder="예측값을 입력하세요. 중복되는 숫자는 입력할 수 없습니다."
            value={predictValue}
            onChange={(e) => setPredictValue(e.target.value)}
        />
        <input type='submit' value={'⏎'}/>
      </form>
    </StyledInputDiv>
  )
}

export default PredictValueInput
