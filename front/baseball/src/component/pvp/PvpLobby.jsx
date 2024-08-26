import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import CreateRoomModal from './CreateRoomModal';

const StyledPvpLobbyContainer = styled.div`
  display: flex;
  width: 70%;
  height: 80%;
  padding: 1em;

  & > * {
    margin: 0.3em;
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 100%;
    overflow-y: auto;
  }
`;

const StyledRoomContainer = styled.div`
  width: 60%;
  height: 100%;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;

    & > button {
      font-size: 1.1em;
      border: none;
      border-radius: 0.5em;
      background-color: #FF8700;
      width: 7em;
      height: 2.5em;

      &:hover {
        background-color: #ff7300;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`;

const RoomDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  flex-grow: 1;
  overflow-y: auto;
  padding: 1em;
  background-color: #ffffff;
  border: 2px solid #0E201F;
  border-radius: 0.5em;
`;

const PagingContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 40px;
  margin-top: 1em;
  box-sizing: border-box;

  & > div {
    width: 40px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 3px solid #0079ff;
    border-radius: 0.5em;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    margin: 0.5em;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      cursor: pointer;
    }
  }

  & > .active {
    background-color: #0079ff; /* 선택된 상태의 배경색 */
    color: #ffffff; /* 선택된 상태의 텍스트 색상 */
  }
`;

const RuleContainer = styled.div`
  padding: 1em;
  width: 40%;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  & > div:first-child {
    display: inline-flex;
    align-items: center;
    background-color: #474E68;
    color: #ffffff;
    padding: 1em;
    border-radius: 0.5em;

    @media (max-width: 1000px) {
      width: 100%;
      box-sizing: border-box;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
    box-sizing: border-box;
  }

  & li {
      margin: 0.5em;
      font-size: 1.1em;
    }
`;

const StrongSpan = styled.div`
  font-weight: 600;
  color: #EF5A6F;
`;

const PvpLobby = () => {
  const [rooms, setRooms] = useState([
    { "no": 1, "name": "드루와", "status": "대기중", "level": "Medium", "players": 1 },
    { "no": 2, "name": "드루와", "status": "대기중", "level": "Hard", "players": 2 },
    { "no": 3, "name": "드루와", "status": "대기중", "level": "Easy", "players": 1 },
    { "no": 4, "name": "드루와", "status": "게임중", "level": "Medium", "players": 2 },
    { "no": 5, "name": "드루와", "status": "게임중", "level": "Hard", "players": 2 },
    { "no": 6, "name": "드루와", "status": "대기중", "level": "Medium", "players": 1 },
  ]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  useEffect(() => {
    //서버 통신
  }, [selectedPage]);

  return (
    <StyledPvpLobbyContainer>
      <StyledRoomContainer>
        <div>
          <h2>방 목록</h2>
          <button onClick={() => setIsOpen(!isOpen)}>방 만들기</button>
        </div>
        <RoomDiv>
          {rooms.map((room, index) => 
            <Room key={index} data={room}/>
          )}
        </RoomDiv>
        <PagingContainer>
          {[1, 2, 3].map((pageNumber) => (
            <div
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber === selectedPage ? 'active' : ''}
            >
              {pageNumber}
            </div>
          ))}
        </PagingContainer>
      </StyledRoomContainer>
      <RuleContainer>
        <div>
          <span>규칙</span>
        </div>
        <ul>
          <li>각 플레이어는 중복되지 않는 숫자로 정답을 설정합니다.</li>
          <li>정답을 설정한 후 각 플레이어는 번갈아 가며 상대방이 입력한 정답을 맞추면 승리합니다.</li>
          <li>선후공은 랜덤에 의해 정해집니다.</li>
          <li>난이도는 PVE와 동일합니다.<br/>쉬움(길이: 3), 보통(길이: 4), 어려움(길이: 5)</li>
          <li><StrongSpan>비정상적으로 종료 시 기권패 처리</StrongSpan>가 되오니 유의하시기 바랍니다.</li>
        </ul>
      </RuleContainer>
      { isOpen && <CreateRoomModal cancelEvent={() => setIsOpen(!isOpen)}/> }
    </StyledPvpLobbyContainer>
  );
};

export default PvpLobby;
