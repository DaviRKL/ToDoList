import { StyledList, ListItem, TextContainer, StyledDeleteButton } from './Styles.jsx';
import { toast } from 'react-toastify';

function List({ list, setList }) {
  const API_URL = "http://localhost:5000/api/items";

  const handleToggleComplete = async (item) => {
    try {
      const response = await fetch(`${API_URL}/${item._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !item.isCompleted }),
      });

      const updatedItem = await response.json();
      setList((prevList) =>
        prevList.map((itm) => (itm._id === updatedItem._id ? updatedItem : itm))
      );
      toast.success('Tarefa atualizada com sucesso!');
    } catch (err) {
      toast.error('Erro ao atualizar a tarefa. Tente novamente.');
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await fetch(`${API_URL}/${itemId}`, { method: 'DELETE' });
      setList((prevList) => prevList.filter((item) => item._id !== itemId));
      toast.success('Tarefa excluída com sucesso!');
    } catch (err) {
      console.error('Failed to delete item.');
      toast.error('Erro ao excluir a tarefa. Tente novamente.');
    }
  };

  return (
    <StyledList>
      {list.map((item) => (
        <ListItem
          key={item._id}
          isCompleted={item.isCompleted}
          onClick={() => handleToggleComplete(item)}
        >
          <TextContainer>
            {item.text} - <small>{item.isCompleted ? 'Completa' : 'Incompleta'}</small>
          </TextContainer>
          <StyledDeleteButton
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteItem(item._id);
            }}
          />
        </ListItem>
      ))}
    </StyledList>
  );
}

export default List;
