import {ErrorMessage, InputContainer, StyledButton, StyledTextField} from './Styles.jsx';
import { useState } from 'react';

function Input({ text, setText, addItem }) {
  const [error, setError] = useState("");

  const handleAddItem = () => {
    if (text.trim() === "") {
      setError("A tarefa não pode estar vazia.");
      return;
    }
    addItem(text);
    setError(""); 
  };

  return (
    <>
      <p>Crie uma tarefa!</p>
      <InputContainer>
        <StyledTextField
          label="Digite sua tarefa"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          error={Boolean(error)}
          helperText={error}
        />
        <StyledButton variant="contained" onClick={handleAddItem}>
          Criar tarefa
        </StyledButton>
      </InputContainer>
    </>
  );
}

export default Input;
