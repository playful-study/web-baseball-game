import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext';
import axios from '../../axios';

const StyledUserSpan = styled.div`
    margin: auto;

    & > :not(p) {
        font-size: 1.5em;
    }
`;

const UserSpan = () => {
    //api 만들어지면 지워질 부분
    const { user } = useContext(UserContext);
    const [loginUser, setLoginUser] = useState({});
    const loadUserData = () => {
        // axios.get('유저 정보')
        // .then(res => {
        //     console.log(res);
        //     return res.data;
        // })
        // .then(data => {
        //     setLoginUser(data);
        // })
        // .catch(err => {
            
        // })
    }
    
    useEffect(() => loadUserData(), []);

    //api 연동 후 loginUser로 바뀌어야 함
    if(user) {
        return (
            <StyledUserSpan>
                <h2>{user}님 어서오세요!</h2>
                <span><strong>나의 전적:</strong> {loginUser.win + loginUser.lose}전 {loginUser.win}승 {loginUser.lose}패</span>
                <h3>PVP 모드 또는 PVE 모드로 숫자야구 게임을 즐기세요!</h3>
            </StyledUserSpan>
          )
    } 
    else {
        return (
            <StyledUserSpan>
                <h2>숫자 야구게임은 로그인하고 나서 이용할 수 있어요</h2>
                <p>로그인해서 PVP 모드 또는 PVE 모드로 숫자야구 게임을 즐기세요!</p>
                <p>우측 상단의 회원가입과 로그인 클릭!</p>
            </StyledUserSpan>
        )
    }
}

export default UserSpan
