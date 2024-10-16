import './Styles.css';

function DeleteAllButton({ deleteAllItems }) {
  return (
    <>
      <ul>
        <button onClick={deleteAllItems}>Deletar tudo</button>
      </ul>
    </>
  );
}

export default DeleteAllButton;
