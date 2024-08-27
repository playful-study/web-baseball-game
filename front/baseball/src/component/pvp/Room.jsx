import React from 'react'
import styled from 'styled-components'

const StyledRoom = styled.div`
    display: flex;
    width: 90%;
    height: fit-content;
    padding: 1em;
    box-sizing: border-box;
    margin: 0.5em;
    background-color: ${({ isProgressing }) => (isProgressing === "게임중" ? '#FAE6DA' : '#D9EAFF')};

    & * {
      padding: 0.1em;
    }

    &:hover {
      cursor: pointer;
      background-color: ${({ isProgressing }) => (isProgressing ? '#F0D9C7' : '#C8DFF7')}; /* 호버 시 배경색 변경 */
    }
`; 

const FirstDiv = styled.div`
  font-size: 1.4em;
`;

const SecondDiv = styled.div`
    width: 100%;
    
    & > div {
      display: flex;
      justify-content: space-between;  
    }
`;

const LevelSpan = styled.span`
  color: ${({ level }) => (level === 'Hard' ? '#EF5A6F' : 
  level === 'Medium' ? '#FF8700' : '#0779E4')};
  font-weight: 600;
`;

const Room = ({data}) => {

  const enterRoom = () => {
    //방에 인원이 2명인지? 근데 이미 가져온 데이터로 확인을 하면 안되는데.. 무결성이 떨어지잖아
    /*
      무결성을 보장하기 위해서 해야할 조치
      2. 웹서버를 열어서 시작.
    */
  }
  return (
    <StyledRoom isProgressing={data.status} onClick={() => enterRoom()}>
      <FirstDiv>
        <span><strong>{data.no}</strong></span>
      </FirstDiv>
      <SecondDiv>
        <div>
          <span>{data.name}</span>          
          <span>{data.status}</span>
        </div>
        <div>
          <span>난이도: <LevelSpan level={data.level}>{data.level}</LevelSpan></span>
          <span>{data.players}/2</span>
        </div>
      </SecondDiv>
    </StyledRoom>
  )
}

export default Room;
