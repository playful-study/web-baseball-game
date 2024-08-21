import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import StyledA from '../tag/StyledA';
import { UserContext } from '../../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const StyledLoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    max-width: 500px;
    height: 45vh;
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

const StyledLoginForm = styled.div`
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
        padding: 1em;
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
        height: 6vh;
        padding: 0.3em;
        margin: 0.5em 0;

        &:hover {
            cursor: pointer;
            background-color: #0062ff;
            border: 1px solid #0062ff;
        }
    }
`;

const LoginForm = ({ closeModal }) => {
    // nickname과 password 상태를 useState로 관리
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [isFetching, setFetching] = useState(false);  //서버에 중복 요청 방지하는 state변수
    

    const loginMember = () => {
        // nickname이나 password가 빈값이면 요청 종료 + isFetching 적용 필요
        // 로그인 로직 (서버로 요청 보내기)
        fetch(`http://localhost:8080/baseball/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nickname, password })
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('로그인 실패');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            // 로그인 성공 후 로직 처리
            login(data);
            navigate('/');
        })
        .catch((err) => {
            alert('로그인에 실패했습니다.');
        });
    }

    return (
        <StyledLoginDiv>
            <StyledCloseDiv>
                <StyledA content="X" click={() => closeModal(false)} />      
            </StyledCloseDiv>
            <SecondDiv>
                <span>로그인</span>
            </SecondDiv>
            <StyledLoginForm>
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
                    type="button" 
                    id="login-btn" 
                    value="Login" 
                    onClick={() => loginMember()} 
                />
            </StyledLoginForm>
        </StyledLoginDiv>
    );
};

export default LoginForm;
