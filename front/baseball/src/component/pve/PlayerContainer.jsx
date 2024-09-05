import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext';

const StyledPlayerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1em;

    & > div {
        width: 40%;
        padding: 1em;
        height: fit-content;
        box-sizing: border-box;
        border-radius: 2em;
        text-align: center;

        &:first-child {
            background-color: #248CFF;
        }

        &:nth-child(2) {
            background-color: #474E68;
        }

        & > span {
            font-size: 1.5em;
            color: #ffffff;
        }
    }  
`;

const PlayerContainer = () => {
    const { user } = useContext(UserContext);
    return (
        <StyledPlayerContainer>
            <div>
                <span>{user}</span>
            </div>
            <div>
                {/* <span>{isPvp ? player : '컴퓨터'}</span> */}
            </div>
        </StyledPlayerContainer>
    )
}

export default PlayerContainer
