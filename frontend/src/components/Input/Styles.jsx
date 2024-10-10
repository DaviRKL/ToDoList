import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const StyledTextField = styled(TextField)`
  flex: 1;
`;

export const StyledButton = styled(Button)`
color:white;
height:56px;
  background-color: #1976d2;
  color: white;
  &:hover {
    background-color: #115293;
  }
`;