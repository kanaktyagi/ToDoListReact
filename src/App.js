import React,{useState} from 'react';
import './App.css';
import ToDoList from './ToDoList'

function App() {
  const[inputList, setInputList] =useState("");
  const[Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems)=> {
      return [...oldItems, inputList]
    })
    setInputList('')
  }

  const deleteItem = (id) => {  
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
      <br/>
        <h1>ToDO List </h1>
      <br/>
        <input type="text" placeholder="Add a item" onChange={itemEvent} value={inputList} />
        <button  onClick={listOfItems}> + </button>  
        <ol>
         {
          Items.map((itemVal,index) => {
            return <ToDoList text={itemVal} id={index} key={index} onSelect={deleteItem} />
          })
         }
        </ol>
      </div>
    </div>
  );
}

export default App;
