import React, { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';

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
  flex-grow: 1;
  overflow-y: auto;
  padding: 1em;
  background-color: #ffffff;
  border: 2px solid #0E201F;
  border-radius: 0.5em;
`;

const PagingContainer = styled.div`

`;

const RuleContainer = styled.div`
  padding: 1em;
  width: 40%;
  height: 40%;
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
`;

const PvpLobby = () => {
  const [rooms, setRooms] = useState([]);

  return (
    <StyledPvpLobbyContainer>
      <StyledRoomContainer>
        <div>
          <h2>방 목록</h2>
          <button>방 만들기</button>
        </div>
        <RoomDiv>
          {
            rooms.map((room, index) => {
              <Room key={index} data={room}/>
            })
          }
        </RoomDiv>
        <PagingContainer>

        </PagingContainer>
      </StyledRoomContainer>
      <RuleContainer>
        <div>
          <span>규칙</span>
        </div>
      </RuleContainer>
    </StyledPvpLobbyContainer>
  );
};

export default PvpLobby;
