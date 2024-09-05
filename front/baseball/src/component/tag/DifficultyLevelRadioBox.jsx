import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLevelcontainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5em 0;
`;

const StyledRadio = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 120px;
  height: 20px;
  padding: 1em;
  color: #0E201F;
  border: 1px solid ${(props) => props.color};
  border-radius: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 3em;
  text-align: center;

  ${(props) =>
    props.checked &&
    `
    background-color: ${props.color};
    color: #ffffff;
    font-weight: 700;
  `}

  &.custom-width {
    width: fit-content; /* 기본 넓이 */
    margin: 0.5em;
    
  }
`;

const DifficultyLevelRadioBox = ({ onChange, className }) => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const options = [
    { value: 'Easy', label: '쉬움(길이: 3)', color: '#0079ff' },
    { value: 'Medium', label: '보통(길이: 5)', color: '#ff7900' },
    { value: 'Hard', label: '어려움(길이: 7)', color: '#EF5A6F' },
  ];
  
  const handleLevelChange = (event) => {
    const value = event.target.value;
    setSelectedLevel(value);
    onChange(value);
  };

  return (
    <StyledLevelcontainer >
      {options.map((option) => (
        <RadioContainer key={option.value}>
          <StyledRadio
            type="radio"
            id={option.value}
            value={option.value}
            name="level"
            checked={selectedLevel === option.value}
            onChange={(e) => handleLevelChange(e)}
          />
          <StyledLabel
            htmlFor={option.value}
            checked={selectedLevel === option.value}
            color={option.color}
            className={className}
          >
            {option.label}
          </StyledLabel>
        </RadioContainer>
      ))}
    </StyledLevelcontainer>
  );
};

export default DifficultyLevelRadioBox;
