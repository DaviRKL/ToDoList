import styled from 'styled-components';
import { List, ListItem as MuiListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const StyledList = styled(List)`
  padding: 0;
`;

export const ListItem = styled(MuiListItem)`
  background-color: ${(props) => (props.isCompleted ? '#d4edda' : '#f8d7da')};
  color: #333;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;  // Mantém os elementos nas extremidades
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextContainer = styled.div`
  flex-grow: 1;  // Faz o texto ocupar o espaço restante
  padding: 10px;  // Adiciona um pouco de espaçamento ao redor do texto
`;

export const DeleteButton = styled(IconButton)`
  background-color: #ff6b6b;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #ff4c4c;
  }
`;

export const StyledDeleteButton = (props) => (
  <DeleteButton {...props}>
    <DeleteIcon />
  </DeleteButton>
);
