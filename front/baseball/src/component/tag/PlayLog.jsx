import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext';

const StyledPlayLog = styled.div`
  width: 80%;
  height: 70%;
  background-color: #ffffff;
  border-radius: 1em;
  box-sizing: border-box;
  margin: auto;
  padding: 2em;
  overflow-y: auto;

  & > span {
    display: block;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
  }
`;

const PlayLog = ({ player, logs }) => {
  const { user } = useContext(UserContext);
  const logName = player === user ? '나' : player;
  return (
    <StyledPlayLog>
      <span>{logName.trim()}의 기록</span>
      <div>
        {}
      </div>
    </StyledPlayLog>
  )
}

export default PlayLog
