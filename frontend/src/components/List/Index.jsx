import { StyledList, ListItem, TextContainer, StyledDeleteButton } from './Styles.jsx';

function List({ list, setList }) {
  const handleToggleComplete = (index) => {
    setList((prevList) =>
      prevList.map((item, idx) =>
        idx === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleDeleteItem = (index) => {
    setList((prevList) => prevList.filter((_, idx) => idx !== index));
  };

  return (
    <StyledList>
      {list.map((item, index) => (
        <ListItem
          key={index}
          isCompleted={item.isCompleted}
          onClick={() => handleToggleComplete(index)}
        >
          <TextContainer>{item.text}</TextContainer>
          <StyledDeleteButton
            onClick={(e) => { 
              e.stopPropagation();
              handleDeleteItem(index); 
            }}
          />
        </ListItem>
      ))}
    </StyledList>
  );
}

export default List;
