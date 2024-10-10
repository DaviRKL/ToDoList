import { useState } from 'react'
import './Styles.css'
import Title from '../Title/Index'
import Input from '../Input/Index'
import List from '../List/Index'
import DeleteAllButton from '../DeleteAllButton/Index'

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  return (
    <>
      <Title />
      <Input text={text} setText={setText} setList={setList}></Input>
      <List list={list} setList={setList}></List>
      {
        list.length > 0 ? (
         <DeleteAllButton setList={setList}/>
        ) : (
          <p></p>
        )
      }
      
    </>
  )
}

export default App
