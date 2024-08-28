import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 사용
import DifficultyLevelRadioBox from '../tag/DifficultyLevelRadioBox';
import axios from '../../axios'; // axios 사용

const StyledRoomModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.67);

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

const CreateRoomModal = ({ cancelEvent }) => {
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate(); // navigate 함수 사용

    const handleLevel = (value) => {
        setLevel(value);
    };

    const createRoom = async () => {
        try {
            // 서버에 방 생성 요청을 보냄
            const response = await axios.post('/createRoom', {
                title,
                level,
            });

            // 서버 응답에서 받은 방 ID를 사용하여 방 페이지로 
            const roomId = response.data.roomId; // 서버가 반환하는 방 ID 사용
            navigate(`/gameRoom/`); // 해당 방 페이지로 이동
        } catch (error) {
            console.error("방 생성 중 오류가 발생했습니다:", error);
            // 추가적인 오류 처리 로직을 여기에 작성할 수 있습니다.
        }
    };

    return (
        <StyledRoomModal>
            <div>
                <table>
                    <tr>
                        <th colSpan={2}>방 만들기</th>
                    </tr>
                    <tr>
                        <th>방제목</th>
                        <th>
                            <input
                                type="text"
                                id="title"
                                placeholder="방 제목을 입력하세요."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>난이도</th>
                        <td>
                            <DifficultyLevelRadioBox
                                onChange={handleLevel}
                                className="custom-width"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type='button' value='취소' onClick={() => cancelEvent()} />
                        </td>
                        <td>
                            <input type='button' value='생성' onClick={() => createRoom()} />
                        </td>
                    </tr>
                </table>
            </div>
        </StyledRoomModal>
    );
}

export default CreateRoomModal;
