import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles.css'

function DeleteAllButton({ setList,}) {

  return (
    <>
      <ul>
      <button onClick={(e) => {setList([])}}> Deletar tudo</button>
      </ul>
    </>
  )
}

export default DeleteAllButton;
