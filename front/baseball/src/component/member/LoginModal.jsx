import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const StyledLoginModal = styled.div`
  position: fixed; /* Fixed positioning for a modal */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(26, 26, 26, 0.67); /* Semi-transparent background */
`;

const LoginModal = ({ closeModal }) => {
  return (
    <StyledLoginModal>
      <LoginForm closeModal={closeModal} />
    </StyledLoginModal>
  );
};

export default LoginModal;
