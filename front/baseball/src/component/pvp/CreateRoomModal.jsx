import React, { useState } from 'react'
import styled from 'styled-components'
import DifficultyLevelRadioBox from '../tag/DifficultyLevelRadioBox';

const StyledRoomModal = styled.div`
    position: fixed; /* Fixed positioning for a modal */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.67); /* Semi-transparent background */

    & > div {
        width: fit-content;
        height: fit-content;
        padding: 3em;
        background-color: #ffffff;
        border: 1px solid #0E201F;

        & input:not([type=button]) {
            font-size: 1em;
            border: 1px solid #0E201F;
            border-radius: 0.5em;
            width: 80%;
            padding: 1em;
            margin: 0.5em 0;    
        }
    }
`;

const CreateRoomModal = ({cancelEvent}) => {
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('');
    const options = [
        { value: 'Easy', label: '쉬움(길이: 3)', color: '#0079ff' },
        { value: 'Medium', label: '보통(길이: 5)', color: '#ff7900' },
        { value: 'Hard', label: '어려움(길이: 7)', color: '#EF5A6F' },
      ];

    const handleLevel = async (value) => {
        setLevel(value);
        console.log(`level = ${level}`);
    };

    const createRoom = () => {

    }

  return (
    <StyledRoomModal>
      <div>
        <table>
            <tr>
                <th colSpan={2}>방 만들기</th>
            </tr>
            <tr>
                <th>방제목</th>
                <th><input
                    type="text" 
                    id="title" 
                    placeholder="방 제목을 입력하세요."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /></th>
            </tr>
            <tr>
                <th>난이도</th>
                <td>
                    <DifficultyLevelRadioBox 
                        options={options} 
                        onChange={handleLevel}
                        className="custom-width"
                    />
                </td>
            </tr>
            <tr>
                <td> 
                    <input type='button' value='취소' onClick={() => cancelEvent()}/>
                </td>
                <td>
                    <input type='button' value='생성' onClick={() => createRoom()}/>
                </td>
            </tr>
        </table>
      </div>
    </StyledRoomModal>
  )
}

export default CreateRoomModal
