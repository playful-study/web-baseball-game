import React from 'react'
import styled from 'styled-components';
import SignUpForm from './SignUpForm';


const StyledSignUpModal = styled.div`
  position: fixed; /* Fixed positioning for a modal */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(26, 26, 26, 0.67); /* Semi-transparent background */
`;
const SignupModal = ({ closeModal }) => {
  return (
    <StyledSignUpModal>
        <SignUpForm closeModal={closeModal} />
    </StyledSignUpModal>
  )
}

export default SignupModal
