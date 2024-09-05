import React, { useContext, useState } from 'react';
import axios from '../../axios';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';

const StyledInputDiv = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 2px solid #EEF7FF;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & > span {
      font-size: 1.1em;
      font-weight: bold;
      display: block;
      height: fit-content;
      text-align: center;
      
    }

    & > div {
      position: relative; /* 절대 위치 기준 설정 */
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      max-width: 500px; /* 선택사항: 최대 너비 설정 */

      & > input[type="text"] {
        box-sizing: border-box;
        width: 100%;
        height: 30%;
        padding: 1em;
        padding-right: 3em; /* submit 버튼 공간 확보 */
        border: none;
        border-radius: 1em;
        font-size: 1em;
      }

      & > input[type="submit"] {
        position: absolute; /* 절대 위치 지정 */
        right: 1em; /* 오른쪽 여백 설정 */
        top: 50%; /* 수직 중앙 정렬 */
        transform: translateY(-50%); /* 정확한 수직 중앙 정렬 */
        height: 50%; /* 버튼 높이 조정 */
        width: auto;
        background-color: transparent;
        border: none;
        cursor: pointer;

        /* 추가 스타일링 (아이콘 사용 시) */
        /* background-image: url('/path/to/icon.png');
        background-size: contain;
        background-repeat: no-repeat; */
      }
    }
  }
`;

const PveGameRoom = ({ data }) => {
  const { user } = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 입력 처리 로직 추가
    try {
      const response = await axios.post('/your-endpoint', { value: inputValue });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledInputDiv>
      <form onSubmit={handleSubmit}>
        <span>예측 값을 입력하세요</span>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="여기에 입력"
          />
          <input type="submit" value="⏎" />
        </div>
      </form>
    </StyledInputDiv>
  );
};

export default PveGameRoom;
