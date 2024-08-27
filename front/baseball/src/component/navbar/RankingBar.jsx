import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledRankingBar = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
      display: none;
    }

`; 
const RankingBar = () => {

  useEffect(() => {
    //30분마다 서버 요청 보내기
  }, []);

  
  return (
    <StyledRankingBar>
        <h3>랭킹바</h3>
    </StyledRankingBar> 
  )
}

export default RankingBar
