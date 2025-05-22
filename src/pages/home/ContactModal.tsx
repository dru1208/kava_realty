import React from "react";
import Modal from "react-modal";
import ContactForm from "./ContactForm";
import styled from "styled-components";

// Set for accessibility
Modal.setAppElement("#root");

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledModal = styled(Modal)`
  width: 350px;
  margin: auto;
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

const CancelButton = styled.button`
  margin-top: 12px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  text-decoration: underline;
`;

const ContactModal: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose} contentLabel="Signup Modal">
      <Title>Join Our List</Title>
      <ContactForm onSuccess={onClose} />
      <CancelButton onClick={onClose}>Cancel</CancelButton>
    </StyledModal>
  );
};

export default ContactModal;