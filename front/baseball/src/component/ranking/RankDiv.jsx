import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const StyledRankDiv = styled.div``;

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

const RankDiv = ({data, rank}) => {
  return (
    <StyledRankDiv>
      <RankNumber>{rank}위</RankNumber>
            <UserNickname>
                {data.nickname}
                {rank == 1 && <GoldCrown icon={faCrown}/>}
                {rank == 2 && <SilverCrown icon={faCrown}/>}
                {rank == 3 && <BronzeCrown icon={faCrown}/>}
            </UserNickname>
            <WinRate>{data.winRate}</WinRate>
    </StyledRankDiv>
  )
}

export default RankDiv
