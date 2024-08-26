// src/components/Modal/Modal.jsx
import React from 'react';
import { ModalOverlay, ModalContainer, CloseButton } from './modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
