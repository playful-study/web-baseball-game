import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext';

const StyledUserSpan = styled.div`
    margin: auto;

    & > :not(p) {
        font-size: 1.5em;
    }
`;

const UserSpan = () => {
    const { user } = useContext(UserContext);
    if(user) {
        return (
            <StyledUserSpan>
                <h2>{user.nickname}님 어서오세요!</h2>
                <span><strong>나의 전적:</strong> {user.win + user.lose}전 {user.win}승 {user.lose}패</span>
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
