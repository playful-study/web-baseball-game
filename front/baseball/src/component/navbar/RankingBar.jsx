import React from 'react'
import styled from 'styled-components'

const StyledRankingBar = styled.div`
    display: flex;
    margin-right: 2em;
`; 
const RankingBar = () => {
  return (
    <StyledRankingBar>
        <h3>랭킹바</h3>
    </StyledRankingBar> 
  )
}

export default RankingBar
