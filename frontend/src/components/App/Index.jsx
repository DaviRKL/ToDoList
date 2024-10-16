import { useState, useEffect } from 'react'
import './Styles.css'
import Title from '../Title/Index'
import Input from '../Input/Index'
import List from '../List/Index'
import DeleteAllButton from '../DeleteAllButton/Index'

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:5000/api/items";

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch items.");
      }
      const data = await response.json();
      setList(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  
  const addItem = async (itemText) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: itemText }),
      });
      if (!response.ok) {
        throw new Error('Failed to add item.');
      }
      const newItem = await response.json();
      setList((prevList) => [newItem, ...prevList]);
      setText('');
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteAllItems = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete all items.');
      }
      setList([]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Title />
      <Input text={text} setText={setText} addItem={addItem}></Input>
      <List list={list} setList={setList}></List>
      {
        list.length > 0 ? (
         <DeleteAllButton setList={setList}/>
        ) : (
          <></>
        )
      }
      
    </>
  )
}

export default App
