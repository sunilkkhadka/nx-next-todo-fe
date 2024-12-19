import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.5rem;
  max-width: 600px;
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.4rem 1rem;
  background: #f4f4f4;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #555;
  }

  input,
  textarea,
  select {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #333;
    background: #f9f9f9;

    &:focus {
      border-color: #007bff;
      outline: none;
      background: #ffffff;
    }
  }

  textarea {
    resize: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  background: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #0056b3;
  }
`;
