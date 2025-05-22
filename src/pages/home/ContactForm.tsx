import React, { useState } from "react";
import styled from "styled-components";

interface ContactFormProps {
  onSuccess: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 12px;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 4px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 10px;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #005ac1;
  }
`;

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { name, email });
    setName("");
    setEmail("");
    onSuccess();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default ContactForm;