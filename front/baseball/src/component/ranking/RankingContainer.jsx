import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const StyledRankingContainer = styled.div`
  margin: auto;
  width: 35%;
  min-width: 500px;
  height: 80vh; /* Viewport height를 기준으로 높이 조정 */
  padding: 2em;
  background-color: #1E88E5;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  & > span {
    color: #ffffff;
    display: block;
    text-align: center;

    &:first-child {
      font-size: 2.5em;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    &:nth-child(2) {
        margin-bottom: 1em;
      font-size: 1em;
      font-weight: 400;
    }
  }
`;

const UserContainer = styled.div` 
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: calc(100% - 120px); /* 상단 타이틀 부분을 고려한 높이 조정 */
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 1em;
    overflow-y: auto; /* 세로 스크롤 가능하도록 설정 */
    overflow-x: hidden; /* 가로 스크롤 방지 */

    /* Scrollbar Styles */
    &::-webkit-scrollbar {
        width: 14px; /* 스크롤바의 너비 */
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 스크롤바 트랙(배경) */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #0079ff; /* 스크롤바의 색상 */
        border-radius: 1em; /* 스크롤바의 둥근 모서리 */
        border: 2px solid #0079ff; /* 스크롤바 주위에 여백 추가 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #0033ff; /* 스크롤바에 마우스가 올라갔을 때 색상 */
        border-color: #0033ff;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: 1em;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 1.2em;
        color: #0E201F;
    }

    & > div:nth-child(odd) {
        background-color: #f2f2f2;
    }
`;

const RankNumber = styled.span`
  font-weight: 700;
  color: #0079ff;
`;

const UserNickname = styled.span`
    color: #0E201F;
  font-weight: 500;
`;

const GoldCrown = styled(FontAwesomeIcon)`
    font-size: 1.2em;
    display: inline;
    color: #FFCD4E;
    margin-left: 8px; /* UserNickname과 GoldCrown 사이의 간격 */;
`;

const SilverCrown = styled(FontAwesomeIcon)`
    font-size: 1.2em;
    display: inline;
    color: #CED5EE;
    margin-left: 8px; /* UserNickname과 GoldCrown 사이의 간격 */;
`;

const BronzeCrown = styled(FontAwesomeIcon)`
    font-size: 1.2em;
    display: inline;
    color: #F1C7C7;
    margin-left: 8px; /* UserNickname과 GoldCrown 사이의 간격 */;
`;

const WinRate = styled.span`
  font-weight: 600;
  color: #0E201F;
`;

const RankingContainer = () => {
  const [topTen, setTopTen] = useState([
    { "nickname": "user1", "winRate": "99.85%" },
    { "nickname": "user2", "winRate": "99.80%" },
    { "nickname": "user3", "winRate": "99.75%" },
    { "nickname": "user4", "winRate": "99.70%" },
    { "nickname": "user5", "winRate": "99.65%" },
    { "nickname": "user6", "winRate": "99.60%" },
    { "nickname": "user7", "winRate": "99.55%" },
    { "nickname": "user8", "winRate": "99.50%" },
    { "nickname": "user9", "winRate": "99.45%" },
    { "nickname": "user10", "winRate": "99.40%" },
  ]);

  return (
    <StyledRankingContainer>
      <span>승률 Top 10</span>
      <span>(최소 판수 5판 이상 유저 기준)</span>
      <UserContainer>
        {topTen.map((el, index) => (
          <div key={index}>
            <RankNumber>{index + 1}위</RankNumber>
            <UserNickname>
                {el.nickname}
                {index == 0 && <GoldCrown icon={faCrown}/>}
                {index == 1 && <SilverCrown icon={faCrown}/>}
                {index == 2 && <BronzeCrown icon={faCrown}/>}
            </UserNickname>
            <WinRate>{el.winRate}</WinRate>
          </div>
        ))}
      </UserContainer>
    </StyledRankingContainer>
  );
};

export default RankingContainer;
