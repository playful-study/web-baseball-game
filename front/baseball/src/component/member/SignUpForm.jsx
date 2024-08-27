import React, { useState } from 'react';
import styled from 'styled-components';
import StyledA from '../tag/StyledA';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';

const StyledSignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 500px;
  height: 50vh;
  background-color: #ffffff;
  padding: 2%;
  border-radius: 1em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  margin: auto;
  overflow-y: auto;
`;

const StyledCloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0%;
`;

const SecondDiv = styled.div`
  display: flex;
  justify-content: center;

  & > span {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const StyledSignUpForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5em;

  & > input:not([type=button]) {
    font-size: 1em;
    border: 1px solid #0E201F;
    border-radius: 0.5em;
    width: 80%;
    padding: 0.8em;
    margin: 0.5em 0;
  }

  & > input[type=button] {
    background-color: #0079ff;
    border: 1px solid #0079ff;
    border-radius: 0.5em;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.1em;
    width: 90%;
    height: 5vh;
    padding: 0.3em;
    margin: 0.5em 0;

    &:hover {
      cursor: pointer;
      background-color: #0062ff;
      border: 1px solid #0062ff;
    }
  }
`;

const SignUpForm = ({ closeModal }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isFetching, setFetching] = useState(false);

  const signUp = () => {
    if (isFetching) return;  // 이미 요청 중이면 실행하지 않음
    if (!nickname || !password || !checkPassword) {
      alert('모든 필드를 채워주세요.');
      return;
    }
    if (password !== checkPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    setFetching(true);  // 요청 시작

    axios.post(`/users`, { nickname, password, checkPassword })
      .then(res => {
        alert('회원가입이 완료되었습니다!');
        navigate('/');  // 회원가입 후 메인 페이지로 이동
      })
      .catch(err => {
        console.error(err);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      })
      .finally(() => {
        setFetching(false);  // 요청 종료
      });
      //status가 200이고 statusText가 ‘OK’이면 성공이다
        // fetch(`http://localhost:8080/users`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ nickname, password, checkPassword })
        // })
        // .then((res) => {
        //     if (!res.ok) {
        //         throw new Error(res.json());
        //     }
        //     return res.json();
        // })
        // .then((msg) => {
        //     alert(msg);
        //     navigate('/');
        // })
        // .catch((err) => {
        //     alert(err);
        // });
  };

  return (
    <StyledSignUpDiv>
      <StyledCloseDiv>
        <StyledA content="X" click={() => closeModal(false)} />
      </StyledCloseDiv>
      <SecondDiv>
        <span>회원가입</span>
      </SecondDiv>
      <StyledSignUpForm>
        <input
          type="text"
          id="nickname"
          placeholder="아이디(닉네임)을 입력하세요."
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="check-password"
          placeholder="비밀번호를 한번 더 입력하세요."
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <input
          type="button"
          id="signup-btn"
          value={isFetching ? "Signing up..." : "Signup"}
          onClick={signUp}
          disabled={isFetching}  // 요청 중일 때 버튼 비활성화
        />
      </StyledSignUpForm>
    </StyledSignUpDiv>
  );
};

export default SignUpForm;