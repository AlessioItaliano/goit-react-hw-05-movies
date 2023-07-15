import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 16px;
  flex-wrap: wrap;
`;

export const FormInput = styled.input`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 21px;
  border: 1.5px solid black;
`;

export const FormBtn = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  border: 1.5px solid black;
  font-size: 21px;

  :hover {
    background-color: yellow;
  }
`;
